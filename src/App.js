import { useState, useEffect  } from 'react';
import Navbar from './components/Navbar.js'
import './App.css';
import NewOrderPage from './pages/NewOrderPage'
import AuthPage from './pages/AuthPage';
import { Routes, Route} from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import { getUser } from './utilities/users-service.js';
import * as usersAPI from './utilities/users-api.js'
import * as ordersAPI from './utilities/order-api'
import * as prodAPI from './utilities/products-api'
import { getUsers } from './utilities/users-api.js';
import { Navbar2 } from './components/Navbar2.js';
import { AboutPage } from './pages/AboutPage.js'
import {BoutiqueContext} from './context/boutiqueContext'
import { ShopPage } from './pages/ShopPage.js';
import { fetchProducts, fetchProductById } from './utilities/items-api'
// import { getAll } from './utilities/products-api.js';
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
import { ProductForm } from './components/products/ProductForm.js';
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { ProductList } from './components/products/ProductList.js';
import { ProductItems } from './components/products/ProductItems.js';
import { DeleteProduct } from './components/products/DeleteProduct.js'
import { UpdateProduct } from './components/products/UpdateProduct.js'
import { AdminRoutes } from './components/admin/AdminRoutes.js';
import AdminLoggin from './components/admin/AdminLoggin.js';

function App(props) {
  const [user, setUser] = useState(getUser())
  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const [userById, setUserById] = useState([])
  const [newArrivals, setNewArrivals] = useState([])
  const [cart, setCart] = useState(null)

  // console.log(users)
  useEffect(() => {
    const  getAllUsers = async () => {
      const allUsers = await usersAPI.getUsers()
      setUsers(allUsers)
    }
    // const getUserCart = async () => {
    //   const cart = await ordersAPI.getCart()
    //   setCart(cart)
    // }
    const  getUserById = async (id) => {
      const usr = await usersAPI.getSingleUser(id)
      const prodById = await fetchProductById(id)
      //console.log(prodById)
      setUserById(usr)
      
    }
    const getAllProds = async () => {
      const prods = await fetchProducts()
      //const products = await getAll()
      setProducts(prods)
      //setNewArrivals(products)
    }
    // async function productList(){
    //   const products = await prodAPI.getAll()
    //   setNewArrivals(products)
    // }
    async function handleAddToOrder(itemId) {
      const updatedCart = await ordersAPI.addItemToCart(itemId)
      setCart(updatedCart)
    }

    async function handleChangeQty(itemId, newQty) {
      const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
      setCart(updatedCart);
    }
  
    async function handleCheckout() {
      await ordersAPI.checkout();
      //navigate('/orders');
    }
    const usrId = '650ef188ac26e5024eb9b71f'
    getAllUsers()
    getUserById(usrId)
    getAllProds()
    //getUserCart()
    //productList()
  },[])
  
  return (
    <BoutiqueContext.Provider value={{setUser, products, user, users}}>
      <main>
        <Navbar2/>
          <Routes>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/orders" element={<OrderHistoryPage/>}/>
              <Route path="/orders/new" element={<NewOrderPage/>} />
              <Route path="/account" element={<Dashboard/>}/>
              <Route path="/update" element={<UpdateProfile/>}/>
              <Route path="/shop/:id" element={<ProductDetailsPage/>}/>
              <Route path="/products/list" element={<ProductList/>}/>
              <Route path="/products/list/:id" element={<ProductItems/>}/>
            </Route>
            <Route element={<AdminRoutes/>}>
              <Route path="/users" element={<UsersList/>}/>
              <Route path="/users/:id/delete" element={<DeleteUserPage/>}/>
              <Route path="/products/create" element={<ProductForm/>}/>
              <Route path="/shop/:id/delete" element={<DeleteProduct/>}/>
              <Route path="/shop/:id/edit" element={<UpdateProduct/>}/>
            </Route>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/shop/cart" element={<ShoppingCart/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/register" element={<RegisterFom/>}/>
            <Route path="/login" element={<SignInForm/>}/>
            <Route path="/admin-login" element={<AdminLoggin/>}/>
            <Route path="/users/:id" element={<UserPage/>}/>
            <Route path="/users/:id/edit" element={<UpdateProfile/>}/>
            
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