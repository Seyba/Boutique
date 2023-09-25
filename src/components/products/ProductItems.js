import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BoutiqueContext } from "../../context/boutiqueContext"
import * as prodAPI from '../../utilities/products-api'
import * as orderAPI from '../../utilities/order-api'

export const ProductItems = (props) => {
    //const ctx = useContext(BoutiqueContext)
    const [product, setProduct] = useState({})
    const [cart, setCart] = useState(null)
    
    const { id } = useParams()
    useEffect(() => {
        const getProdById = async (prodId) => {
            const prod = await prodAPI.getById(prodId)
            setProduct(prod)
        }
        // const getUserCart = async () => {
        //     const cart = await orderAPI.getCart()
        //     setCart(cart)
        // }
        getProdById(id)
        //getUserCart()
    },[])
    
    const { img, name, description, category, price, imgAlt, } = product

    const handleAddToCart = async(itemId) => {
        const udpCrt = await orderAPI.addItemToCart(itemId)
        setCart(udpCrt)
    }
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                
                <div className="md:grid grid-cols-2 gap-6">
                    <div className="">
                        <div>
                            <img
                                src={img}
                                alt={imgAlt}
                            />
                        </div>
                    </div>
                    <div className="py-32">
                        <div>
                            <h3 className="text-5xl font-thin py-8">{name} </h3>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div>
                            <h3 className="text-3xl py-12 font-semibold">${price} USD</h3>
                        </div>
                        <div>
                            <button 
                                
                                className="bg-slate-950 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-none"
                            >
                                Add to Cart
                            </button>
                            
                        </div>
                        <div>
                            <h3>{category}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}