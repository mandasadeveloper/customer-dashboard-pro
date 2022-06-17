import { Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'

export const Toggle=()=>{
    const [active, setActive] = useState(false);
  
    const handleToggle = useCallback(() => setActive((active) => !active), []);
  
    const contentStatus = active ? 'Deactivate' : 'Activate';
    const textStatus = active ? 'Activated' : 'Deactivated';
  
    return (
    <Page>
        <Layout>
        <Layout.Section>
        <SettingToggle
        action={{
          content: contentStatus,
          onAction: handleToggle,
        }}
        enabled={active}
      >Customers Dashboard Is <TextStyle variation="strong">{textStatus}</TextStyle>.
      </SettingToggle>
        </Layout.Section>
    </Layout>
    </Page>
    );
  }
