import { useState  } from 'react';
import Navbar from './components/Navbar.js'
import './App.css';
import NewOrderPage from './pages/NewOrderPage'
import AuthPage from './pages/AuthPage';
import { Routes, Route} from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import { getUser } from './utilities/users-service.js';

function App(props) {
  const [user, setUser] = useState(getUser())
  console.log(user)
  return (
    <main className="App">
      { user? (
        <>
          <Navbar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage/>} />
            <Route path="/orders" element={<OrderHistoryPage/>} />
          </Routes>
        </>
      ): (<AuthPage user={user} setUser={setUser}/>)}
    </main>
  );
}

export default App;
