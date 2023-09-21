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
import { RegisterFom } from './components/signUpForm/RegisterForm.js';
import { HomePage } from './pages/HomePage.js';
import { ProtectedRoutes } from './components/ProtectedRoutes.js';


function App(props) {
  const [user, setUser] = useState(getUser())
  console.log(user)
  return (
    <BoutiqueContext.Provider value={{user, setUser}}>
      <main>
        <Navbar2/>
          <Routes>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/orders" element={<OrderHistoryPage/>}/>
              <Route path="/orders/new" element={<NewOrderPage/>} />
            </Route>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/account" element={<AuthPage/>} />
            <Route path="/shop/cart" element={<ShoppingCart/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/register" element={<RegisterFom/>}/>
          </Routes>
        <Footer/>
      </main>
    </BoutiqueContext.Provider>
    
  );
}

export default App;


// { user? (
//   <>
//     {/* <Navbar user={user} setUser={setUser}/> */}
    
//     <Routes>
//       <Route path="/orders" element={<OrderHistoryPage/>} />
//       <Route path="/orders/new" element={<NewOrderPage/>} />
//     </Routes>
//   </>
//   ): (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage/>} />
//         <Route path="/about" element={<AboutPage/>} />
//         <Route path="/account" element={<AuthPage/>} />
//         <Route path="/shop" element={<ShopPage/>}/>
//         <Route path="/shop/cart" element={<ShoppingCart/>}/>
//         <Route path="/contact" element={<ContactPage/>}/>
//         <Route path="/register" element={<RegisterFom/>}/>
//       </Routes>
//       {/* <AuthPage user={user} setUser={setUser}/> */}
//     </>
//   )
// }