"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS'),
    },
    url: env('STRAPI_URL', 'http://localhost:1337'),
    webhook: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
    // Proper SSL/TLS configuration based on environment
    http: {
        rejectUnauthorized: env('NODE_ENV') === 'production' ? true : false,
    },
    // Production SSL configuration
    ...(env('NODE_ENV') === 'production' && {
        https: {
            enabled: env.bool('HTTPS_ENABLED', false),
            options: {
                key: env('SSL_KEY_PATH'),
                cert: env('SSL_CERT_PATH'),
                ca: env('SSL_CA_PATH'),
                rejectUnauthorized: true,
                minVersion: 'TLSv1.2',
                ciphers: [
                    'ECDHE-RSA-AES256-GCM-SHA512',
                    'ECDHE-RSA-AES256-GCM-SHA384',
                    'ECDHE-RSA-AES256-SHA384',
                    'ECDHE-RSA-AES256-SHA'
                ].join(':'),
                honorCipherOrder: true
            }
        }
    }),
    // Development SSL configuration
    ...(env('NODE_ENV') === 'development' && {
        http: {
            rejectUnauthorized: false,
        },
    }),
});
