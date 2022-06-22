import { Button, Card, Layout, Modal, Page, SettingToggle, TextContainer } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import { Toggle } from '../Togle';
import { AddFieldsModel } from './AddFieldsModel';
import { ProfileReorder } from './ProfileReorder'

export const ProfileSetup = () => {
  const [active, setActive] = useState(false);
  const handleToggle = useCallback(() => setActive((active) => !active), []);
  const contentStatus = active ? 'Deactivate' : 'Activate';
  const textStatus = active ? 'activated' : 'deactivated';

  const ITEMS = [
    {
      id: "1",
      title: "My Profile"
    },
    {
      id: "2",
      title: "Orders"
    },
    {
      id: "3",
      title: "Address"
    },
    {
      id: "4",
      title: "Phone"
    }
  ];
  const ITEMS_2 = [
    {
      id: "1",
      title: "Phone"
    },
    {
      id: "2",
      title: "DOB"
    },
  ];
  return (
<>
<Page title='Profile Setup'
   primaryAction={<AddFieldsModel/>}>
   <Layout>
     <Layout.Section oneHalf>
       <Card title="Profile Default Fields">
         <Card.Section>
         <ProfileReorder value={ITEMS}/>
         </Card.Section>
  
       </Card>
     </Layout.Section>
     <Layout.Section oneHalf>
       <Card title="Additional Fields">
         <Card.Section>
         <ProfileReorder value={ITEMS_2}/>
         </Card.Section>
       </Card>
     </Layout.Section>
   </Layout>
 </Page>
 <Page>
<Toggle content="  Allows your customers to update their marketing preference from within their customer account profiles."/>
 </Page>
</>
  )
}
