import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Fronend = () => {

    const judul = "Website pengelolaan sekolah";


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
                        <img src="assets/login.png" alt="" />
                        <h6>{judul.length > 50 ? judul.slice(0, 15) + "..." : judul }</h6>
                        <div className="project_buttons">
                            <a href="/" className='project_buttons_details'>Details</a>
                            <a href="/" className='project_buttons_demo'>Demo</a>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
    </>
  )
}

export default Fronend