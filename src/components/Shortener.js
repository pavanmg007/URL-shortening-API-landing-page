import React from 'react'

export default function Shortener() {
    return (
        <div className="absolute w-11/12 md:w-4/6 bg-dark-violet bg-no-repeat bg-cover bg-bg-mobile md:bg-bg-desktop left-2/4 -translate-x-1/2 -mt-20 md:-mt-28 lg:-mt-24 rounded-2xl md:rounded-md ">
            <div className="mx-6 md:mx-10 py-6 md:py-10 lg:flex">
            <input className="block w-full py-3 rounded-md pl-3" type="text" placeholder="Shorten a link here..." />
            <input className="block w-full lg:w-auto font-medium text-xl mx-auto bg-Cyan rounded-md text-white py-2 md:px-8 lg:ml-4 mt-4 md:mt-4 lg:mt-0" type="submit" value="Shorten It!" />
            </div>
        </div>
    )
}
