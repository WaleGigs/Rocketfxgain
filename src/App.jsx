import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import SideNav from './components/SideNav.jsx'
import Dashboard from './components/Dashboard.jsx'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import Deposits from './components/Deposits.jsx'
import Nav from './components/Nav.jsx'
import PaymentButton from './components/PaymentButton.jsx'

const App = () => {
  return (

    <div>

      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/deposits' element={<Deposits />} />
        <Route path='*' element="No page" />
      </Routes>
    </div>
  )
}

export default App