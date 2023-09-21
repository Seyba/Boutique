import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { BoutiqueContext } from '../context/boutiqueContext'

export const ProtectedRoutes = () => {
    const ctx = useContext(BoutiqueContext)
    const { user } = ctx
    
    return user? <Outlet/> :<Navigate to="/login"/>
}