import { useContext } from 'react'
import { BoutiqueContext } from '../context/boutiqueContext'
import {UserLogOut} from '../components/UserLogOut'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
    const ctx = useContext(BoutiqueContext)
    const { user } = ctx
    return(
        <div>
            <h2>Dashboard</h2>
            {user && (<h3>Hi, {user.name}</h3>)}
            <Link to="/users">Users</Link>
            
            <UserLogOut/>
        </div>
    )
}