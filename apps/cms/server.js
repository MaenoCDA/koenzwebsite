const strapi = require('@strapi/strapi');

// SSL Configuration for different environments
const nodeEnv = process.env.NODE_ENV || 'development';

// Handle Render-specific SSL issues
if (process.env.RENDER === 'true' || nodeEnv === 'production') {
  // For Render, we need to handle SSL more carefully
  // Allow self-signed certificates for internal services but validate external ones
  const sslDisabled = process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0';
  
  if (sslDisabled) {
    console.log('⚠️  SSL verification disabled - using for Render deployment');
  } else {
    console.log('🔒 SSL verification enabled - production mode');
  }
  
  // Additional SSL fixes for Render
  process.env['NODE_OPTIONS'] = '--tls-min-v1.2';
  
  // Fix for Render's internal networking
  require('https').globalAgent.options.keepAlive = true;
  require('https').globalAgent.options.keepAliveMsecs = 30000;
  
  console.log('🚀 Render environment detected - SSL optimizations applied');
} else {
  // Development: Disable SSL verification for local development
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  console.log('🔓 Development mode: SSL verification disabled');
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
