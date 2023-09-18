import { useState } from "react"
import { signUp } from '../../utilities/users-service'

export default function SignUpForm({setUser}){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        confirm: '',
        password: '',
        error: ''
    })
    const disable = formData.password !== formData.confirm

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
    return(
        <div>
            <h2>Sign up form</h2>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
        </div>
    )
}