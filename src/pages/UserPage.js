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
            <section className="flex justify-center py-28 bg-red-50">
                <div>
                    <h2 className="text-5xl font-thin">User Info</h2>
                    <h5 className="text-sm font-medium text-center">{user.name}</h5>
                </div>
            </section>
            <section>
                <div classname="py-32">
                    <h4>{user.name}</h4>
                    <h4>{user.email}</h4>
                    <h4>{user.createdAt}</h4>
                </div>
            </section>
        </div>
    )
}