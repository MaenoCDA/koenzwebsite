//@ts-nocheck
export default (config, webpack) => {
	config.output.publicPath = '/admin/';

	// Important: return the modified config
	return config;
};
