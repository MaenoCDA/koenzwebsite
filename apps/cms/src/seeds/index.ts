//@ts-nocheck
import { StrapiProps } from 'types/strapi';
import { NewsletterSeedData, SeedData } from '../../config/seeds';

const generateSeedFormData = async (strapi: StrapiProps) => {
	let newsletterForm = await strapi.db.query('plugin::api-forms.form').findMany({
		where: {
			title: NewsletterSeedData.title,
		},
	});

	const newsletterBlock = await strapi.documents('api::fixed-block.fixed-block').findMany({
		title: 'Nieuwsbrief',
		status: 'published',
		populate: '*',
	});

	if (newsletterForm) {
		newsletterForm = newsletterForm.pop();
	}

	if (!newsletterForm) {
		strapi.log.info('Newsletter form does not exists');
		newsletterForm = await strapi.db.query('plugin::api-forms.form').create({ data: NewsletterSeedData });
	}

	if (newsletterBlock.length === 0) {
		const createdBlock = await strapi.documents('api::fixed-block.fixed-block').create({
			status: 'published',
			data: {
				title: 'Nieuwsbrief',
				description: 'Blok voor het tonen van de nieuwsbrief aanmelding',
				relation: 'footer',
				blocks: [
					{
						__component: 'form.newsletter',
						form: {
							set: [newsletterForm.documentId],
						},
					},
				],
			},
		});

		if (!createdBlock) {
			strapi.log.error('Error');
			return;
		}
	}

	return;
};

const generateSeedData = async (strapi: StrapiProps) => {
	SeedData.map(async (seed) => {
		const { uid, type, data } = seed;

		strapi.log.info(`Seeding ${uid}`);

		if (type === 'singleType') {
			const existingData = await strapi.db.query(uid).findMany();

			if (existingData.length > 0) {
				return;
			}

			try {
				await strapi.documents(uid).create({
					data,
				});
			} catch (error) {
				console.error(error);
			}
		} else if (type === 'collectionType') {
			switch (uid) {
				default:
					seed.data.map(async (data) => {
						const existingData = await strapi.db.query(uid).findMany({ where: { slug: data.slug }, populate: true });

						if (existingData.length > 0) {
							return;
						}

						await strapi
							.documents(uid)
							.create({
								data,
							})
							.catch((error) => {
								console.error(JSON.stringify(error), uid);
							});
					});
					break;
			}
		}
	});
};

export { generateSeedData, generateSeedFormData };
