'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Original logo array
const logos = [
    '/images/company_logo_1.svg',
    '/images/company_logo_2.svg',
    '/images/company_logo_3.svg',
    '/images/company_logo_4.svg',
    '/images/company_logo_5.svg',
    '/images/company_logo_6.svg',
    '/images/company_logo_1.svg',
    '/images/company_logo_2.svg',
    '/images/company_logo_3.svg',
    '/images/company_logo_4.svg',
    '/images/company_logo_5.svg',
    '/images/company_logo_6.svg',
];

export default function LogoSlider() {
    const scrollRef = useRef(null);
    const speed = .7; // px per frame

    useEffect(() => {
        let frameId;
        let x = 0;

        const scroll = () => {
            if (!scrollRef.current) return;

            x -= speed;

            // Scroll reset after first set finishes
            const scrollWidth = scrollRef.current.scrollWidth / 2;
            if (Math.abs(x) >= scrollWidth) {
                x = 0;
            }

            scrollRef.current.style.transform = `translateX(${x}px)`;
            frameId = requestAnimationFrame(scroll);
        };

        frameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <>
            {/* Moving container */}
            <div ref={scrollRef} className="flex gap-24 max-2xl:gap-20 max-md:gap-10 w-max will-change-transform">
                {/* Duplicate the logos array */}
                {[...logos, ...logos].map((logo, index) => (
                    <img className='h-16 max-2xl:h-12 ' src={logo} key={index} alt="" />
                ))}
            </div>
            <div className="absolute top-0 left-0 h-full w-60 bg-gradient-to-r from-white to-transparent  max-sm:w-20"></div>
            <div className="absolute top-0 right-0 h-full w-60 bg-gradient-to-l from-white to-transparent  max-sm:w-20"></div>
        </>
    );
}
