import React from 'react'
import SideNav from '../components/SideNav'
const DefaultLayout = ({children}) => {
  let home = document.querySelector('.home')
  return (
    <div>
      <SideNav />
      <section className="home">
        <div>
          {children}
        </div>
      </section>
    </div>
  )
}

export default DefaultLayout