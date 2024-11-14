import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'



const MainTemplate = ({children}) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default MainTemplate
