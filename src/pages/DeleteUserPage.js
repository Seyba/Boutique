import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import * as userAPI from '../utilities/users-api'

export const DeleteUserPage = () => {
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
            <h2>Delete User Account Page</h2>
            
        </div>
    )
}