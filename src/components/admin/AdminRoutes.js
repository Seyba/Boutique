import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { BoutiqueContext } from '../../context/boutiqueContext'

export const AdminRoutes = () => {
    const ctx = useContext(BoutiqueContext)
    const { user } = ctx
    if(user.role === 'admin') {
        return <Outlet/>
    } else {
        return <Navigate to="/admin-login"/>
    }
    //return user? <Outlet/> :<Navigate to="/login"/>
}