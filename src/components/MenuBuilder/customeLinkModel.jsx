import { Button, FormLayout, Modal, Page, Select, TextContainer, TextField } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
export const CustomeLinkPage = () => {
    const [active, setActive] = useState(false);

    const handleChange = useCallback(() => setActive(!active), [active]);
  
    const activator = <Button onClick={handleChange}>Add Custome Link</Button>;
  return (
  
 <div>
            <Modal
            activator={activator}
            open={active}
            onClose={handleChange}
            title="Add Custome Link"
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
                <TextField label="Custome Link" onChange={() => {}} autoComplete="off" />
                </FormLayout>
              </TextContainer>
            </Modal.Section>
          </Modal>
        </div>   
  )
}
