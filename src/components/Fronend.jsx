import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper";

import tokopalul from '../images/tokopalul.png'

const Fronend = () => {

    const judul = "Website toko online | Toko palul";


    const arr = [1, 2, 3 ,4]
  return (
    <>
        <Swiper
            breakpoints={{
            768: {
                slidesPerView: 2,
                },
            1000: {
                slidesPerView: 3,
            }
            
            }}
            pagination={true} modules={[Pagination]}
            className="mySwiper"
            slidesPerView={1}
            loop="true">

                {arr.map((index) => (
                    <SwiperSlide key={index}>
                    <div className="project" >
                        <img src={tokopalul} alt="" />
                        <h6>{judul.length > 50 ? judul.slice(0, 15) + "..." : judul }</h6>
                        <div className="project_buttons">
                            <a target="_blank" rel="noreferrer" href="https://github.com/mohimamrifai/Ecommerce-frontend-toko-palul" className='project_buttons_details'>Source code</a>
                            <a target="_blank" rel="noreferrer" href="https://toko-palul.netlify.app/" className='project_buttons_demo'>Demo</a>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
    </>
  )
}

export default Fronend