import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProductById } from "../utilities/items-api"

export const ProductDetailsPage = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const { title, price, description, imgSrc, imgAlt } = product
    
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
                <h2>Product Details{product.title}</h2>
                <h3>{title}</h3>
            </div>
            
            
        </div>
    )
}
