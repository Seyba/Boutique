import { useState, useEffect, useContext} from 'react'
import { Link, useParams } from "react-router-dom";
import * as userAPI from '../utilities/users-api'
import { BoutiqueContext } from '../context/boutiqueContext';
import { TEInput, TERipple } from "tw-elements-react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export const UpdateProfile = () => {
    const navigate = useNavigate()

    const [user, setUser ] = useState({
        name: '',
        email: ''
    })
    const { id } = useParams()

    useEffect(()=>{
        const getUserById = async (id) => {
            const user = await userAPI.getSingleUser(id)
            console.log(user)
            setUser(user)
        }
        getUserById(id)
    },[])
    
    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const userData = { 
                name: user.name,
                email: user.email
            }
            console.log(userData)

            const newData = await userAPI.updateUser(userData, id)
            console.log(newData)
            navigate('/')
        } catch (error) {
            console.log('not updated')
        }
        
    }
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Hello, {user.name} Update Your Info
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                
                <div>
                    
                    <button
                    type="submit"
                    
                    className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Update
                    </button>
                </div>
                </form>
                
            </div>
        </div>
    )
}