//@ts-nocheck
import {
  Badge,
  Box,
  Combobox,
  ComboboxOption,
  Field,
  SingleSelect,
  SingleSelectOption,
  Flex,
  Grid,
  TextInput,
} from '@strapi/design-system';
import { useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { getTranslation } from '../../src/utils/getTranslation';
import useApi from '../hooks/useApi';
import { DeepPartial, LinkValue, Route } from '../../../types/types';
import { Typography } from '@strapi/design-system';
import { PLUGIN_ID } from '../pluginId';

interface LinkFieldProps {
  value?: string | null;
  onChange: (value: { target: { name: string; type: string; value: string } }) => void;
  name: string;
  attribute: any;
}

const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const LinkField = ({
  value: initialValue,
  name,
  onChange,
  attribute,
  intlLabel,
  hint,
  description,
  rawError,
  ...props
}: LinkFieldProps) => {
  const { formatMessage } = useIntl();
  const [selected, setSelected] = useState(null);
  const { fetchRoutes } = useApi();
  const [isRoutesLoading, setIsRoutesLoading] = useState(false);
  const [routes, setRoutes] = useState<Record<string, Route[]>>({});
  const defaultValue = {
    type: 'internal',
    target: 'self',
    link: {
      id: undefined,
      uid: undefined,
      kind: undefined,
      slug: undefined,
    },
  };

  const [value, setValue] = useState<DeepPartial<LinkValue>>(initialValue ?? defaultValue);

  useEffect(() => {
    const fetchAndSetSelected = async () => {
      if (!initialValue || !value || (!value.type && value.type !== 'internal')) {
        return;
      }

      if (value?.type === 'internal') {
        const { id, uid, kind, slug } = value?.link;

        try {
          const routes = await fetchRoutes(`slug=${slug}`);
          setRoutes(routes.data ? routes.data.routes : {});
          setSelected(`${uid}|${id}|${kind}|${slug}`);
        } catch (error) {
          console.log(error);
          console.error('Error fetching routes on load:', error);
        }
      }
    };

    fetchAndSetSelected();
  }, []);
  // Methods.
  const update = useCallback(
    (value: DeepPartial<LinkValue>) => {
      setValue(value);
      onChange({ target: { name, type: 'json', value: JSON.stringify(value) } });
    },
    [onChange]
  );

  const handleOnTypeChange = (type: string) => {
    if (type === 'internal') {
      update({
        target: value?.target || 'self',
        type: 'internal',
        link: {},
      });
    } else if (type === 'external') {
      setIsRoutesLoading(false);
      setSelected(null);
      setRoutes({});
      update({
        target: value?.target || 'self',
        type: 'external',
        link: '',
      });
    } else {
      setIsRoutesLoading(false);
      setSelected(null);
      setRoutes({});
      update({
        target: value?.target || 'self',
        type: 'custom',
        link: '/',
      });
    }
  };

  const handleOnReset = () => {
    update({
      target: value?.target || 'self',
      type: 'internal',
      link: {},
    });
    setSelected(null);
    setRoutes({});
    setIsRoutesLoading(false);
  };

  const handleOnChange = debounce(async (value: string) => {
    if (value.length < 1) {
      // Reset state or show a message if the input is too short
      setSelected(null);
      setIsRoutesLoading(false);
      setRoutes({});
      return;
    }

    setIsRoutesLoading(true);
    setSelected(value);

    console.log('Fetching routes for:', value);

    try {
      const routes = await fetchRoutes(`title=${value}`);
      setRoutes(routes.data ? routes.data.routes : {});
    } catch (error) {
      console.error('Failed to fetch routes:', error);
    } finally {
      setIsRoutesLoading(false);
    }
  }, 300);

  const handleSelectOnChange = (selected: string) => {
    if (!selected) {
      return;
    }

    const [uid, id, kind, slug] = selected.split('|');

    update({
      ...value,
      type: 'internal',
      link: {
        uid,
        id: Number(id),
        kind,
        slug,
      },
    });
  };

  const handleOnTargetChange = (target: string) => {
    update({ ...value, target: target as 'self' | 'blank' });
  };

  const handleOnLinkInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const inputValue = e.target.value;
    update({ ...value, type: type, link: inputValue });
  };

  const fieldLabel = formatMessage({ id: getTranslation('title'), defaultMessage: 'Link' });
  const noOptionsMessage = formatMessage({
    id: getTranslation('noOptions'),
    defaultMessage: 'Zoek naar een pagina - (Nog) geen resultaten',
  });
  const fieldDescription = formatMessage({ id: getTranslation('hint') });

  if (attribute.options?.format === 'path') {
    return (
      <Box>
        <Grid.Root>
          <Grid.Item col={12} paddingBottom={2}>
            <Flex direction="column" alignItems="flex-start" gap={2}>
              <Typography variant="pi" fontWeight="bold">
                {fieldLabel}
              </Typography>
              <Typography variant="pi">{fieldDescription}</Typography>
            </Flex>
          </Grid.Item>
          <Grid.Item col={12}>
            <Field.Root
              error={Boolean(rawError)}
              name="link"
              required
              hint={formatMessage({
                id: getTranslation(`link.internal`),
              })}
              style={{ width: '100%' }}
            >
              <Combobox
                loading={isRoutesLoading}
                placeholder={formatMessage({
                  id: getTranslation(`link.placeholder`),
                })}
                value={selected ? selected : ''}
                onChange={handleSelectOnChange}
                onTextValueChange={(value) => handleOnChange(value)}
                onClear={handleOnReset}
                style={{ width: '100%' }}
              >
                {routes &&
                  Object.entries(routes).map((localizedRoutes) => {
                    return localizedRoutes[1].map((route: Route) => (
                      <ComboboxOption
                        key={route.uid}
                        value={`${route.uid}|${route.id}|${route.kind}|${route.slug}`}
                        textValue={route.title}
                      >
                        <Flex alignItems="center" justifyContent="space-between">
                          {route.title}
                          <Badge padding="0" marginRight="2">
                            {localizedRoutes[0]} - {route.uid}
                          </Badge>
                        </Flex>
                      </ComboboxOption>
                    ));
                  })}
              </Combobox>
              <Field.Hint />
            </Field.Root>
          </Grid.Item>
        </Grid.Root>
      </Box>
    );
  }

  return (
    <Flex spacing={2}>
      <Box>
        <Grid.Root>
          <Grid.Item col={12} paddingBottom={2}>
            <Flex direction="column" alignItems="flex-start" gap={2}>
              <Typography variant="pi" fontWeight="bold">
                {fieldLabel}
              </Typography>
              <Typography variant="pi">{fieldDescription}</Typography>
            </Flex>
          </Grid.Item>
        </Grid.Root>
        <Grid.Root gap="2" style={{ alignItems: 'flex-start' }}>
          <Grid.Item col={12}>
            <Flex gap={4} direction="row" alignItems="flex-start" style={{ width: '100%' }}>
              <Field.Root
                error={Boolean(rawError)}
                required={false}
                name="type"
                hint={formatMessage({
                  id: getTranslation(`type`),
                })}
                style={{ width: '100%' }}
              >
                <SingleSelect
                  required
                  label="Type"
                  placeholder="Type"
                  value={value?.type}
                  onChange={handleOnTypeChange}
                >
                  <SingleSelectOption value="internal">
                    {formatMessage({
                      id: getTranslation(`target.internal`),
                    })}
                  </SingleSelectOption>
                  <SingleSelectOption value="custom">
                    {formatMessage({
                      id: getTranslation(`target.custom`),
                    })}
                  </SingleSelectOption>
                  <SingleSelectOption value="external">
                    {formatMessage({
                      id: getTranslation(`target.external`),
                    })}
                  </SingleSelectOption>
                </SingleSelect>
                <Field.Hint />
              </Field.Root>
              <Field.Root
                error={Boolean(rawError)}
                name="target"
                required
                hint={formatMessage({
                  id: getTranslation(`target`),
                })}
                style={{ width: '100%' }}
              >
                <SingleSelect
                  required
                  label="Target"
                  placeholder="Type"
                  value={value?.target ?? 'self'}
                  onChange={handleOnTargetChange}
                >
                  <SingleSelectOption value="self">
                    {' '}
                    {formatMessage({
                      id: getTranslation(`target.self`),
                    })}
                  </SingleSelectOption>
                  <SingleSelectOption value="blank">
                    {formatMessage({
                      id: getTranslation(`target.blank`),
                    })}
                  </SingleSelectOption>
                </SingleSelect>
                <Field.Hint />
              </Field.Root>
            </Flex>
          </Grid.Item>
          <Grid.Item col={12} m={12} s={12}>
            {value?.type === 'internal' ? (
              <Field.Root
                error={Boolean(rawError)}
                name="link"
                required
                hint={formatMessage({
                  id: getTranslation(`link.internal`),
                })}
                style={{ width: '100%' }}
              >
                <Combobox
                  loading={isRoutesLoading}
                  placeholder={formatMessage({
                    id: getTranslation(`link.placeholder`),
                  })}
                  value={selected ? selected : ''}
                  onChange={handleSelectOnChange}
                  onTextValueChange={(value) => handleOnChange(value)}
                  onClear={handleOnReset}
                  noOptionsMessage={() => noOptionsMessage}
                >
                  {routes &&
                    Object.entries(routes).map((localizedRoutes) => {
                      return localizedRoutes[1].map((route: Route) => (
                        <ComboboxOption
                          key={route.uid}
                          value={`${route.uid}|${route.id}|${route.kind}|${route.slug}`}
                          textValue={route.title}
                        >
                          <Flex alignItems="center" justifyContent="space-between">
                            {route.title}
                            <Badge padding="0" marginRight="2">
                              {localizedRoutes[0]} - {route.uid}
                            </Badge>
                          </Flex>
                        </ComboboxOption>
                      ));
                    })}
                </Combobox>
                <Field.Hint />
              </Field.Root>
            ) : value?.type === 'external' ? (
              <Field.Root
                error={Boolean(rawError)}
                name="link"
                required
                hint={formatMessage({
                  id: getTranslation(`link.external`),
                })}
                paddingBottom={2}
                style={{ width: '100%' }}
              >
                <TextInput
                  onChange={(e) => handleOnLinkInputChange(e, 'external')}
                  value={value?.link}
                  label="Link"
                  placeholder="https://"
                />
                <Field.Hint />
              </Field.Root>
            ) : (
              <Field.Root
                error={Boolean(rawError)}
                name="link"
                required
                hint={formatMessage({
                  id: getTranslation(`link.custom`),
                })}
                paddingBottom={2}
                style={{ width: '100%' }}
              >
                <TextInput
                  onChange={(e) => handleOnLinkInputChange(e, 'custom')}
                  value={value?.link}
                  label="Link"
                  placeholder="/"
                />
                <Field.Hint />
              </Field.Root>
            )}
          </Grid.Item>
        </Grid.Root>
      </Box>
    </Flex>
  );
};

export default LinkField;
