import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './Dashboard'
export const Routing = () => {
  return (
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}
