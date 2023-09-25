import { useState, useContext} from 'react'
import { Link } from "react-router-dom";
import { signUp } from '../../utilities/users-service'
import { BoutiqueContext } from '../../context/boutiqueContext';
import { TEInput, TERipple } from "tw-elements-react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

export function RegisterFom() {
  const navigate = useNavigate()
  const ctx = useContext(BoutiqueContext)
  const { setUser } = ctx
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirm: '',
    password: '',
    error: ''
  })

  const disable = formData.password !== formData.confirm
  const pwdError = formData.password !== formData.confirm

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      setFormData(formData)
      
      const userFormData = {...formData}

      delete userFormData.error
      delete userFormData.confirm

      const user =  await signUp(userFormData)
      setUser(user)
      console.log(user)
      navigate('/account')
    } catch (error) {
      setFormData({
        ...formData,
        error: 'Sign Up Failed - Try Again.'
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
          Sign in to your account
        </h2>
        
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password 
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="confirm"
                value={formData.confirm}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {
                pwdError && (<p className="text-sm text-red-500 font-semibold">Passwords don't match</p>)
              }
            </div>
          </div>
          
          <div>
            
            <button
              type="submit"
              disabled={disable}
              className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold leading-6 text-blue-600 hover:text-indigo-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  )
}