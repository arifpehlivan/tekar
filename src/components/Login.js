import React from 'react'
import "./login.css"
import first from "../img/1.jpg"

const Login = () => {
    return (
        <div className="login-container">
            <div id="login" className='login'>
                <form>
                    <h2>Giriş Yap</h2>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Mail</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Şifre</span>
                    </div>
                    <button>Giriş Yap</button>
                </form>
            </div>
            <div className="login-back">
                <img src={first} alt="" />
                <div className="login-img-text">
                    <h1 style={{color: "black"}}>Tekar Elektrik İnşaat A.Ş</h1>
                    <h3 style={{color: "black"}} textindent="50px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ullam assumenda doloribus quis consequuntur dolore, exercitationem suscipit aut molestias facere.</h3>
                </div>
            </div>
        </div>
    )
}

export default Login