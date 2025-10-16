//@ts-nocheck
import React, { useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { PLUGIN_ID } from '../pluginId';
import {
  Typography,
  Combobox,
  ComboboxOption,
  Flex,
  Button,
  Box,
  Badge,
} from '@strapi/design-system';
import { useFetchClient } from '@strapi/strapi/admin';
import { useLocation } from 'react-router-dom';
import { getTranslation } from '../../src/utils/getTranslation';

const getCurrentLocale = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get('plugins[i18n][locale]');
};

export default function Index({
  name,
  error,
  description,
  onChange,
  value,
  intlLabel,
  attribute,
}: {
  name: string;
  error: string;
  description: string;
  onChange: any;
  value: string;
  intlLabel: any;
  attribute: any;
}) {
  const { get, post } = useFetchClient();
  const { formatMessage } = useIntl();
  const [paths, setPaths] = useState([]);
  const [selected, setSelected] = useState(value ?? null);
  const [values, setValues] = useState([]);
  const [fields, setFields] = useState([]);
  const [result, setResult] = useState('');
  const [toggle, setToggle] = useState(false);
  const { optionsRestrict } = attribute;
  const locale = getCurrentLocale();

  useEffect(() => {
    if (!selected) {
      return;
    }

    if (selected.fields) {
      setToggle(true);
    }
  }, []);

  const handleOnChange = (value: string) => {
    if (!value || value.indexOf('|') === -1) {
      return;
    }

    const [uid, id, title] = value.split('|');
    setSelected({ uid, id, value });

    onChange({ target: { name, type: 'json', value: JSON.stringify({ uid, id, value }) } });
    onChange({
      target: { name: name.replace(/teaser(?!.*teaser)/, 'title'), type: 'string', value: title },
    });
  };

  const handleOnFieldChange = (category, items, value) => {
    const chosenValue = items.find((item) => (item.path ? item.path === value : false));
    const { fields } = selected;
    const newFields = { ...fields, [category]: chosenValue };

    setSelected({ ...selected, fields: newFields });
    onChange({
      target: { name, type: 'json', value: JSON.stringify({ ...selected, fields: newFields }) },
    });
  };

  const handleToggle = () => {
    if (selected.fields && toggle) {
      setSelected({ ...selected, fields: null });
      onChange({
        target: { name, type: 'json', value: JSON.stringify({ ...selected, fields: null }) },
      });
    }

    setToggle(!toggle);
  };

  useEffect(() => {
    if (!selected) {
      return;
    }

    fetchFields();
  }, [selected]);

  const fetchFields = useCallback(async () => {
    if (!selected || !selected.value) {
      return;
    }

    const [uid, id] = selected.value.split('|');

    const fields = (await post(`/content-type-teaser/content-type-fields`, { uid, id })).data;

    setFields(fields);
  }, [selected]);

  const fetch = useCallback(async () => {
    const routes = (await get(`/link/routes`, value)).data;

    if (!routes.data.routes) {
      return;
    }

    let slugs = routes.data.routes[locale];

    if (optionsRestrict && optionsRestrict !== 'all') {
      slugs = slugs.filter((slug) => slug.uid === optionsRestrict);
    }

    setPaths(slugs);
  }, [setPaths]);

  useEffect(() => {
    fetch();
  }, []);

  if (!paths) {
    return <></>;
  }

  return (
    <Box spacing={1}>
      <Flex direction="column" alignItems="flex-start">
        <Typography fontWeight="bold">
          {formatMessage({
            id: getTranslation(`select`),
          })}
        </Typography>
        <Typography variant="pi">
          {formatMessage({ id: getTranslation(`longDescription`) })}
        </Typography>
      </Flex>
      <Box paddingTop={4} paddingBottom={4}>
        <Box style={{ width: '85%' }}>
          <Combobox
            value={selected ? selected?.value : ''}
            onChange={(value: string) => handleOnChange(value)}
            onClear={() => setSelected(null)}
          >
            {paths.map((path, index) => (
              <ComboboxOption
                key={`${path.uid}-${index}`}
                value={`${path.uid}|${path.id}|${path.route} - ${path.title}`}
                textValue={path.title}
              >
                <Flex alignItems="center" justifyContent="space-between">
                  {path.title}
                  <Badge padding="0" marginRight="2">
                    {locale} - {path.uid}
                  </Badge>
                </Flex>
              </ComboboxOption>
            ))}
          </Combobox>
        </Box>
        {selected && (
          <Box paddingTop={4}>
            <Button onClick={() => handleToggle()}>
              {formatMessage({
                id: `${PLUGIN_ID}.teaser.${toggle ? 'default' : 'custom'}`,
              })}
            </Button>
          </Box>
        )}
      </Box>
      {toggle && (
        <Box spacing={1} paddingTop={4}>
          <Flex direction="column" alignItems="flex-start">
            <Typography fontWeight="bold">
              {formatMessage({
                id: `${PLUGIN_ID}.teaser.title`,
                defaultMessage: 'Fields',
              })}
            </Typography>
            <Typography variant="pi">
              {formatMessage({
                id: `${PLUGIN_ID}.teaser.description`,
                defaultMessage: 'Link the teaser fields to the selected content type',
              })}
            </Typography>
          </Flex>
          {fields &&
            Object.entries(fields).map(([category, items]) => {
              const selectedValue = selected?.fields?.hasOwnProperty(category)
                ? selected?.fields[category]?.path
                : null;
              return (
                <Box spacing={2} key={category} paddingTop={2}>
                  <Typography fontWeight="bold">
                    {formatMessage({
                      id: `${PLUGIN_ID}.teaser.${category}`,
                      defaultMessage: category,
                    })}
                  </Typography>
                  <Combobox
                    value={selectedValue}
                    onChange={(value) => handleOnFieldChange(category, items, value)}
                    onClear={() => {}}
                    label={formatMessage({
                      id: `${PLUGIN_ID}.teaser.${category}`,
                      defaultMessage: category,
                    })}
                  >
                    {category === 'image'
                      ? items.map((item, index) => (
                          <ComboboxOption key={index} value={item.path}>
                            <Flex>
                              <img src={item.value.url} width={50} height={50} />
                              <Typography paddingLeft={4}>{item.value.name}</Typography>
                            </Flex>
                          </ComboboxOption>
                        ))
                      : items.map((item, index) => (
                          <ComboboxOption key={index} value={item.path}>
                            {item.value.value}
                          </ComboboxOption>
                        ))}
                  </Combobox>
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );
}
