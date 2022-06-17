import { Autocomplete, Button, Card, ChoiceList, DataTable, Filters, Icon, Page, TextField } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'
import { SearchUrl } from '../SearchUrl';

export const Customers = ()=> {
  const [availability, setAvailability] = useState(null);
  const [productType, setProductType] = useState(null);
  const [taggedWith, setTaggedWith] = useState(null);
  const [queryValue, setQueryValue] = useState(null);

  const handleAvailabilityChange = useCallback(
    (value) => setAvailability(value),
    [],
  );
  const handleProductTypeChange = useCallback(
    (value) => setProductType(value),
    [],
  );
  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    [],
  );
  const handleFiltersQueryChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  const handleAvailabilityRemove = useCallback(() => setAvailability(null), []);
  const handleProductTypeRemove = useCallback(() => setProductType(null), []);
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleFiltersClearAll = useCallback(() => {
    handleAvailabilityRemove();
    handleProductTypeRemove();
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [
    handleAvailabilityRemove,
    handleQueryValueRemove,
    handleProductTypeRemove,
    handleTaggedWithRemove,
  ]);  
  // const appliedFilters = [];
  // if (!isEmpty(availability)) {
  //   const key = 'availability';
  //   appliedFilters.push({
  //     key,
  //     label: disambiguateLabel(key, availability),
  //     onRemove: handleAvailabilityRemove,
  //   });
  // }
  // if (!isEmpty(productType)) {
  //   const key = 'productType';
  //   appliedFilters.push({
  //     key,
  //     label: disambiguateLabel(key, productType),
  //     onRemove: handleProductTypeRemove,
  //   });
  // }
  // if (!isEmpty(taggedWith)) {
  //   const key = 'taggedWith';
  //   appliedFilters.push({
  //     key,
  //     label: disambiguateLabel(key, taggedWith),
  //     onRemove: handleTaggedWithRemove,
  //   });
  // }

  return (
    <Page title='Customers'>
      <Card>
        <Card.Section>
        <SearchUrl/>
        </Card.Section>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Customer Name',
            'Status',
            'Location',
            'Orders',
          ]}
          rows={[
            ['Test Test','subscribed', "United States", "2 Orders"],
            ['Test Test','', "United States", "2 Orders"],
            ['Test Test','subscribed', "United States", "2 Orders"],
            ['Test Test','', "United States", "2 Orders"],
            ['Test Test','subscribed', "United States", "2 Orders"],
          ]}
          // totals={['', '',255, '$155,830.00']}
        />
      </Card>
    </Page>
  );

  function disambiguateLabel(key, value) {
    switch (key) {
      case 'taggedWith':
        return `Tagged with ${value}`;
      case 'availability':
        return value.map((val) => `Available on ${val}`).join(', ');
      case 'productType':
        return value.join(', ');
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }
}
