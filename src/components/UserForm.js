import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../utils/UserApi'

const UserForm = ({ formType, setUser }) => {

    const navigate = useNavigate()
    const [errors, setErrors] = useState('')
    const name = useRef('')
    const displayName = useRef('')
    const password = useRef('')

    const handleRegister = async (e) => {
        e.preventDefault()
        const isntUnique = await API.userUnique(name.current.value)
        if (!isntUnique && password.current.value.length > 5 && name.current.value.length !== 0) {
            API.register({ username: name.current.value, alias: displayName.current.value, password: password.current.value, isAdmin: false })
            handleLogin(e)

        } else if (name.current.value.length === 0) {
            setErrors('Please provide a username!')
        } else if (displayName.current.value.length === 0) {
            setErrors('Please provide a display name')
        } else if (isntUnique) {
            setErrors('Username already exists!')
        } else if (password.current.value.length <= 5) {
            setErrors('Password is too short please use a password longer than or 6 characters')
        }

    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const canLogIn = await API.userCanlog(name.current.value, password.current.value)
        if (canLogIn) {
            localStorage.setItem('user', JSON.stringify({ username: canLogIn.username, alias: canLogIn.alias, isAdmin: canLogIn.isAdmin }))
            setUser({ username: canLogIn.username, alias: canLogIn.alias, isAdmin: canLogIn.isAdmin })
            navigate('/')
        } else {
            setErrors('Login failed check your credentials')
        }
    }

    if (formType === 'register') {
        return (
            <div className='flex justify-center items-center h-screen bg-primary'>
                <form className='w-400 bg-white p-2' onSubmit={handleRegister}>
                    <h1>{errors ? errors : 'Register'}</h1>
                    Username:
                    <input ref={name} type={'text'} name={'username'} placeholder={'Username'}></input>
                    Full name:
                    <input ref={displayName} type={'text'} name={'displayName'} placeholder={'Display Name'}></input>
                    Dont use your regular password the API is public!
                    <input ref={password} type={'password'} name={'password'} placeholder={'Password'}></input>
                    <button className='contained-btn my-1 bg-primary w-full'>REGISTER</button>
                </form>
            </div>
        )
    } else {
        return (
            <div className='flex justify-center items-center h-screen bg-primary'>
                <form className='w-400 bg-white p-2' onSubmit={handleLogin}>
                    <h1>{errors ? errors : 'Login'}</h1>
                    Username:
                    <input ref={name} type={'text'} name={'username'} placeholder={'Username'}></input>
                    Password:
                    <input ref={password} type={'password'} name={'password'} placeholder={'Password'}></input>
                    <button className='contained-btn my-1 bg-primary w-full' type='submit'>LOGIN</button>
                    <Link to='/register' className='underline'>
                        <strong>  Don't have an account? </strong> Get Started!
                    </Link>
                </form>
            </div>
        )
    }


}

export default UserForm