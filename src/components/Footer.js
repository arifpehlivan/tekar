import React from 'react'
import "./footer.css"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import {MdLocationOn } from "react-icons/md";
import {FiPhone } from "react-icons/fi";
import { AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="connect">
                
                <li><i><MdLocationOn/></i>Adres: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, reiciendis.
                    <span> Erzurum</span>
                </li>
                <li><i><FiPhone/></i>
                    Tel:
                    <span>0123456789</span>
                </li>
            </div>
            <div className="links">
                <ul>
                    <li><a href="/#">Anasayfa</a></li>
                    <li><a href="/#">Hakkımızda</a></li>
                    <li><a href="/#">Fotogaleri</a></li>
                    <li><a href="/#">Hizmetler</a></li>
                </ul>
            </div>
            <div className="social">
                <li><a href="/#">
                    <FaInstagram />
                </a></li>
                <li><a href="/#">
                    <AiFillLinkedin />
                </a></li>
                <li><a href="/#">
                    <AiOutlineGoogle />
                </a></li>
                <li><a href="/#">
                    <FaFacebook />
                </a></li>
            </div>
        </footer>
    )
}

export default Footer