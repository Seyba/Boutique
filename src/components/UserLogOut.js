import { useContext } from 'react'
import { BoutiqueContext} from '../context/boutiqueContext'
import { logOut } from '../utilities/users-service'

export const UserLogOut = () => {
    const ctx = useContext(BoutiqueContext)
    const { user, setUser } = ctx
    console.log(user)
    const handleLogOut = () => {
        logOut()
        setUser(null)
    }
    return (
        <div >
            <div>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            {/* <divclassName={styles.email}>{user.email}</divclassName=>
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button> */}
        </div>
    )
}