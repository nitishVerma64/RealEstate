import React from 'react'
import logo from '../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <section className='head-wrapper'>
        <div className="paddings innerWidth flexCenter head-container">
          <img src={logo} alt="logo"  width={100}/>
            <div className="flexCenter head-menu">
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className='button'> 
                    <a href="">Contact</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header