import { useContext } from "react"
import { BoutiqueContext } from "../context/boutiqueContext"
import { UsersListItem } from "./UsersListItem"
import { Link } from "react-router-dom"
export const UsersList = () => {
    const ctx = useContext(BoutiqueContext)
    const { users} = ctx
    console.log(users)
    return(
        <div>
            <h2>Users List</h2>
            <ul>
                {
                    users.length > 0 ? users.map(user => <li>
                        <Link to={`/users/${user._id}`}>{user.name}</Link>
                    </li>
                        
                    ):(
                        <h3> No Users Yet</h3>
                    )
                }
            </ul>
        </div>
    )
}