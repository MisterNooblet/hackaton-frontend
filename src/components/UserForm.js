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
            API.register({ fullname: name.current.value, email: displayName.current.value, password: password.current.value })
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
            console.log(canLogIn);
            setUser({ fullname: canLogIn.fullname, id: canLogIn.id })
            navigate('/')
        } else {
            setErrors('Login failed check your credentials')
        }
    }

    if (formType === 'register') {
        return (
            <>
                <div className="Register-Countiner ">
                    <div className="Register-Pic">
                        <img
                            src="https://img.freepik.com/free-vector/group-people-from-different-races_52683-16145.jpg?w=740&t=st=1680030849~exp=1680031449~hmac=7abf9ff008e7a296f5c4a384089cb29f354be39691d80974a5237e8849255815"
                            alt="regester-img"
                        ></img></div>

                    <form className="Register-Form" onSubmit={handleRegister}>

                        <h2 className='h2-login'>{errors ? errors : 'Register'}</h2>
                        Username:
                        <input ref={name} type='text' name={'username'} placeholder={'Username'}></input>
                        Email:
                        <input ref={displayName} type='text' name={'displayName'} placeholder={'Display Name'}></input>
                        Dont use your regular password the API is public!
                        <input ref={password} type='password' name={'password'} placeholder={'Password'}></input>
                        <button className='button-LoginPage '>REGISTER</button>
                    </form>
                </div>
            </>

        )
    } else {
        return (
            <div className="Register-Countiner ">
                <div className="Register-Pic">
                    <img
                        src="https://img.freepik.com/free-vector/group-people-from-different-races_52683-16145.jpg?w=740&t=st=1680030849~exp=1680031449~hmac=7abf9ff008e7a296f5c4a384089cb29f354be39691d80974a5237e8849255815"
                        alt="regester-img"
                    ></img></div>
                <form className="Register-Form" onSubmit={handleLogin}>
                    <h2 className='h2-login'>{errors ? errors : 'Login'}</h2>
                    Email:
                    <input ref={name} type='text' name={'username'} placeholder={'Username'}></input>
                    Password:
                    <input ref={password} type='password' name={'password'} placeholder={'Password'}></input>
                    <button className='button-LoginPage ' type='submit'>LOGIN</button>
                    <Link to='/register' className='underline'>
                        <p className='p-login'>  <strong>  Don't have an account? </strong> Get Started! </p>
                    </Link>
                </form>
            </div>
        )
    }


}

export default UserForm