import parsed from 'dotenv';
import withBundleAnalyzer from '@next/bundle-analyzer';

// Try to load .env file if it exists, but don't fail if it doesn't
try {
	const envConfig = parsed.config({ path: '../../.env' });
	// Only set env with the NEXT_PUBLIC_ prefix on process.env
	for (const key in envConfig) {
		if (key.startsWith('NEXT_PUBLIC_')) {
			process.env[key] = envConfig[key];
		}
	}
} catch (error) {
	// .env file doesn't exist or can't be read, which is fine in production
	console.log('No .env file found, relying on environment variables');
}

// Set fallback values for required environment variables
if (!process.env.NEXT_PUBLIC_CMS_URL) {
	process.env.NEXT_PUBLIC_CMS_URL = process.env.NODE_ENV === 'production'
		? 'https://your-cms-url.vercel.app'
		: 'http://localhost:1337';
}

// During build time, if CMS URL is localhost, disable static generation
if (process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PUBLIC_CMS_URL?.includes('localhost')) {
	console.warn('CMS URL is localhost during production build - disabling static generation');
	process.env.DISABLE_STATIC_GENERATION = 'true';
}

const cspHeader = `
    frame-ancestors 'self' ${process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:1337'};
`;

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: cspHeader.replace(/\n/g, ''),
					},
				],
			},
		];
	},

	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},

	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		return config;
	},

	experimental: {
		optimizePackageImports: ['@mui/icons-material', 'motion', '@svgr/webpack', 'next-international'],
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			},
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
			},
			{
				protocol: 'http',
				hostname: '127.0.0.1',
			},
			{
				protocol: 'https',
				hostname: '**.ef2.builders',
			},
			{
				protocol: 'https',
				hostname: '**.s3.eu-central-1.amazonaws.com',
			},
			{
				protocol: 'https',
				hostname: '**.ondigitalocean.app',
			},
		],
	},
	async rewrites() {
		return {
			afterFiles: [
				{
					source: '/nl/zoeken',
					destination: '/nl/search',
				},
			],
		};
	},
};

export default bundleAnalyzer(nextConfig);
