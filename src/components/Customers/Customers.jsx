import { Autocomplete, Button, Card, ChoiceList, DataTable, Filters, Icon, Page, TextField } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom';
import { SearchUrl } from '../SearchUrl';

export const Customers = ()=> {
  const rows=[
    [<Link to='/customer'>Test Test</Link>,'subscribed', "United States", "2 Orders"],
    ['Test Test','', "United States", "2 Orders"],
    ['Test Test','subscribed', "United States", "2 Orders"],
    ['Test Test','', "United States", "2 Orders"],
    ['Test Test','subscribed', "United States", "2 Orders"],
    ]
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
          rows= {rows}
          // totals={['', '',255, '$155,830.00']}
        />
      </Card>
    </Page>
  );
}
