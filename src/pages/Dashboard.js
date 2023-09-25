import { useContext } from 'react'
import { BoutiqueContext } from '../context/boutiqueContext'
import {UserLogOut} from '../components/UserLogOut'
import { Link } from 'react-router-dom'
export const Dashboard = () => {
    const ctx = useContext(BoutiqueContext)
    const { user } = ctx
    return(
        <div>
            <section className="flex justify-center py-28 bg-red-50">
                <div>
                    <h2 className="text-5xl font-thin">Dashboard</h2>
                </div>
            </section>
            
            {user && (<h3>Hi, {user.name}</h3>)}
            <Link to="/users">Customers</Link>
            
            <UserLogOut/>
        </div>
    )
}