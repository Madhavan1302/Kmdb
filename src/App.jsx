import { useState } from 'react'

import './App.css'
import { Footer, Header } from './components'
import AllRoutes from './routes/AllRoutes'

function App() {
  return (
    <>
    <Header/>
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App
