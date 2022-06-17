import { Avatar, Card, Page } from '@shopify/polaris'
import React from 'react'

export const Customer = () => {
  return (
    <Page title='Customer'>
       <div style={{maxWidth:"500px"}}> 
       <Card title={<Avatar customer name="Farrah" />}  >
            <Card.Section title="test test">
                <p style={{width:"150px"}}>mandsaur, MP, India Customer since 2/16/2017</p>
            </Card.Section>
            <Card.Section>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <p style={{width:"100px"}}>Last Order 5/4/2022</p>
                <p style={{width:"100px"}}>Lifetime Spend  $685.00  2 orders</p>
                <p style={{width:"100px"}}>Average Order Value $342.50</p>
              </div>
            </Card.Section>
        </Card>

        <Card>

            <Card.Section title="last order">
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <p style={{width:"100px"}}>Order #1024 ulfilled $0.00 </p>
                <p style={{width:"100px"}}>May 4, 2022 at 10:36 AM</p>
              </div>
            </Card.Section>
        </Card>
        </div>
    </Page>
  )
}
