import React from 'react'
import Page from './Page'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import { FullCart } from './components/FullCart'


export const App = () => {
  return (
    <Routes>
      <Route path='' element={<Page />} />
      <Route path='*' element={<ErrorPage />} />
      <Route path='/characters/:id' element={<FullCart />} />
    </Routes>
  )
}

