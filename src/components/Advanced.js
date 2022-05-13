import React from 'react'
import brand from '../images/icon-brand-recognition.svg'
import detail from '../images/icon-detailed-records.svg'
import fully from '../images/icon-fully-customizable.svg'

export default function Advanced() {
    return (
        <>
            <section className="bg-slate-200 md:pb-36 md:pt-10">
                <h2 className="font-bold text-center py-5 text-2xl md:text-4xl text-very-dark-violet ">Advanced Statistics</h2>
                <p className="text-center px-4 md:px-60 lg:mx-32 mx-5 text-grayish-violet mb-20">Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 md:px-0 max-width">
                    <div className="bg-Cyan rotate-90 md:rotate-0 h-2 w-full absolute top-1/3 md:top-1/2 -z-1"></div>
                    <div className="bg-Cyan rotate-90 h-2 w-full absolute top-2/3 md:hidden -z-1"></div>
                    <article className="relative text-center md:text-left bg-white mx-4 md:mx-0 mb-5 rounded-md">
                        <img className="bg-dark-violet mx-auto md:ml-8 -mt-8 p-4 rounded-full" src={brand} alt="brand" />
                        <h3 className="font-bold md:text-1xl md:mx-8 md:text-left my-5">Brand Recognition</h3>
                        <p className="mx-8 pb-8 text-grayish-violet">Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.</p>
                    </article>
                    <article className="relative text-center md:text-left bg-white mx-4 mb-5 md:mx-0 md:translate-y-12 rounded-md">
                        <img className="bg-dark-violet mx-auto md:ml-8 -mt-8 p-4 rounded-full" src={detail} alt="detail" />
                        <h3 className="font-bold md:text-1xl md:mx-8 md:text-left my-5">Detailed Records</h3>
                        <p className="mx-8 pb-8 text-grayish-violet">Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.</p>
                    </article>
                    <article className=" relative text-center md:text-left bg-white mx-4 mb-14 md:mx-0 md:mb-5 md:translate-y-24 rounded-md">
                        <img className="bg-dark-violet mx-auto md:ml-8 -mt-8 p-4 rounded-full" src={fully} alt="fully" />
                        <h3 className="font-bold md:text-1xl md:mx-8 md:text-left my-5">Fully Customizable</h3>
                        <p className="mx-8 pb-8 text-grayish-violet">Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.</p>
                    </article>
                </div>
            </section>
        </>
    )
}
