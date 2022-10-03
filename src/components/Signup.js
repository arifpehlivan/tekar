import React from 'react'
import "./signup.css"

const Signup = () => {
    return (
        <form>
            <h2>Kaydol</h2>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Name</span>
            </div>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Mail</span>
            </div>
            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
            </div>
            <div class="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
            </div>
            <button>Kaydol</button>
            {/* 
            <input type="text" placeholder='Mail'/>
            <input type="password" placeholder='Şifre'/>
            <button>Giriş Yap</button> */}
        </form>
    )
}

export default Signup