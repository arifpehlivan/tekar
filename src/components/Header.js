import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header> 
            <ul className='navigation'>
                <li className="logo"><a href='/#' >TEK-AR</a></li>
                <li><a href="/#">Anasayfa</a></li>
                <li><a href="/gallery">Foto Galeri</a></li>
                <li><a href="/#">Hakkımızda</a></li>
                <li className='dropdown-menu'>
                    <a href="/services">Hizmetler</a>
                    {/* <ul className='dropdown'>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                    </ul> */}
                </li>
                <li><a href="/#connect">Iletisim</a></li>
            </ul>
            <div className="login">        
                <Link to="/login"><button>Giriş Yap</button></Link>
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