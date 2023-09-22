import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as userAPI from '../utilities/users-api'

export const DeleteUserPage = () => {
    const [user, setUser] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()
    useEffect( ()=>{
        const getUserById = async (id) => {
            const user = await userAPI.getSingleUser(id)
            //console.log(user)
            setUser(user)
        }
        getUserById(id)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userAPI.removeUser(id)
            navigate('/account')
        } catch (error) {
            console.log(error, 'Failed')
        }
    }
    
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">Delete User Account Page</h2>
                </div>
                <form onClick={handleSubmit}>
                    <div className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">                    
                        <input 
                            type="submit" 
                            value="Delete"
                            
                        />
                    </div>
                </form>
            </div>
            
            
        </div>
    )
}