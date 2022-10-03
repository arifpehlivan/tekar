import React from 'react'
import "./header.css"
import { FaRegBuilding } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            
            <ul className='navigation'>
                {/* <span><FaRegBuilding/></span> */}
                <li className="logo"><a href='/#' >TEK-AR</a></li>
                <li><a href="/#">Anasayfa</a></li>
                <li><a href="/#">Foto Galeri</a></li>
                <li><a href="/#">Hakkımızda</a></li>
                <li><a href="/#">Hizmetler</a></li>
                <li><a href="/#">Iletisim</a></li>
            </ul>
            <div className="login">        
                <Link to="/login"><button>Giriş Yap</button> </Link>
                <Link to="/signup"><button>Kaydol</button></Link>
            </div>
            <div className="mode" >
                <label >
                    <input type="checkbox" />
                    <span className="check"  ></span>
                </label>
            </div>
        </header>
    )
}

export default Header