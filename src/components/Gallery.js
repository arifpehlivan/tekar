import React from 'react'
import "./gallery.css"
import first from "../img/1.jpg"
import second from "../img/2.jpg"
import third from "../img/3.jpg"

const Gallery = () => {
    return (
        <div className='container'>
            <h2>Foto Galeri</h2>
            <div className="cards">
                <div className="card">
                    <img src={first} alt="" />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="card">
                    <img src={first} alt="" />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="card">
                    <img src={first} alt="" />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className="card">
                    <img src={first} alt="" />
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>
        </div>
    )
}

export default Gallery