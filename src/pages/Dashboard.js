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
            <div className="flex justify-around py-32">
                <div>
                    <Link className="text-xl font-semibold hover:text-slate-400" to="/products/create">Add Products</Link>
                </div>
                <div>
                    {user && (<h3>Hi, {user.name}</h3>)}
                
                    <Link className="text-xl font-semibold hover:text-slate-400" to="/users">Users</Link>
                </div>
                
                <div>
                    <UserLogOut />
                </div>
                
            </div>
            
        </div>
    )
}