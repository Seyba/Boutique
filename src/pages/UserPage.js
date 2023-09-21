import { useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { BoutiqueContext } from '../context/boutiqueContext'
import * as userAPI from '../utilities/users-api'

export const UserPage = () => {
    const [user, setUser] = useState([])
    const ctx = useContext(BoutiqueContext)
    const { users } = ctx
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
            {user.name}
        </div>
    )
}