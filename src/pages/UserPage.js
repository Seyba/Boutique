import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import * as userAPI from '../utilities/users-api'

export const UserPage = () => {
    const [user, setUser] = useState([])

    const {id} = useParams()
    
    useEffect(()=>{
        const getUserById = async (id) => {
            const user = await userAPI.getSingleUser(id)
            console.log(user)
            setUser(user)
        }
        getUserById(id)
    },[])

    return(
        <div>
            <h2>Users Page</h2>
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <h4>{user.createdAt}</h4>
        </div>
    )
}