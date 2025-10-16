//@ts-nocheck
import { merge, isEmpty } from 'lodash';

const getModelPopulationAttributes = (model: any) => {
	if (model.uid === 'plugin::upload.file') {
		const { related, ...attributes } = model.attributes;
		return attributes;
	}

	return model.attributes;
};

export const getFullPopulateObject = (modelUid: string, maxDepth: number = 4, ignore: string[] = []): any => {
	const skipCreatorFields = strapi.plugin('strapi-plugin-populate-deep')?.config('skipCreatorFields');

	if (maxDepth <= 1) {
		return true;
	}

	if (modelUid === 'admin::user' && skipCreatorFields) {
		return undefined;
	}

	const populate: Record<string, any> = {};
	const model = strapi.getModel(modelUid);
	if (!model) {
		console.warn(`Model ${modelUid} not found`);
		return true;
	}

	if (ignore && !ignore.includes(model.collectionName)) ignore.push(model.collectionName);

	for (const [key, value] of Object.entries(getModelPopulationAttributes(model))) {
		if (ignore.includes(key) || !value) continue;

		const handlers: Record<string, () => void> = {
			component: () => {
				populate[key] = getFullPopulateObject(value.component, maxDepth - 1);
			},
			dynamiczone: () => {
				const dynamicPopulate = value.components.reduce(
					(acc: any, cur: string) => ({
						...acc,
						[cur]: getFullPopulateObject(cur, maxDepth - 1),
					}),
					{}
				);

				populate[key] = isEmpty(dynamicPopulate) ? true : { on: dynamicPopulate };
			},
			relation: () => {
				const relationDepth = key === 'localizations' && maxDepth > 2 ? 1 : maxDepth - 1;
				const relationPopulate = getFullPopulateObject(value.target, relationDepth, ignore);

				if (relationPopulate) {
					populate[key] = relationPopulate;
				}
			},
			media: () => {
				populate[key] = true;
			},
		};

		handlers[value.type]?.();
	}

	return isEmpty(populate) ? true : { populate };
};
