import React from 'react';
import logo from '../../assets/logo2.png';
import './nav.css';
import { BsFillBellFill, BsCartFill } from 'react-icons/bs';
import coming from '../../assets/coming.jpg';

const Nav = () => {
  return (
    <div className='nav__container'>
        <div className="nav__logo">
            <img src={logo} alt="ironvix logo" />
        </div>

        <div className="nav__menu">
            <a href="#" className='nav__menu-link'>Inicio</a>
            <a href="#" className='nav__menu-link'>Servicios</a>
            <div className='nav__menu-link__container'>
                <a href="#" className='nav__menu-link'>Productos</a>
                <img src={coming} alt="" className='coming-soon' />
            </div>
            <a href="#" className='nav__menu-link'>Nosotros</a>
            <a href="#" className='nav__menu-link'>Contactanos</a>
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