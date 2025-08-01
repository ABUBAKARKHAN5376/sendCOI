import React from 'react'

function CoverageCard({ icon, title, desc, link }) {
  return (
   <div className="bg-[#F5F5F5] h-[400px] w-[31.7%] max-2xl:w-[31%] max-lg:w-[47%] rounded-lg max-xl:h-[300px] max-md:w-full max-md:h-[270px] p-10 flex flex-col max-2xl:p-7 max-2xl:h-[340px] justify-between outline-[rgba(26,26,26,0.2)] outline-0 hover:outline-1">
      <img className='h-16 w-fit max-2xl:h-12 max-xl:h-10' alt='icon' loading="lazy" src={icon}></img>
      <div>
        <h3 className="text-3xl max-2xl:text-[25px] max-xl:text-[23px]">{title}</h3>
        <p className="text-lg mt-3 leading-snug">{desc}</p>
        {link && (
          <a href="#" className="font-medium text-md mt-4 block">
            {link} →
          </a>
        )}
      </div>
    </div>
  )
}

export default CoverageCard