import React from 'react'
import Heroimage from '../images/illustration-working.svg'

export default function Hero() {
  return (
      <div className="max-width mt-10 mb-32 md:mt-20 md:mb-28 md:flex md:flex-row-reverse md:gap-2">
        <img className="block lg:-mr-72 md:-mr-64 " src={Heroimage} alt="" />
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl lg:leading-tight md:text-left text-center text-dark-blue font-extrabold mt-5">More than just shorter links</h1>
          <p className="text-center text-grayish-violet md:text-1xl md:text-left my-5">Build your brand’s recognition and get detailed insights
            on how your links are performing.</p>
          <button className="text-white block bg-Cyan hover:bg-cyan-200 md:mx-0 py-3 px-8 mt-2 rounded-full text-1xl font-extrabold mx-auto">Get Started</button>
        </div>
      </div>
  )
}