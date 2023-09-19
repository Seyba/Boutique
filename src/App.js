import { useState  } from 'react';
import Navbar from './components/Navbar.js'
import './App.css';
import NewOrderPage from './pages/NewOrderPage'
import AuthPage from './pages/AuthPage';
import { Routes, Route} from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import { getUser } from './utilities/users-service.js';
import { Navbar2 } from './components/Navbar2.js';
import { AboutPage } from './pages/AboutPage.js'
import {BoutiqueContext} from './context/boutiqueContext'
import { ShopPage } from './pages/ShopPage.js';
import { Footer } from './components/Footer.js';
import { ShoppingCart } from './components/ShoppingCart.js';
import { ContactPage } from './pages/ContactPage.js';


function App(props) {
  const [user, setUser] = useState(getUser())
  console.log(user)
  return (
    <BoutiqueContext.Provider value={{user}}>
    <main className="App">
      <Navbar2/>
      { user? (
        <>
          <Navbar user={user} setUser={setUser}/>
          
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage/>} />
            <Route path="/orders" element={<OrderHistoryPage/>} />
          </Routes>
        </>
      ): (
        <>
          <Routes>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/account" element={<AuthPage/>} />
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/shop/cart" element={<ShoppingCart/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
          {/* <AuthPage user={user} setUser={setUser}/> */}
        </>
        
      )}
      <Footer/>
    </main>
    </BoutiqueContext.Provider>
    
  );
}

export default App;
