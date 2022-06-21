import { Avatar, Button, Card, Page } from '@shopify/polaris'
import React from 'react'

export const Customer = () => {
  const customer_review = [
    "mandasadeveloper@gmail.com",
    "12 Dec 2000",
    "Company",
  ]
  return (
    <Page title='Customer'>
<div style={{display:"flex", justifyContent:"space-between"}}>
<div style={{width:"49%"}}> 
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
            <Card.Section>
           <div style={{width:"100%"}}> <Button >View All Orders</Button></div>
            </Card.Section>
        </Card>
        </div>
        <div style={{width:"49%"}}> 
       <Card>
            <Card.Section title="Customer Overview">
            
            {
              customer_review.map((ele)=>(
                <p style={{width:"150px"}}>{ele}</p>
              ))
            }
            </Card.Section>
            <Card.Section title="DEFAULT ADDRESS">          
                <p style={{width:"150px"}}> 
                mandasa technology
                mandsaur,
                mandsaur MP 458001
                India</p>   
            </Card.Section>
        </Card>

        <Card>
            <Card.Section title="Email Marketing">
            <p>Edit Status</p>
            <p>Not subscribed</p> 
            <p>Unsubscribed on December 28, 2018</p>
            </Card.Section>
        </Card>
        </div>
</div>
    </Page>
  )
}
