const strapi = require('@strapi/strapi');

// SSL Configuration for different environments
const nodeEnv = process.env.NODE_ENV || 'development';

// Handle production environment SSL issues (Render, DigitalOcean, etc.)
if (nodeEnv === 'production') {
  const platform = process.env.RENDER ? 'Render' :
                  process.env.DIGITAL_OCEAN ? 'DigitalOcean' :
                  'Unknown Platform';
  
  // Allow self-signed certificates for internal services
  const sslDisabled = process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0';
  
  if (sslDisabled) {
    console.log(`⚠️  SSL verification disabled - using for ${platform} deployment`);
  } else {
    console.log(`🔒 SSL verification enabled - production mode on ${platform}`);
  }
  
  // Platform-specific optimizations
  if (process.env.RENDER) {
    // Render-specific SSL fixes
    process.env['NODE_OPTIONS'] = '--tls-min-v1.2';
    require('https').globalAgent.options.keepAlive = true;
    require('https').globalAgent.options.keepAliveMsecs = 30000;
    console.log('🚀 Render environment detected - SSL optimizations applied');
  } else if (process.env.DIGITAL_OCEAN) {
    // DigitalOcean-specific optimizations
    console.log('🌊 DigitalOcean environment detected - using automatic SSL');
  } else {
    // Generic production optimizations
    process.env['NODE_OPTIONS'] = '--tls-min-v1.2';
    console.log('🚀 Production environment detected - generic optimizations applied');
  }
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
