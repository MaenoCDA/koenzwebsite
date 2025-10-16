"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'frame-src': ["'self'", 'youtube.com', 'www.youtube.com', 'vimeo.com', '*.vimeo.com', 'facebook.com', 'www.facebook.com'],
                    'script-src': ["'self'", "'unsafe-inline'", 'maps.googleapis.com'],
                    'connect-src': ["'self'", 'https:'],
                    'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', `${env('AWS_BUCKET')}.s3.eu-central-1.amazonaws.com`],
                    'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', `${env('AWS_BUCKET')}.s3.eu-central-1.amazonaws.com`],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
