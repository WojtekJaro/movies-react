import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'



const MainTemplate = ({children}) => {
  return (
    <Box pt={20}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Box>
  )
}

export default MainTemplate
