import { Link } from "react-router-dom"

export const UsersListItem = (props) => {
    const { name, email, createdAt, updatedAt } = props.user
    return(
        <li>
            <Link to="/delete">Delete</Link>
            <h3>{name}</h3> 
            <h2>{email}</h2>
            <Link to="/edit">Update</Link>
        </li>
    )
}