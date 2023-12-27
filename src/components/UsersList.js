import { useContext } from "react"
import { BoutiqueContext } from "../context/boutiqueContext"

import { Link } from "react-router-dom"
export const UsersList = () => {
    const ctx = useContext(BoutiqueContext)
    const { users} = ctx
    console.log('users are:', users)
    

    return(
        <div>
            <section className="flex justify-center py-28 bg-red-50">
                <div>
                    <h2 className="text-5xl font-thin">Users List</h2>
                    <h5 className="text-sm font-medium text-center">Admin</h5>
                </div>
            </section>
            <ul>
                {
                    users.length > 0 ? users.map(user => <li key={user._id}>
                        <div className="flex justify-between mx-36 my-2">
                            <div className="">
                                <Link className="px-4 text-red-600 hover:bg-red-600 hover:text-slate-50" to={`/users/${user._id}/delete`}>Delete</Link>
                            </div>
                            <div>
                                <Link className="text-2xl font-semibold" to={`/users/${user._id}`}>{user.name}</Link>
                            </div>
                            <div>
                                <Link className="px-4 rounded-sm pb-1 bg-blue-600 hover:bg-blue-300 text-blue-50" to={`/users/${user._id}/edit`}>Update</Link>
                            </div>
                        </div>
                        
                    </li>
                        
                    ):(
                        <h3> No Users Yet</h3>
                    )
                }
            </ul>
        </div>
    )
}