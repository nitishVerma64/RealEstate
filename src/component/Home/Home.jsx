import React from 'react'
import homeImg from '../images/home-image.png'
import {HiLocationMarker} from 'react-icons/hi'
import './Home.css'
import CountUp from 'react-countup'

const Home = () => {
  return (
    <section className="home-wrapper">
        <div className="paddings innerWidth flexCenter home-container">
            <div className="flexColStart home-left">
              <div className="home-heading">
                <div className="orangeCircle"></div>
                <h1>Discover <br/> Most Suitable<br/> Property</h1>
              </div>
              <div className="flexColStart home-discription">
                <span className='secondaryText'>Find varity of properties that suits you very easilty</span> <br/>
                <span className='secondaryText'>Forget all difficulties in finding a residance for you</span>
              </div>
              <div className="flexCenter search-bar">
                <HiLocationMarker color='var(--blue)' size={23}/>
                <input type="text" />
                <button className="button">Search</button>
              </div>
              <div className="flexCenter stats">
                  <div className="flexColStart stat">
                    <span> 
                      <CountUp start={8600} end={9000} duration={4}/> 
                      <span>+</span>
                    </span>
                    <span className='secondaryText'>Premimum Products</span>
                  </div>
                  <div className="flexColStart stat">
                    <span> 
                      <CountUp start={800} end={900} duration={4}/> 
                      <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy Customers</span>
                  </div>
                  <div className="flexColStart stat">
                    <span> 
                      <CountUp end={24} duration={4}/> 
                      <span>+</span>
                    </span>
                    <span className='secondaryText'>Award Winning</span>
                  </div>
              </div>
            </div>
            <div className="flexCenter home-right">
                <div className="img-container">
                    <img src={homeImg} alt="homeimg" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home