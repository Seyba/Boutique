import { useContext } from 'react'
import { BoutiqueContext} from '../context/boutiqueContext'

export const UserLogOut = () => {
    const ctx = useContext(BoutiqueContext)
    const { user } = ctx
    console.log(user)
    return (
        <div >
            <div>
                <button>Log Out</button>
            </div>
            {/* <divclassName={styles.email}>{user.email}</divclassName=>
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button> */}
        </div>
    )
}