import React from 'react'
import './Footer.css'
import logo from '../images/logo2.png'

const Footer = () => {
  return (
    <section className="fwrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src={logo} alt="" />
                <span className="secondaryText">
                    Our Vision is to make all people <br/>
                    the best place to live for them. 
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 NewYork, FL 3523, USA</span>
                <div className="flexCenter f-menu">
                    <span>Provperty</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>AboutUs</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
