import { Link } from "react-router-dom"
import * as userService from '../utilities/users-service'

const OrderHistoryPage = (props) => {
    console.log('order history page')
    const handleCheckToken = async () => {
        userService.checkToken()
        const expDate = await userService.checkToken()
        console.log(expDate)
    }
    return(
        <div>
            <h1>Order History Page</h1>
            
            <button onClick={handleCheckToken}>Check my login expires</button>
        </div>
    )
}

export default OrderHistoryPage