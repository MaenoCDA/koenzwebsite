import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import PluginIcon from './components/PluginIcon';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'collection-type-select',
      pluginId: 'collection-type-select',
      type: 'string',
      intlLabel: {
        id: 'collection-type-select.label',
        defaultMessage: 'Teaser collection select field',
      },
      intlDescription: {
        id: 'collection-type-select.description',
        defaultMessage: 'Select your collection-type for latest teasers',
      },
      icon: PluginIcon,
      components: {
        Input: async () => import(/* webpackChunkName: "input-component" */ './components/Input'),
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: 'collection-type-select.restrict.title',
              defaultMessage: 'Sorting',
            },
            items: [
              {
                intlLabel: {
                  id: 'collection-type-select.restrict.label',
                  defaultMessage: 'Sort by',
                },
                name: 'optionsSortBy',
                type: 'select',
                value: 'id',
                options: [
                  {
                    key: 'id',
                    defaultValue: 'id',
                    value: 'id',
                    metadatas: {
                      intlLabel: {
                        id: 'collection-type-select.restrict.id',
                        defaultMessage: 'ID',
                      },
                    },
                  },
                  {
                    key: 'createdAt',
                    defaultValue: 'createdAt',
                    value: 'createdAt',
                    metadatas: {
                      intlLabel: {
                        id: 'collection-type-select.restrict.createdAt',
                        defaultMessage: 'Created at date',
                      },
                    },
                  },
                  {
                    key: 'publishedAt',
                    defaultValue: 'publishedAt',
                    value: 'publishedAt',
                    metadatas: {
                      intlLabel: {
                        id: 'collection-type-select.restrict.publishedAt',
                        defaultMessage: 'Published date',
                      },
                    },
                  },
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
