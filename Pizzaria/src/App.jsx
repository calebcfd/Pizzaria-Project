import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import {Landing} from './Routes/Landing.jsx'
import {Creator} from './Routes/Creator.jsx'
import {Cart} from './Routes/Cart.jsx'

function App() {

  return (
    <>
      <header>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Creator'>Creator</Link>
        <Link to='/Cart'>Cart</Link>
      </nav>

      </header>



      <Routes>

        <Route 
          path='/' 
          element={<Landing />} 
        />

        <Route 
          path='/Creator' 
          element={<Creator />} 
        />

        <Route
          path='/Cart' 
          element={<Cart />} 
        />
        
      </Routes>



      <footer>gdbye</footer>
    </>
  )
}

export default App
