import React from 'react'
import "./signup.css"
import second from "../img/2.jpg"

const Signup = () => {
    return (
        <div className="signup-container">
            <div className='signup'>
                <form>
                    <h2>Kaydol</h2>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Ad Soyad</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Mail</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Şifre</span>
                    </div>
                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Tekrar Şifre</span>
                    </div>
                    <button>Kaydol</button>
                </form>
            </div>
            <div className="signup-back">
                <img src={second} alt="" />
                <div className="signup-img-text">
                    <h1 >Tekar Elektrik İnşaat A.Ş</h1>
                    <h3 textindent="50px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ullam assumenda doloribus quis consequuntur dolore, exercitationem suscipit aut molestias facere.</h3>
                </div>
            </div>
        </div>
        // <form>
        //     <h2>Kaydol</h2>
        //     <div class="inputBox">
        //         <input type="text" required="required"/>
        //         <span>Ad Soyad</span>
        //     </div>
        //     <div class="inputBox">
        //         <input type="text" required="required"/>
        //         <span>Mail</span>
        //     </div>
        //     <div class="inputBox">
        //         <input type="password" required="required"/>
        //         <span>Şifre</span>
        //     </div>
        //     <div class="inputBox">
        //         <input type="password" required="required"/>
        //         <span>Şifre</span>
        //     </div>
        //     <button>Kaydol</button>
        // </form>
    )
}

export default Signup