import { useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import {
  SingleSelect,
  SingleSelectOption,
  Grid,
  Flex,
  Box,
  Typography,
} from '@strapi/design-system';
import { PLUGIN_ID } from '../pluginId';

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
  onChange: (e: any) => void;
  value: string;
  intlLabel: string;
  attribute: any;
}) {
  const { formatMessage } = useIntl();
  const [collectionTypes, setCollectionTypes] = useState<any[]>([]);
  const [selected, setSelected] = useState(value ? value.split('|')[0] : '');
  const [selectedNumber, setSelectedNumber] = useState(value ? value.split('|')[1] : 3);
  const { optionsSortBy } = attribute;

  const fetchContentTypes = useCallback(async () => {
    const response = await fetch(`/collection-type-select/collection-types`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    try {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setCollectionTypes(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchContentTypes();
  }, []);

  useEffect(() => {
    onChange({
      target: { name, type: 'string', value: `${selected}|${selectedNumber}|${optionsSortBy}` },
    });
  }, [selected, selectedNumber]);

  const handleOnChange = (value: string) => {
    setSelected(value);
  };

  const handleOnNumberChange = (number: string) => {
    setSelectedNumber(number);
  };

  if (!collectionTypes) {
    return <></>;
  }

  return (
    <Box spacing={1} style={{ width: '100%' }}>
      <Typography fontWeight="bold">
        {formatMessage({
          id: `${PLUGIN_ID}.title`,
          defaultMessage: 'Select latest teasers from content-type',
        })}
      </Typography>

      <Box paddingBottom={4}>
        <Typography>
          {formatMessage({
            id: `${PLUGIN_ID}.description`,
            defaultMessage: 'Select the content-type to display the latest teasers from',
          })}
        </Typography>
      </Box>
      <Grid.Root>
        <Grid.Item col={8} xs={12} s={6}>
          <SingleSelect
            width={'100%'}
            value={selected}
            name={name}
            label="Content-type"
            onChange={(value: string) => handleOnChange(value)}
            onClear={() => setSelected('')}
            style={{ width: '100%' }}
          >
            <SingleSelectOption value="">
              {formatMessage({
                id: `${PLUGIN_ID}.blank`,
                defaultMessage: 'Select a collection type, leave blank for all',
              })}
            </SingleSelectOption>
            {collectionTypes.map((collectionType, index) => (
              <SingleSelectOption value={collectionType.id} key={index}>
                {collectionType.name}
              </SingleSelectOption>
            ))}
          </SingleSelect>
        </Grid.Item>
        <Grid.Item col={4} xs={12} s={6}>
          <SingleSelect
            style={{ width: '100%' }}
            width={'100%'}
            value={selectedNumber}
            defaultValue={3}
            name={name}
            label={formatMessage({
              id: `${PLUGIN_ID}.quantity`,
              defaultMessage: 'Number of teasers',
            })}
            onChange={(value: string) => handleOnNumberChange(value)}
            onClear={() => setSelected('')}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SingleSelectOption key={num} value={num}>
                {num}
              </SingleSelectOption>
            ))}
          </SingleSelect>
        </Grid.Item>
      </Grid.Root>
    </Box>
  );
}
