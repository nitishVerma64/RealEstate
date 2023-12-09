import React from 'react'
import {Swiper, SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import './Location.css'
import image from '../images/r1.png'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

export const Location = () => {
  return (
    <section className="loco-wrapper">
        <div className="paddings innerWidth loco-container">
            <div className="loco-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButton/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i} >
                            <div className="flexColStart loco-card">
                                <img src={image} alt="home" />
                                <span className="secondaryText loco-price">
                                    <span style={{color:'orange'}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Location

const SliderButton = ()=>{
    const swiper =useSwiper();
    return(
        <div className="flexCenter loco-button">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    );
};