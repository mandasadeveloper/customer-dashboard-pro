import React from 'react'
import { Page,Card} from '@shopify/polaris'
import { Toggle } from './Togle'

export const ToggleFeature = () => {
  return (
    <Page title='Toggle Feature'>
       <Toggle content="Customers Dashboard Is"/>
       <Toggle content="Reorder Is"/>
       <Toggle content="Allows your customers to update their marketing preference from within their customer account profiles."/>
    </Page>
  )
}
