import React from 'react'
import "./footer.css"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import {MdLocationOn } from "react-icons/md";
import {FiPhone } from "react-icons/fi";
import { AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";

const Footer = () => {
    return (
        <footer id="connect">
            <div className="connect">
                <div>
                    <i><MdLocationOn/></i>
                    <span>Adres: Kurtuluş mahallesi Ford servis arkası Türk Telekom şantiyesi Erzurum / Yakutiye </span>
                </div>
                <div>
                    <i><FiPhone/></i>
                    <span>Tel:0123456789</span>
                </div>
            </div>
            <div className="links">
                <ul>
                    <li><a href="/#">Anasayfa</a></li>
                    <li><a href="/about">Hakkımızda</a></li>
                    <li><a href="/gallery">Fotogaleri</a></li>
                    <li><a href="/services">Hizmetler</a></li>
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