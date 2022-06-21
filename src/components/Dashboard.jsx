import { Button, ButtonGroup, Card, FormLayout, Layout, Page, TextStyle} from '@shopify/polaris'
import React from 'react'
import { Toggle } from './Togle'

export const Dashboard = () => {
    const cardData = [
        {title:"Customers",content:"View Customers",value:125},
        {title:"Order",content:"All Orders",value:999},
        {title:"Current Plan",content:"",value:"Basic-Free"},
    ]
    const dataCard = [
        {heading:"Translations",value:"Add translations to use Customer Dashboard in any language.",content:"Manage Translations"},
        {heading:"Plan",value:"Basic-Free",content:"Upgrade Plan"},
        {heading:"Need Help",value:"",content:"Go To Support"},
        {heading:"What Your Thinkable Customer",value:"",content:"Give Us Feedback"},
        {heading:"Dont Have What You Need",value:"",content:"Request A Feature"},
    ]

    
  return (
<>
<Page>
  <Layout>
    {cardData.map((ele,index)=>(
          <Layout.Section key={index} oneThird>
          <Card title={ele.title} actions={ele.content?[{content:ele.content}]:""}>
            <Card.Section>
              <TextStyle variation="subdued">{ele.value}</TextStyle>
            </Card.Section>
          </Card>
        </Layout.Section>
    ))}
  </Layout>
</Page>
  <Toggle/>
  <Page title="Setting">
    <Layout>
        {
            dataCard.map((ele,index)=>(
                <Layout.AnnotatedSection
                title={ele.heading} key={index}>
                <Card sectioned>
                  <FormLayout>
                    {ele.value?<p>{ele.value}</p>:""}
                    <ButtonGroup>
                <Button>{ele.content?ele.content:""}</Button>
                </ButtonGroup>
                  </FormLayout>
              
                </Card>
              </Layout.AnnotatedSection>
            ))
        }
    </Layout>
  </Page>
  </>
  )
}
