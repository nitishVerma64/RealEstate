import React from 'react'
import './Company.css'
import equinix from '../images/equinix.png'
import prologis from '../images/prologis.png'
import tower from '../images/tower.png'
import realty from '../images/realty.png'

const Company = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <img src={equinix} alt="company" />
            <img src={prologis} alt="company" />
            <img src={tower} alt="compny" />
            <img src={realty} alt="company" />
        </div>
    </section>
  )
}

export default Company