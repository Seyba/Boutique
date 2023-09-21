import { useContext } from "react"
import { BoutiqueContext } from "../context/boutiqueContext"
import { UsersListItem } from "./UsersListItem"

export const UserDetailsPage = () => {
    const ctx = useContext(BoutiqueContext)
    const { users} = ctx
    console.log(users)
    return(
        <div>
            <h2>Users List</h2>
            
        </div>
    )
}