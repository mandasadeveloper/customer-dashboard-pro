import { Page,Card,Layout,TextField} from '@shopify/polaris'
import React from 'react'
export const Translations = () => {
    const navigation = [
        {heading:"My Profile",value:"My Profile"},
        {heading:"Orders",value:"Orders"},
        {heading:"Address",value:"Address"},
        {heading:"Privacy Policy",value:"Privacy Policy"},
        {heading:"Return Policy",value:"Return Policy"},
    ]  
    const myprofile = [
        {heading:"My Profile",value:"My Profile"},
        {heading:"Total Spent",value:"Total Spent"},
        {heading:"All Orders",value:"All Orders"},
        {heading:"Addresses",value:"Addresses"},
        {heading:"Profile Updated",value:"Profile Updated"},
    ] 

    const addresses = [
        {heading:"Addresses",value:"Addresses"},
        {heading:"Add New Addresses",value:"Add New Addresses"},
        {heading:"All Orders",value:"All Orders"},
        {heading:"Default",value:"Default"},
        {heading:"Make default",value:"Make default"},
        {heading:"Set Us Default Address",value:"Set Us Default Address"},
        {heading:"Address Created",value:"Address Created"},
        {heading:"Address Updated",value:"Address Updated"},
        {heading:"Are You sure you want to delete this Address",value:"Are You sure you want to delete this Address"},
        {heading:"Address Deleted",value:"Address Deleted"},
        {heading:"Default Address Updated",value:"Default Address Updated"},
        {heading:"Delete Address",value:"Delete Address"},
    ] 

    const changePassword = [
        {heading:"Change Password",value:"Change Password"},
        {heading:"New Password",value:"New Password"},
        {heading:"Confirm New Password",value:"Confirm New Password"},
        {heading:"New Password Must be at least 8 Characters",value:"New Password Must be at least 8 Characters"},
        {heading:"The Two Password are not the Same",value:"The Two Password are not the Same"},
        {heading:"Password Updated. Login you  Out",value:"Password Updated. Login you  Out"},
    ] 
    
    const orders = [
        {heading:"Orders",value:"Orders"},
        {heading:"Unfulfilled",value:"Unfulfilled"},
        {heading:"Confirm New Password",value:"Confirm New Password"},
        {heading:"Paid",value:"Paid"},
        {heading:"Billing Address",value:"Billing Address"},
        {heading:"Total Summary",value:"Total Summary"},
    ] 

    const OrdersFullfillmentStatus = [
        {heading:"Fulfilled",value:"Fulfilled"},
        {heading:"Unfulfilled",value:"Unfulfilled"},
        {heading:"Partial",value:"Partial"},
        {heading:"Complete",value:"Complete"},
        {heading:"Restocked",value:"Restocked"},        
    ] 

    const shared = [
        {heading:"First Name",value:"First Name"},
        {heading:"Last Name",value:"Last Name"},
        {heading:"Email",value:"Email"},
        {heading:"Phone",value:"Phone"},
        {heading:"Submit",value:"Submit"},        
    ] 
  return (
   <Page title='Translations' 
   breadcrumbs={[{content: 'Products'}]}
    primaryAction={{
    content: 'Save',
  }}>

<Card title="Navigation">
<Card.Section>
<Layout>
        {
            navigation.map((ele,index)=>(
                <Layout.AnnotatedSection
                title={ele.heading} key={index}>
                <Card sectioned>
                <TextField
                value={ele.value}
                />
                </Card>
              </Layout.AnnotatedSection>
            ))
        }
    </Layout>
</Card.Section>
</Card>
        <Card title="My Profile">
        <Card.Section>
        <Layout>
        {
        myprofile.map((ele,index)=>(
        <Layout.AnnotatedSection
        title={ele.heading} key={index}>
        <Card sectioned>
        <TextField
        value={ele.value}
        />
        </Card>
        </Layout.AnnotatedSection>
        ))
        }
        </Layout>
        </Card.Section>
        </Card>


        <Card title="Addresses">
        <Card.Section>
        <Layout>
        {
        addresses.map((ele,index)=>(
        <Layout.AnnotatedSection
        title={ele.heading} key={index}>
        <Card sectioned>
        <TextField
        value={ele.value}
        />
        </Card>
        </Layout.AnnotatedSection>
        ))
        }
        </Layout>
        </Card.Section>
        </Card>

        <Card title="Change Password">
        <Card.Section>
        <Layout>
        {
        changePassword.map((ele,index)=>(
        <Layout.AnnotatedSection
        title={ele.heading} key={index}>
        <Card sectioned>
        <TextField
        value={ele.value}
        />
        </Card>
        </Layout.AnnotatedSection>
        ))
        }
        </Layout>
        </Card.Section>
        </Card>

        <Card title="Orders">
        <Card.Section>
        <Layout>
        {
        orders.map((ele,index)=>(
        <Layout.AnnotatedSection
        title={ele.heading} key={index}>
        <Card sectioned>
        <TextField
        value={ele.value}
        />
        </Card>
        </Layout.AnnotatedSection>
        ))
        }
        </Layout>
        </Card.Section>
        </Card>

        <Card title="Orders Fullfillment Status">
        <Card.Section>
        <Layout>
        {
        OrdersFullfillmentStatus.map((ele,index)=>(
        <Layout.AnnotatedSection
        title={ele.heading} key={index}>
        <Card sectioned>
        <TextField
        value={ele.value}
        />
        </Card>
        </Layout.AnnotatedSection>
        ))
        }
        </Layout>
        </Card.Section>
        </Card>

        <Card title="Shared">
        <Card.Section>
        <Layout>
        {
        shared.map((ele,index)=>(
        <Layout.AnnotatedSection
        title={ele.heading} key={index}>
        <Card sectioned>
        <TextField
        value={ele.value}
        />
        </Card>
        </Layout.AnnotatedSection>
        ))
        }
        </Layout>
        </Card.Section>
        </Card>
   </Page>
   )
}
