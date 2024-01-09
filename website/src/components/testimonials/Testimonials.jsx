import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Tanzila Jabeen',
        review: "Sharif is my batchmate, we studied together in the same college, he is very passionate and hard working and do its best to solve the problem in the field of development. His nature is good to others. If you hire Ankit Sharma, then he will perform its best and work better for your organization."
    },
    {
        avatar: AVTR2,
        name: 'Himansh Sharma',
        review: "I worked with Sharif on several projects during my tenture at Nagarro and found him a highly skilled and dedicated professional."
    },
    {
        avatar: AVTR3,
        name: 'Chandan Kumar',
        review: "I worked closely with Sharif and has shown great strengths in ownership, deliver results, bias for action, learn and be curious and deep dives. He is one of the friendlier peer to work with."
        
    },

]

const testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Reviews from Friends</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        
        pagination={{ clickable: true }}>
            {
            data.map(({avatar, name, review},index)=>{
                return (

                    <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                    <img src={avatar} alt="avatar1"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>
                        {review}
                    </small>

            </SwiperSlide>

                )
            })
            }

        </Swiper>
    </section>
  )
}

export default testimonials