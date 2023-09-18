import { Link } from 'react-router-dom'
import * as userService from '../utilities/users-service'
export default function Navbar({user, setUser}){
    const handleLogOut = () =>{
        userService.logOut()
        setUser(null)
    }
    return(
        <nav user={user}>
            <h3>Welcome, {user.name}</h3>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}

