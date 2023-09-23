import { useState, useContext} from 'react'
import { Link } from "react-router-dom";
import { addProduct } from '../../utilities/items-api'
import { BoutiqueContext } from '../../context/boutiqueContext';
import { TEInput, TERipple } from "tw-elements-react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export function ProductForm() {
  const navigate = useNavigate()
//   const ctx = useContext(BoutiqueContext)
//   const { setUser } = ctx
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    imgSrc: '',
    imgAlt: '',
    error: ''
    
  })

    const handleSubmit = async e => {
      e.preventDefault()
      try {
        setFormData(formData)
        
        const productData = {...formData}
        const prod = await addProduct(productData)

        navigate('/shop')
      } catch (error) {
        setFormData({
          ...formData,
          error: 'Product entry failed!!'
        })
      }
    }

    const handleChange = e => {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value,
        error: ''
      })
        //[e.target.name] = e.target.value
    }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          New Product Entry
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              category
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Image Source
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="imgSrc"
                value={formData.imgSrc}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
              Image Alt
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="imgAlt"
                value={formData.imgAlt}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
              Price
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>
          </div>
        </form>
        
      </div>
    </div>
  )
}