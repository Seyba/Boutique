import { useContext, useState, useEffect } from "react"
import { BoutiqueContext } from "../../context/boutiqueContext"
import { ProductItems } from "./ProductItems"
import { Link } from "react-router-dom"
import * as ordersAPI from '../../utilities/order-api'
import * as productsAPI from '../../utilities/products-api'

export const ProductList = () => {
    const ctx = useContext(BoutiqueContext)
    const { newArrivals, user } = ctx
    const [products, setProducts] = useState({})

    useEffect(() => {
        async function getProds(){
            const prods = await productsAPI.getAll()
            setProducts(prods)
        }
        getProds()
    },[])
    const handleAddToCart = async()=> {
        const updatedCart = await ordersAPI.addItemToCart()
    }
    return(
        <div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {
                    
                    (products.length > 0)? products.map((product) => (
                    <div key={product._id} className="group relative">
                        <Link to={`/products/list/${product._id}`}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                src={product.img}
                                alt={product.imgAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                            </div>
                        </Link>
                        <div className="mt-4 flex justify-between">
                            <div>
                            <h3 className="text-sm text-gray-700">
                                <Link to={product._id}>
                                
                                    {product.name}
                                </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$ {product.price} USD</p>
                        </div>
                    </div>
                    )): <h3>Loading ...</h3>
                }
            </div>
        </div>
    )
}