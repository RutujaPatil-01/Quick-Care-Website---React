import React from 'react'
import Router from './Router'
import AppContextProvider from './Context/AppContext'


const App = () => {
  return (
    <div>
      
      <AppContextProvider>
      <Router/> 
      </AppContextProvider>
      
    </div>
  )
}

export default App