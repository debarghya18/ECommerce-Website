import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
const App=()=>{
  return(
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
          <Route path='/' />
          <Route path='/collection'  />
          <Route path='/about'  />
          <Route path='/contact' />
          <Route path='/product/:productId'  />
          <Route path='/cart'  />
          <Route path='/login' />
          <Route path='/placeOrder'  />
          <Route path='/orders'  />
      </Routes>
    </div>
  )
}

export default App;