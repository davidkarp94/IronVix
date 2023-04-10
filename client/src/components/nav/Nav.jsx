import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import './nav.css';
import { BsFillBellFill, BsCartFill } from 'react-icons/bs';
import coming from '../../assets/coming.jpg';

const Nav = () => {
  return (
    <div className='nav__container'>
        <div className="nav__logo">
            <Link to='/' >
                <img src={logo} alt="ironvix logo" />
            </Link>
        </div>

        <div className="nav__menu">
            <Link to='/' className='nav__menu-link'>Inicio</Link>
            <Link to='/services' className='nav__menu-link'>Servicios</Link>
            <div className='nav__menu-link__container'>
                <Link to='/products' className='nav__menu-link'>Productos</Link>
                <img src={coming} alt="" className='coming-soon' />
            </div>
            <Link to='about-us' className='nav__menu-link'>Nosotros</Link>
            <Link to='contact' className='nav__menu-link'>Contactanos</Link>
        </div>

        <div className="nav__user">
            <div className="nav__user-data">
                <input type="text" className='nav__user-data__input' placeholder='User' />
                <input type="text" className='nav__user-data__input' placeholder='Password' />
            </div>

            <div className="nav__user-buttons">
                <button className='nav__user-button'>LogIn</button>
                <button className='nav__user-button'>Register</button>
            </div>

            <div className="nav__user-icons">
                <BsFillBellFill className='nav__user-icon' />
                <BsCartFill className='nav__user-icon' />
            </div>
        </div>
    </div>
  )
}

export default Nav