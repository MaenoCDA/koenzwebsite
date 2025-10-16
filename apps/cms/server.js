// Fix for self-signed certificate issues in production
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Global HTTPS fix for all requests
require('https').globalAgent.options.rejectUnauthorized = false;

// Additional Node.js TLS fixes
process.env['NODE_OPTIONS'] = '--tls-min-v1.0';

// Override all https requests
const originalRequest = require('https').request;
require('https').request = function(options, callback) {
  options.rejectUnauthorized = false;
  return originalRequest.call(this, options, callback);
};

const strapi = require('@strapi/strapi');

const app = strapi.createStrapi({ distDir: './dist' });
app.start();
