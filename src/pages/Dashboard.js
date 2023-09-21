import { useContext } from 'react'
import { BoutiqueContext } from '../context/boutiqueContext'
import {UserLogOut} from '../components/UserLogOut'
export const Dashboard = () => {
    const ctx = useContext(BoutiqueContext)
    const { user } = ctx
    return(
        <div>
            <h2>Dashboard</h2>
            {user && (<h3>Hi, {user.name}</h3>)}
            <button>Edit Profile</button> <br/>
            <button>Delete Profile</button> <br/>
            <UserLogOut/>
        </div>
    )
}