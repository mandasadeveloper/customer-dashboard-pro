import { Page } from '@shopify/polaris'
import React from 'react'
import {Drag} from '../Drag'
import { CustomeLinkPage } from './customeLinkModel'
import { CustomePageModel } from './CustomePageModel'

export const MenuBuilder = () => {
  return (
  <>
<Drag/>
<Page>
<div style={{display:"flex",justifyContent:"space-between"}}>
<CustomePageModel/>
<CustomeLinkPage/>
</div>
</Page>
</>
  )
}
