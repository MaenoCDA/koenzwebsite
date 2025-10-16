// Fix for self-signed certificate issues in production
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Global HTTPS fix for all requests
require('https').globalAgent.options.rejectUnauthorized = false;

const strapi = require('@strapi/strapi');

const app = strapi.createStrapi({ distDir: './dist' });
app.start();
