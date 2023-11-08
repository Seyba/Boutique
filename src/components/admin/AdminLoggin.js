import { useState, useContext } from 'react';
import * as usersService from '../../utilities/users-service';
import { BoutiqueContext } from '../../context/boutiqueContext';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom'

export default function AdminLoggin() {
    const navigate = useNavigate()
    const ctx = useContext(BoutiqueContext)
    const { setUser } = ctx
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
            navigate('/account')
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                    Admin Log In
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="mt-2">
                            <input 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="text" 
                                name="email" 
                                value={credentials.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="mt-2">
                            <input 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="password" 
                                name="password" 
                                value={credentials.password} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div>
                        <button 
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign In
                        </button>
                    </div>
                
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <Link to="/register" className="font-semibold leading-6 text-blue-600 hover:text-indigo-500">
                    Create an account today
                </Link>
                </p>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}