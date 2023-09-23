import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../utilities/items-api"
import { TERipple } from "tw-elements-react"

export const ProductDetailsPage = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const { title, price, description, category, date_added, imgSrc, imgAlt } = product

    useEffect(()=> {
        const getProdById = async(id)=> {
            const prod = await fetchProductById(id)
            setProduct(prod)
        }
        getProdById(id)
        
    },[])
    return(
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2>Product Details</h2>
                <h3>{title}</h3>
                <div className="md:grid grid-cols-2 gap-6">
                    <div className="">
                        <div>
                            <img
                                src={imgSrc}
                                alt={imgAlt}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <h3>{title}</h3>
                        </div>
                        <div>
                            <p>{description}</p>
                        </div>
                        <div>
                            <h3>${price} USD {date_added}</h3>
                        </div>
                        <div>
                            <form>
                                <div>
                                    <input 
                                        type="number" 
                                        className="block w-1/4 rounded-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    
                                    <button className="bg-slate-950 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-none">
                                        add to cart
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
