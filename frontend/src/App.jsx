
import React from 'react'
import { Route, Routes } from 'react-router'
import { Box } from "@chakra-ui/react"
import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
   <Box minH={"100vh"}>
    <Navbar />
   <Routes>
    <Route path='/'element={<HomePage />}/>
    <Route path='/create'element={<CreatePage />}/>
   </Routes>

    </Box>  
  
    </>
  )
}

export default App

