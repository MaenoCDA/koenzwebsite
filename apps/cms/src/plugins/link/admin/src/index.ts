import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app: any) {
    app.customFields.register({
      name: 'link',
      type: 'json',
      pluginId: PLUGIN_ID,
      icon: PluginIcon,
      intlLabel: {
        id: 'link.label',
        defaultMessage: 'Link',
      },
      intlDescription: {
        id: 'link.description',
        defaultMessage: 'Menu link slug builder',
      },
      components: {
        Input: async () => import('./components/LinkField'),
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: 'link.format.heading',
              defaultMessage: 'Link format',
            },
            items: [
              {
                intlLabel: {
                  id: 'link.format.label',
                  defaultMessage: 'Format',
                },
                name: 'options.format',
                type: 'select',
                value: 'link',
                options: [
                  {
                    key: 'link',
                    defaultValue: 'link',
                    value: 'link',
                    metadatas: {
                      intlLabel: {
                        id: 'link.options.format.link',
                        defaultMessage: 'Link',
                      },
                    },
                  },
                  {
                    key: 'path',
                    value: 'path',
                    metadatas: {
                      intlLabel: {
                        id: 'link.options.format.path',
                        defaultMessage: 'Path',
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
        advanced: [
          {
            sectionTitle: {
              id: 'global.settings',
              defaultMessage: 'Settings',
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: 'link.options.advanced.requiredField',
                  defaultMessage: 'Required field',
                },
                description: {
                  id: 'link.options.advanced.requiredField.description',
                  defaultMessage: "You won't be able to create an entry if this field is empty",
                },
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
