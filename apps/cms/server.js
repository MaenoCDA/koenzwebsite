const strapi = require('@strapi/strapi');

// SSL Configuration for different environments
const nodeEnv = process.env.NODE_ENV || 'development';

// Development: Disable SSL verification for local development
if (nodeEnv === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  console.log('🔓 Development mode: SSL verification disabled');
}

// Production: Ensure SSL verification is enabled (Render)
if (nodeEnv === 'production') {
  // Force SSL verification in production
  if (process.env.NODE_TLS_REJECT_UNAUTHORIZED !== 'true') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 'true';
  }
  console.log('🔒 Production mode: SSL verification enabled');
}

// Handle Render-specific SSL issues
if (process.env.RENDER === 'true' || nodeEnv === 'production') {
  // Additional SSL fixes for Render
  process.env['NODE_OPTIONS'] = '--tls-min-v1.2';
  
  // Fix for Render's internal networking
  require('https').globalAgent.options.keepAlive = true;
  require('https').globalAgent.options.keepAliveMsecs = 30000;
  
  console.log('🚀 Render environment detected - SSL optimizations applied');
}

const app = strapi.createStrapi({ distDir: './dist' });

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  app.stop();
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  app.stop();
});

app.start().then(() => {
  console.log(`🎉 Strapi server started successfully in ${nodeEnv} mode`);
  console.log(`📍 Server URL: ${process.env.STRAPI_URL || 'http://localhost:1337'}`);
  console.log(`🏥 Health check: ${process.env.STRAPI_URL || 'http://localhost:1337'}/health`);
}).catch((error) => {
  console.error('❌ Failed to start Strapi server:', error);
  process.exit(1);
});
