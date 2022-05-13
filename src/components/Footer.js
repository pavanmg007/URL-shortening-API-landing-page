import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/logo-white.svg"


export default function Footer() {
    return (
        <>
            <footer className="bg-stone-800 text-center md:text-left py-10 lg:py-20">
                <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-5">
                    <article className="mx-auto"><img src={logo} alt="" /></article>
                    <article className="mx-auto">
                        <h3 className="text-white text-lg font-semibold tracking-wide mb-4">Features</h3>
                        <ul>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Link Shortening</button></li>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Branded Links</button></li>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Analytics</button></li>
                        </ul>
                    </article>
                    <article className="mx-auto">
                        <h3 className="text-white text-lg font-semibold tracking-wide mb-4">Resources</h3>
                        <ul>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Blog</button></li>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Developers</button></li>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Support</button></li>
                        </ul>
                    </article>
                    <article className="mx-auto">
                        <h3 className="text-white text-lg font-semibold tracking-wide mb-4">Company</h3>
                        <ul>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">About</button></li>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Our Team</button></li>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Careers</button></li>
                            <li><button className="text-zinc-300 tracking-wide text-sm mt-2 hover:text-teal-500">Contact</button></li>
                        </ul>
                    </article>
                    <article className="mx-auto mt-2">
                        <ul className="flex items-center">
                            <li><img src={facebook} alt="facebook" /></li>
                            <li className="mx-4"><img src={twitter} alt="twitter" /></li>
                            <li><img src={pinterest} alt="pinterest" /></li>
                            <li className="mx-4"><img src={instagram} alt="instagram" /></li>
                        </ul>
                    </article>
                </div>
            </footer>
        </>
    );
}
