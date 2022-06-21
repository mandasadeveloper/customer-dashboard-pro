import { Button, FormLayout, Modal, Page, Select, TextContainer, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
export const CustomePageModel = () => {
    const [active, setActive] = useState(false);

    const handleChange = useCallback(() => setActive(!active), [active]);
  
    const activator = <Button onClick={handleChange}>Add Shopify Page</Button>;
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback((value) => setSelected(value), []);
  
    const options = [
      {label: 'Page-1', value: 'page-1'},
      {label: 'Page-2', value: 'page-2'},
      {label: 'Page-3', value: 'page-3'},
      {label: 'Page-4', value: 'page-4'},
    ];
  return (
    <div>
          <Modal
            activator={activator}
            open={active}
            onClose={handleChange}
            title="Add Shopify Page"
            primaryAction={{
              content: 'Add',
              onAction: handleChange,
            }}
            // secondaryActions={[
            //   {
            //     content: 'Learn more',
            //     onAction: handleChange,
            //   },
            // ]}
          >
            <Modal.Section>
            <TextContainer>
                <FormLayout>
                <TextField label="Menu Label" onChange={() => {}} autoComplete="off" />
                <Select
                label="Select Page"
                options={options}
                onChange={handleSelectChange}
                value={selected}
                />
                </FormLayout>
              </TextContainer>
            </Modal.Section>
          </Modal>
        </div>   
  )
}
