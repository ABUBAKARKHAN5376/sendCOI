'use client';
import { useEffect, useRef } from 'react';

// ✅ Static logo array (duplicated later)
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

export default function ClientLogoSlider() {
  const scrollRef = useRef(null);
  const speed = 0.7; // pixels per frame

  useEffect(() => {
    let frameId;
    let x = 0;

    const scroll = () => {
      if (!scrollRef.current) return;

      x -= speed;

      const scrollWidth = scrollRef.current.scrollWidth / 2;
      if (Math.abs(x) >= scrollWidth) {
        x = 0;
      }

      scrollRef.current.style.transform = `translateX(${x}px)`;
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frameId); // ✅ Clean up on unmount
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Moving logo track */}
      <div
        ref={scrollRef}
        className="flex gap-24 max-2xl:gap-20 max-md:gap-10 w-max will-change-transform"
        aria-label="Scrolling logos of partnered companies"
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index % logos.length + 1}`}
            className="h-16 max-2xl:h-12"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>

      {/* Gradient edges */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-60 bg-gradient-to-r from-white to-transparent max-sm:w-20" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-60 bg-gradient-to-l from-white to-transparent max-sm:w-20" />
    </div>
  );
}
