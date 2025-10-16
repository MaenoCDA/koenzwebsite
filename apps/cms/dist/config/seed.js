"use strict";
/**
 * Strapi seed for start foundation
 * use this file to fill in customer info
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedData = void 0;
const slugify_1 = __importDefault(require("slugify"));
exports.SeedData = [
    {
        uid: 'api::tag.tag',
        type: 'collectionType',
        data: [
            {
                title: 'Tag 1',
                slug: (0, slugify_1.default)('Tag 1', { lower: true }),
            },
            {
                title: 'Tag 2',
                slug: (0, slugify_1.default)('Tag 2', { lower: true }),
            },
            {
                title: 'Tag 3',
                slug: (0, slugify_1.default)('Tag 3', { lower: true }),
            },
        ],
    },
    {
        uid: 'api::general-setting.general-setting',
        type: 'singleType',
        data: {
            socials: [
                {
                    channel: 'youtube',
                    url: 'https://www.youtube.com/@koenztrading',
                },
                {
                    channel: 'instagram',
                    url: 'https://www.instagram.com/koenztrading',
                },
                {
                    channel: 'twitter',
                    url: 'https://x.com/koenznl',
                },
            ],
            SEO: {
                affixMetaTitle: '| Koenz Trading',
                fallbackMetaTitle: 'Daily bitcoin market updates',
                fallbackMetaDescription: 'Hi! My name is Koen and I share daily updates on Bitcoin using Elliott Waves analysis.',
                fallbackKeywords: 'Bitcoin',
            },
            tagline: 'Daily bitcoin updates',
        },
    },
    {
        uid: 'api::home-page.home-page',
        type: 'singleType',
        data: {
            title: 'Home',
            hero: [
                {
                    __component: 'hero.image',
                    title: 'Your guide to mastering market movement',
                    text: "We're Sharing daily updates on Bitcoin using Elliott Waves analysis",
                },
            ],
            flexContent: [],
            publishedAt: new Date(),
        },
    },
    {
        uid: 'api::overview.overview',
        type: 'singleType',
        data: {
            title: 'Articles & Videos',
            slug: 'articles-videos',
            flexContent: [],
            hero: [
                {
                    __component: 'hero.image',
                    title: 'Articles & Videos',
                },
            ],
            childrenUid: 'api::post.post',
            publishedAt: new Date(),
        },
    },
    {
        uid: 'api::page.page',
        type: 'collectionType',
        data: [
            {
                title: 'About us',
                slug: (0, slugify_1.default)('About us', { lower: true }),
                hero: [
                    {
                        __component: 'hero.image',
                        title: 'About us',
                        text: '',
                    },
                ],
                flexContent: [],
                publishedAt: new Date(),
            },
            {
                title: 'Contact',
                slug: (0, slugify_1.default)('Contact', { lower: true }),
                hero: [
                    {
                        __component: 'hero.image',
                        title: 'Contact',
                        text: '',
                    },
                ],
                flexContent: [],
                publishedAt: new Date(),
            },
            {
                title: 'Products',
                slug: (0, slugify_1.default)('products', { lower: true }),
                hero: [
                    {
                        __component: 'hero.image',
                        title: 'Products',
                        text: '',
                    },
                ],
                flexContent: [],
                publishedAt: new Date(),
            },
        ],
    },
    {
        uid: 'api::post.post',
        type: 'collectionType',
        data: [
            {
                title: 'Elliott Wave Analysis Extended Wave 5 Impulse',
                slug: (0, slugify_1.default)('Elliott Wave Analysis Extended Wave 5 Impulse', { lower: true }),
                parentUid: 'api::overview.overview',
                hero: [
                    {
                        __component: 'hero.image',
                        title: 'Elliott Wave Analysis Extended Wave 5 Impulse',
                        text: '',
                    },
                ],
                flexContent: [],
                publishedAt: new Date(),
            },
            {
                title: 'Elliott Wave Analysis Extended Wave 5 Impulse 2',
                slug: (0, slugify_1.default)('Elliott Wave Analysis Extended Wave 5 Impulse 2', { lower: true }),
                parentUid: 'api::overview.overview',
                hero: [
                    {
                        __component: 'hero.image',
                        title: 'Elliott Wave Analysis Extended Wave 5 Impulse',
                        text: '',
                    },
                ],
                flexContent: [],
                publishedAt: new Date(),
            },
            {
                title: 'Elliott Wave Analysis Extended Wave 5 Impulse 3',
                slug: (0, slugify_1.default)('Elliott Wave Analysis Extended Wave 5 Impulse 3', { lower: true }),
                parentUid: 'api::overview.overview',
                hero: [
                    {
                        __component: 'hero.image',
                        title: 'Elliott Wave Analysis Extended Wave 5 Impulse',
                        text: '',
                    },
                ],
                flexContent: [],
                publishedAt: new Date(),
            },
        ],
    },
    {
        uid: 'api::menu.menu',
        type: 'collectionType',
        data: [
            {
                title: 'Main navigation',
                slug: (0, slugify_1.default)('Main navigation', { lower: true }),
                menuItems: [
                    {
                        label: 'Articles & Videos',
                        link: {
                            link: {
                                uid: 'api::overview.overview',
                                kind: 'singleType',
                            },
                            type: 'internal',
                            target: 'self',
                        },
                    },
                    {
                        label: 'About us',
                        link: {
                            link: {
                                uid: 'api::page.page',
                                kind: 'collectionType',
                                slug: (0, slugify_1.default)('About us', { lower: true }),
                            },
                            type: 'internal',
                            target: 'self',
                        },
                    },
                    {
                        label: 'Products',
                        link: {
                            link: {
                                uid: 'api::page.page',
                                kind: 'collectionType',
                                slug: (0, slugify_1.default)('Products', { lower: true }),
                            },
                            type: 'internal',
                            target: 'self',
                        },
                    },
                    {
                        label: 'Contact',
                        isButton: true,
                        link: {
                            link: {
                                uid: 'api::page.page',
                                kind: 'collectionType',
                                slug: (0, slugify_1.default)('Contact', { lower: true }),
                            },
                            type: 'internal',
                            target: 'self',
                        },
                    },
                ],
            },
            {
                title: 'Footer menu',
                slug: (0, slugify_1.default)('Footer menu', { lower: true }),
                menuItems: [
                    {
                        label: 'Lorem ipsum',
                        link: {
                            link: '',
                            type: 'external',
                            target: '_self',
                        },
                    },
                    {
                        label: 'Lorem ipsum',
                        link: {
                            link: '',
                            type: 'external',
                            target: '_self',
                        },
                    },
                    {
                        label: 'Lorem ipsum',
                        link: {
                            link: '',
                            type: 'external',
                            target: '_self',
                        },
                    },
                ],
            },
            {
                title: 'Bottom navigation',
                slug: (0, slugify_1.default)('Bottom navigation', { lower: true }),
                menuItems: [
                    {
                        label: 'Terms and conditions',
                        link: {
                            link: '',
                            type: 'external',
                            target: '_self',
                        },
                    },
                    {
                        label: 'Privacy notice',
                        link: {
                            link: '',
                            type: 'external',
                            target: '_self',
                        },
                    },
                    {
                        label: 'Disclaimer',
                        link: {
                            link: '',
                            type: 'external',
                            target: '_self',
                        },
                    },
                ],
            },
        ],
    },
];
