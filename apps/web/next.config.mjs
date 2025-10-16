import parsed from 'dotenv';
import withBundleAnalyzer from '@next/bundle-analyzer';
const envConfig = parsed.config({ path: '../../.env' });
// Only set env with the NEXT_PUBLIC_ prefix on process.env
for (const key in envConfig) {
	if (key.startsWith('NEXT_PUBLIC_')) {
		process.env[key] = envConfig[key];
	}
}

const cspHeader = `
    frame-ancestors 'self' ${process.env.NEXT_PUBLIC_CMS_URL};
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
