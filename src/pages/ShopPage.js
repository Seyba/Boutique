import {useContext} from 'react'
import {BoutiqueContext } from '../context/boutiqueContext'
import { Link } from 'react-router-dom'

export const ShopPage = () => {
  const ctx = useContext(BoutiqueContext)
  const { products } = ctx
  console.log(products)
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              <Link to={`/shop/${product._id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imgSrc}
                    alt={product.imagAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </Link>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product._id}>
                      
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$ {product.price} USD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}