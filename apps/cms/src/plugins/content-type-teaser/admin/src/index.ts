import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  async register(app: any) {
    const fetchContentTypes = await fetch(`/collection-type-select/collection-types/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const contentTypes = await fetchContentTypes.json();

    app.customFields.register({
      name: 'content-type-teaser',
      pluginId: 'content-type-teaser',
      type: 'string',
      intlLabel: {
        id: 'content-type-teaser.label',
        defaultMessage: 'Content Type Teaser',
      },
      intlDescription: {
        id: 'content-type-teaser.description',
        defaultMessage: 'Add teasers from existing content types',
      },
      icon: PluginIcon,
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ './components/Input'),
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: 'content-type-teaser.restrict.title',
              defaultMessage: 'Restrict content-types',
            },
            items: [
              {
                intlLabel: {
                  id: 'content-type-teaser.restrict.label',
                  defaultMessage: 'Content-types',
                },
                name: 'optionsRestrict',
                type: 'select',
                value: 'all',
                options: [
                  {
                    key: 'all',
                    defaultValue: 'all',
                    value: 'all',
                    metadatas: {
                      intlLabel: {
                        id: 'content-type-teaser.restrict.all',
                        defaultMessage: 'All content-types',
                      },
                    },
                  },
                  ...contentTypes.map((contentType: any) => {
                    return {
                      key: contentType.uid,
                      defaultValue: contentType.collectionName,
                      value: contentType.uid,
                      metadatas: {
                        intlLabel: {
                          id: `content-type-teaser.restrict.${contentType.collectionName}`,
                          defaultMessage: contentType.name,
                        },
                      },
                    };
                  }),
                ],
              },
            ],
          },
        ],
      },
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(`./translations/${locale}.json`);

          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};
