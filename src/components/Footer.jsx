import Link from 'next/link';
import React from 'react'
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <>
        <div className='container mx-auto px-10 max-[475px]:px-4'>
            <div className='flex justify-between max-lg:flex-col items-end pb-10 border-b border-[rgba(0,0,0,0.1)]'>
                <div className='max-lg:w-full'>
                    <img  loading="lazy" className='max-2xl:h-9' src="/images/logo.svg" alt="logo" />
                    <p className='text-xl mt-10 w-96 max-2xl:mt-6 max-2xl:text-lg max-lg:w-[500px] max-sm:w-full'>SendCOI is a web service that provides commercial insurance agencies a self generated Certificate of Insurance to their commercial policy holders  anytime anywhere from a smart phone</p>
                    <div className='flex mt-12 gap-8 max-2xl:mt-8'>
                        <a href="" className='text-3xl max-2xl:text-2xl text-[#00B0F0] hover:text-[#009ed8] hover:scale-[1.1]'><FaXTwitter  /></a>                
                        <a href="" className='text-3xl max-2xl:text-2xl text-[#00B0F0] hover:text-[#009ed8] hover:scale-[1.1]'><FaInstagram /></a>                
                        <a href="" className='text-3xl max-2xl:text-2xl text-[#00B0F0] hover:text-[#009ed8] hover:scale-[1.1]'><FaLinkedin  /></a>                
                        </div>
                </div>
                <div className='flex gap-28 max-2xl:gap-18 max-xl:gap-15 max-lg:w-full max-lg:mt-10 max-lg:justify-between max-sm:flex-wrap max-sm:justify-start max-sm:gap-20'>
                    <div>
                        <h6 className='text-[rgba(26,26,26,0.1)] text-2xl font-bold mb-7 max-2xl:text-xl max-2xl:mb-5'>About App</h6>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">Help</Link>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">FAQ</Link>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">Contact</Link>
                    </div>
                    <div>
                        <h6 className='text-[rgba(26,26,26,0.1)] text-2xl font-bold mb-7 max-2xl:text-xl max-2xl:mb-5'>Support</h6>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">Why Us</Link>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">Features</Link>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">How It Works</Link>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">Pricing</Link>
                    </div>
                    <div>
                        <h6 className='text-[rgba(26,26,26,0.1)] text-2xl font-bold mb-7 max-2xl:text-xl max-2xl:mb-5'>Legal</h6>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">Privacy Policy</Link>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">Terms Of Conditions</Link>
                        <Link href="/" className="text-lg font-medium mb-6 block max-2xl:text-base max-2xl:mb-4">Cookies</Link>
                    </div>
                </div>
            </div>
            <p className='text-xl text-[rgba(18,18,18,0.2)] text-center py-5 max-2xl:py-3 max-2xl:text-lg  max-[475px]:!text-base'>© 2023 SendCoI. All Rights Reserved.</p>
        </div>
    </>
  )
}

export default Footer