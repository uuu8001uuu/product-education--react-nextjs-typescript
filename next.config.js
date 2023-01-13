/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
            issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{ 
                        name: 'preset-default',
                        params: {
                            override: {
                                removeViewBox: false
                            }
                        }
                     }],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
	images: {
		domains: ['courses-top.ru']
	},
}

module.exports = nextConfig
