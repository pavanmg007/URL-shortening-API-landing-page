import React from "react";
import { useState } from "react";
import logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <header className="header max-width py-2 my-5">
                <div className="flex items-center justify-between md:pt-8">
                    <div className="flex">
                        <img className="mr-10" src={logo} alt="logo" />
                        <nav className="hidden md:flex ">
                            <ul className="flex items-center">
                                <li className="mx-2"><button className="font-bold text-grayish-violet">Features</button></li>
                                <li className="mx-2"><button className="font-bold text-grayish-violet">Pricing</button></li>
                                <li className="mx-2"><button className="font-bold text-grayish-violet">Resources</button></li>
                            </ul>
                        </nav>
                    </div>
                    <ul className="hidden md:flex md:items-center">
                        <li><button className="mr-10 font-bold text-grayish-violet">Login</button></li>
                        <li><button className="btn-cta text-white font-semibold bg-Cyan hover:bg-cyan-200 py-2 px-6 rounded-full">Sign Up</button></li>
                    </ul>
                    {isOpen && (
                        <div className="absolute md:hidden text-white left-5 right-5 top-20 rounded-md py-5 bg-dark-violet">
                            <nav>
                                <ul className="flex flex-col items-center">
                                    <li className="my-2"><button className="font-bold">Features</button></li>
                                    <li className="my-2"><button className="font-bold">Pricing</button></li>
                                    <li className="my-2"><button className="font-bold">Resources</button></li>
                                </ul>
                            </nav>
                            <hr className="w-11/12 text-gray mx-auto opacity-30 my-4 md:hidden" />
                            <ul className="flex flex-col items-center my-5">
                                <li><button className="mb-4 font-bold">Login</button></li>
                                <li><button className="btn-cta text-white font-semibold bg-Cyan hover:bg-cyan-200 md:px-6 py-3 px-28 rounded-full">Sign Up</button></li>
                            </ul>
                        </div>
                    )}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-sm tracking-wide" >{isOpen ? <FontAwesomeIcon icon={solid('bars-staggered')} /> : <FontAwesomeIcon icon={solid('bars')} />}</button>
                </div>
            </header>
    );
}
