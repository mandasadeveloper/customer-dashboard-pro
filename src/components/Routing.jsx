import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Customer } from './Customers/Customer'
import { Customers } from './Customers/Customers'
import { Dashboard } from './Dashboard'
import {Error} from './Error'
import { MenuBuilder } from './MenuBuilder/MenuBuilder'
import { ProfileSetup } from './ProfileSetup/ProfileSetup'
export const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/customers' element={<Customers/>}/>
    <Route path='/customer' element={<Customer/>}/>
    <Route path='/menu-builder' element={<MenuBuilder/>}/>
    <Route path='/profile-setup' element={<ProfileSetup/>}/>
    <Route component={Error}/>    
    </Routes>
  )
}
  