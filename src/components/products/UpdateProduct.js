import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import * as itemAPI from '../../utilities/items-api'

export const UpdateProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [item, setItem ] = useState({
        title: '',
        description: '',
        category:'',
        imgSrc:'',
        imgAlt:'',
        price: ''
    })

    useEffect(()=>{
        const getItemById = async (id) => {
            const itemToBeUpd = await itemAPI.fetchProductById(id)
            //console.log('ITEM', item)
            setItem(itemToBeUpd)
        }
        getItemById(id)
    },[])
    
    const handleChange = e => {
        setItem({...item, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const itemData = { 
                title: item.title,
                description: item.description,
                category: item.category,
                imgSrc: item.imgSrc,
                imgAlt: item.imgAlt,
                price: item.price
            }
            console.log(itemData)

            const newData = await itemAPI.updateProduct(id, itemData)
            console.log(newData)
            navigate('/')
        } catch (error) {
            console.log('not updated')
        }
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update Product
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
                    value={item.title}
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
                    value={item.description}
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
                    value={item.category}
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
                    value={item.imgSrc}
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
                    value={item.imgAlt}
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
                    value={item.price}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update Product
                </button>
              </div>
            </form>
            
          </div>
        </div>
    )
    
}