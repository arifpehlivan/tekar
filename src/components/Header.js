import React, { useEffect, useContext } from 'react'
import "./header.css"
import { Link } from 'react-router-dom';
import { Context } from '../context';
import logo from "../img/tekar.png"

const Header = () => {
    const { mode, setMode } = useContext(Context);
    useEffect(() => {
        console.log(mode);
    }, [mode])
    return (
        <header className={mode ? "dark" : "light"}>
            <ul className='navigation'>
                <li className="logo"><Link to='/' ><img src={logo} alt="" /></Link></li>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/gallery">Foto Galeri</Link></li>
                <li><Link to="/about">Hakkımızda</Link></li>
                <li><Link to="/services">Hizmetler</Link></li>
                <li><Link to="/connect">Iletisim</Link></li>
            </ul>
            <div className="header-login">
                <Link to="/login"><button>Giriş Yap</button></Link>
                <Link to="/signup"><button>Kaydol</button></Link>
            </div>
            <div className="mode" >
                <label >
                    <input type="checkbox" onClick={() => setMode(!mode)} />
                    <span className="check"></span>
                    <span className="checkText">{mode ? "Dark Mode" : "Light Mode"}</span>
                </label>
            </div>
        </header>
    )
}

export default Header