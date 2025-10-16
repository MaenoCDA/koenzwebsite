// Fix for self-signed certificate issues in production
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const strapi = require('@strapi/strapi');

const app = strapi.createStrapi({ distDir: './dist' });
app.start();
