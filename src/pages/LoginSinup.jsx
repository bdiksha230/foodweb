import React from 'react'
import './CSS/loginsignup.css';

const LoginSinup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup_container">
        <h1>Sign Up</h1>
        <div className="loginsignup_field">
          <input type="text" placeholder='your name' /> <br></br>
          <input type="email" placeholder='your email' /><br></br>
          <input type="password" placeholder='password' />
        </div>
        <button className='btn btn-danger my-3'>continue</button>
        <p className="loginsignup_login">Alredy have an account? 
          <span> Login</span>
        </p>
        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to use terms of use and privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSinup
