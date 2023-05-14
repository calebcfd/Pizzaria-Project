import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './css/App.css'

import {Landing} from './Routes/Landing.jsx'
import {Creator} from './Routes/Creator.jsx'
import {Cart} from './Routes/Cart.jsx'
import {Checkout} from './Routes/Checkout.jsx'

import {hoverBounce} from './Utils.js'

function App() {

  return (
    <>
      <header>

      <h2 id='logo'>Mamma Mia's Pizzaria</h2>

      <nav id='nav' onMouseOver={e=>hoverBounce(e)}>
        <Link data-name='Home' to='/' className='flexCenter'>
        <svg id='HomeSvg' className='navIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path data-name="layer1"
          d="M54 26.267l7.555 7.3a.25.25 0 0 1-.174.43H54V62H40V44H24v18H10V34H2.618a.25.25 0 0 1-.174-.43L32 5l13 12.567V12h9z"
          fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10"
          stroke-width="3" stroke-linejoin="round"></path>
        </svg>  
          Home
        </Link>
        <Link data-name='Creator' to='/Creator' className='flexCenter'>
          <svg id='CreatorSvg' className='navIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink">
        
            <path data-name="layer2"
            d="M28.1 20v-6a24.1 24.1 0 1 0 21.8 13.9l-5.4 2.5m10.3-12.2l5-2.4A24 24 0 0 0 38.1 2l-.8 5"
            fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="3"></path>
            <path data-name="layer1" d="M10.1 38a18 18 0 1 0 34.3-7.6L28.1 38V20a18 18 0 0 0-18 18z"
            fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="3"></path>
            <circle data-name="layer1" cx="21.1" cy="35" r="2" fill="none"
            stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></circle>
            <circle data-name="layer1" cx="25.1" cy="47" r="1" fill="none"
            stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></circle>
            <circle data-name="layer1" cx="35.1" cy="43" r="3" fill="none"
            stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></circle>
            <path data-name="layer1" d="M38.1 7h-.8l-3.2 21 20.7-9.8A18 18 0 0 0 38.1 7z"
            fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="3"></path>

          </svg>
          Custom Pizza
        </Link>
        <Link data-name='Cart' to='/Cart' className='flexCenter'>
          <svg id='CartSvg' className='navIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path data-name="layer1"
            fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" d="M62 22H16M2 6h10l10 40h32"
            stroke-linejoin="round" stroke-linecap="round"></path>
            <circle data-name="layer2" cx="24" cy="54" r="4" fill="none" stroke="#ffffff"
            stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></circle>
            <circle data-name="layer2" cx="50" cy="54" r="4" fill="none"
            stroke="#ffffff" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round"
            stroke-linecap="round"></circle>
            <path data-name="layer1" fill="none" stroke="#ffffff" stroke-miterlimit="10"
            stroke-width="3" d="M59 30H26m30 8H28" stroke-linejoin="round" stroke-linecap="round"></path>
          </svg>
          Cart
        </Link>
      </nav>

      </header>

      <div id='bouncer'></div>



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

        <Route
          path='/Checkout'
          element={<Checkout />} 
        />
        
      </Routes>



      <footer></footer>
    </>
  )
}

export default App
