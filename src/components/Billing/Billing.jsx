import { Button, ButtonGroup, Card, FormLayout, Layout, Page, TextStyle} from '@shopify/polaris'
import React from 'react'
import { Link } from 'react-router-dom'
export const Billing = () => {
    const cardData = [
        {title:"Basic",content:"",value:"1500 customers,  New Account page, Multi language support,  Reorder,  Order history, Add custom pages and links"},
        {title:"Standard",content:"",value:"4$/month, 1500+ customers, New Account page, Multi language support, Reorder, Order history, Add custom pages and links"},
    ]
    const needHelp = [
        {heading:"Need Help",value:"",content:"Go To Support",link:""},
    ]

    
  return (
<>
<Page title='Billing'>
  <Layout>
    {cardData.map((ele,index)=>(
          <Layout.Section key={index} oneHalf>
          <Card title={ele.title} actions={ele.content?[{content:ele.content}]:""}>
            <Card.Section>
              <TextStyle variation="subdued" ><div style={{maxWidth:"280px"}}>{ele.value}</div></TextStyle>
            </Card.Section>
          </Card>
        </Layout.Section>
    ))}
  </Layout>
</Page>
  <Page>
    <Layout>
        {
            needHelp.map((ele,index)=>(
              <Layout.AnnotatedSection
              title={ele.heading} key={index}>
              <Card sectioned>
                <FormLayout>
                  {ele.value?<p>{ele.value}</p>:""}
                  <ButtonGroup>
                  {ele.link?<Link to={ele.link}><Button>{ele.content?ele.content:""}</Button></Link>:<Button>{ele.content?ele.content:""}</Button>}
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
