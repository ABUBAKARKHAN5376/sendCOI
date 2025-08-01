'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            title: 'Business Owners',
            tags: ['Corporation', 'Nonprofit', 'LLC', 'Other'],
            image: '/images/testimonial_img_1.webp',
            name: 'Scarlett J.',
            role: 'Commercial Insurance Agent',
            content:
                'As an agency owner managing hundreds of commercial clients, Send COI has been a game changer for our operations. What used to take hours chasing emails, manually issuing Certificates of Insurance, and handling urgent requests now happens in seconds.',
        },
        {
            title: 'Business Owners',
            tags: ['Corporation', 'Nonprofit', 'LLC', 'Other'],
            image: '/images/testimonial_img_2.webp',
            name: 'Mark H.',
            role: 'Commercial Insurance Agent',
            content:
                'The platform is simple to use, incredibly responsive, and designed with both the agency and the insured in mind. Our clients appreciate the freedom to generate their own COIs from their smartphones, and our team saves countless hours every week.',
        },
        {
            title: 'Business Owners',
            tags: ['Corporation', 'Nonprofit', 'LLC', 'Other'],
            image: '/images/testimonial_img_1.webp',
            name: 'Scarlett J.',
            role: 'Commercial Insurance Agent',
            content:
                'As an agency owner managing hundreds of commercial clients, Send COI has been a game changer for our operations. What used to take hours chasing emails, manually issuing Certificates of Insurance, and handling urgent requests now happens in seconds.',
        },
        {
            title: 'Business Owners',
            tags: ['Corporation', 'Nonprofit', 'LLC', 'Other'],
            image: '/images/testimonial_img_2.webp',
            name: 'Mark H.',
            role: 'Commercial Insurance Agent',
            content:
                'The platform is simple to use, incredibly responsive, and designed with both the agency and the insured in mind. Our clients appreciate the freedom to generate their own COIs from their smartphones, and our team saves countless hours every week.',
        },
        {
            title: 'Business Owners',
            tags: ['Corporation', 'Nonprofit', 'LLC', 'Other'],
            image: '/images/testimonial_img_1.webp',
            name: 'Scarlett J.',
            role: 'Commercial Insurance Agent',
            content:
                'As an agency owner managing hundreds of commercial clients, Send COI has been a game changer for our operations. What used to take hours chasing emails, manually issuing Certificates of Insurance, and handling urgent requests now happens in seconds.',
        },
        {
            title: 'Business Owners',
            tags: ['Corporation', 'Nonprofit', 'LLC', 'Other'],
            image: '/images/testimonial_img_2.webp',
            name: 'Mark H.',
            role: 'Commercial Insurance Agent',
            content:
                'The platform is simple to use, incredibly responsive, and designed with both the agency and the insured in mind. Our clients appreciate the freedom to generate their own COIs from their smartphones, and our team saves countless hours every week.',
        },
     
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={180}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            slidesPerView={1.1}
            breakpoints={{
                700: {
                    slidesPerView: 1.5,
                    spaceBetween: 115

                },
                1230: {
                    slidesPerView: 2,
                    spaceBetween: 135

                },
                1500: {
                    spaceBetween: 180,
                    slidesPerView: 2.4,
                },
            }}
            className="w-full !mb-0"
        >
            {testimonials.map((item, index) => (
                <SwiperSlide key={`testimonial-${index}`}>
                    <div
                        className={`h-[420px] max-[1650px]:h-[350px] w-full bg-[#F5F5F5] border-8 border-[rgba(0,0,0,0.02)] flex justify-center max-[850px]:flex-col-reverse max-[850px]:h-auto rounded-3xl p-5 max-[500px]:p-4 transition-all duration-300 ${
                            activeIndex === index ? '' : 'blur-xs scale-[1.2]'
                        }`}
                    >
                        <div className="flex flex-col justify-between max-[850px]:flex-row max-[850px]:mt-3.5 h-full w-[40%] max-[1650px]:w-[33%]  max-[850px]:w-full">
                            <h5 className="font-medium text-2xl max-[1650px]:text-xl max-[850px]:hidden">{item.title}</h5>
                            <div className="flex gap-2 w-32 flex-wrap max-[850px]:w-full">
                                {item.tags.map((tag, i) => (
                                    <p key={i} className="text-sm font-medium bg-white px-2 py-3 rounded-lg max-[500px]:py-2 max-[500px]:text-xs">
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-[60%] max-[1650px]:w-[67%] max-[850px]:w-full h-full bg-white rounded-2xl flex flex-col justify-between p-5">
                            <div className="flex items-center gap-5 pb-4">
                                <div
                                    className="h-[100px] w-[120px] max-[1650px]:h-[80px]  max-[1650px]:w-100px bg-center bg-cover rounded-xl"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                ></div>
                                <div>
                                    <b className="text-2xl font-medium  max-[1650px]:text-lg">{item.name}</b>
                                    <p className="font-medium text-[rgba(0,0,0,0.3)] mt-1 max-[1650px]:text-[15px] max-[1650px]:mt-0.5">{item.role}</p>
                                </div>
                            </div>
                            <p className="text-lg leading-snug max-[1650px]:text-md overflow-y-auto max-[500px]:text-sm">{item.content}</p>
                        </div>
                        <h5 className='hidden max-[850px]:block text-2xl font-medium mb-3 max-[500px]:text-xl'>{item.title}</h5>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
