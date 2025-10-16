const TransformRichText = async (strapi, ctx) => {
	const { body } = ctx;
	// ensure body exists, occurs on non existent route
	if (!body || !body.data) {
		return;
	}
	const routes = await strapi.plugin('link').service('service').routes(ctx);

	const transformLinks = (content) => {
		if (!content) {
			return '';
		}
		// Replace links starting with "api::" using the routes object
		return content.replace(/api::([^"]+)/g, (match, rest) => {
			const [uid, documentId, locale] = match.split('/');
			if (!uid || !documentId || !locale || !routes[locale]) {
				return '';
			}
			const route = routes[locale].find((route) => {
				return route.uid === uid && route.documentId === documentId;
			});
			return route ? route.route : `/${locale}/`;
		});
	};

	if (!Array.isArray(body.data)) {
		body.data = [body.data];
	}

	for (const entry of body.data) {
		const { hero, flexContent } = entry;
		if (hero) {
			for (const [key, item] of hero.entries()) {
				if (!item.text) {
					return;
				}
				hero[key].text = transformLinks(item.text);
			}
		}
		if (flexContent) {
			for (const [key, item] of flexContent.entries()) {
				if (item.text) {
					flexContent[key].text = transformLinks(item.text);
				}
				if (item.paragraph) {
					flexContent[key].paragraph.text = transformLinks(item.paragraph.text);
				}
			}
		}
	}
};

export default TransformRichText;
