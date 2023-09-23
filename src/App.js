import { useState, useEffect  } from 'react';
import Navbar from './components/Navbar.js'
import './App.css';
import NewOrderPage from './pages/NewOrderPage'
import AuthPage from './pages/AuthPage';
import { Routes, Route} from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import { getUser } from './utilities/users-service.js';
import * as usersAPI from './utilities/users-api.js'
import { getUsers } from './utilities/users-api.js';
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
import SignInForm from './components/logginForm/SignInForm.js';
import { Dashboard } from './pages/Dashboard.js';
import { UpdateProfile } from './components/UpdateProfile.js';
import { UsersList } from './components/UsersList.js';
import { UserPage } from './pages/UserPage.js';
import { DeleteUserPage } from './pages/DeleteUserPage.js';
import { ProductForm } from './components/product/ProductForm.js';

function App(props) {
  
  const [user, setUser] = useState(getUser())
  const [users, setUsers] = useState([])
  const [userById, setUserById] = useState([])

  // console.log(users)
  useEffect(() => {
    const  getAllUsers = async () => {
      const allUsers = await usersAPI.getUsers()
      setUsers(allUsers)
    }
    const  getUserById = async (id) => {
      const usr = await usersAPI.getSingleUser(id)
      setUserById(usr)
      
    }
    const usrId = '650c6584fd585d8a12b52f16'
    getAllUsers()
    getUserById(usrId)
  },[])
  
  return (
    <BoutiqueContext.Provider value={{user, setUser, users}}>
      <main>
        <Navbar2/>
          <Routes>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/orders" element={<OrderHistoryPage/>}/>
              <Route path="/orders/new" element={<NewOrderPage/>} />
              <Route path="/account" element={<Dashboard/>}/>
              <Route path="/update" element={<UpdateProfile/>}/>
            </Route>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/shop/cart" element={<ShoppingCart/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/register" element={<RegisterFom/>}/>
            <Route path="/login" element={<SignInForm/>}/>
            <Route path="/users" element={<UsersList/>}/>
            <Route path="/users/:id" element={<UserPage/>}/>
            <Route path="/users/:id/edit" element={<UpdateProfile/>}/>
            <Route path="/users/:id/delete" element={<DeleteUserPage/>}/>
            <Route path="/products/create" element={<ProductForm/>}/>
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