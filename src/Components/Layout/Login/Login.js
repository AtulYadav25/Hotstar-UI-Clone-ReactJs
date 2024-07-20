import React, { useRef } from 'react'
import './Login.css'

const Login = () => {

    const loginContainer = useRef()

    const handleClose = ()=>{
        loginContainer.current.classList.toggle('displayNone')
    }

    return (
        <>
            <div className="login-container displayNone" ref={loginContainer} id="loginContainer">
                <div className="login-box">
                    <i className="fa-solid fa-xmark x-login" onClick={handleClose}></i>
                    <h2 className='login-head'>Login to continue</h2>
                    <button className='login-btn'>Have a Facebook/Email account?</button>
                    <p>or</p>
                    <div className="inputNumber">
                        <h3>+91</h3>
                        <input type="number" placeholder='Enter your mobile number' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login