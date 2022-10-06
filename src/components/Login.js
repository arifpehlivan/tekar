import React from 'react'
import "./login.css"

const Login = () => {
    return (
        <form id="login">
            <h2>Giriş Yap</h2>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Mail</span>
            </div>
            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
            </div>
            <button>Giriş Yap</button>
            {/* 
            <input type="text" placeholder='Mail'/>
            <input type="password" placeholder='Şifre'/>
            <button>Giriş Yap</button> */}
        </form>
    )
}

export default Login