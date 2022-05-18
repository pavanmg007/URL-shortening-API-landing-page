import React, { useState } from "react";
// https://api.shrtco.de/v2/shorten?url={url}
export default function Shortener() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      document.querySelector(".error").innerText = "Please enter Valid URL";
    } else {
      const shortenLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();
        console.log(data.result);
        setLinks(data.result);
        setText("");
      };
      shortenLink();
    }
  };
  return (
    <>
      <div className="absolute w-11/12 md:w-4/6 bg-dark-violet bg-no-repeat bg-cover bg-bg-mobile md:bg-bg-desktop left-2/4 -translate-x-1/2 -mt-20 md:-mt-28 lg:-mt-24 rounded-2xl md:rounded-md ">
        <div className="relative mx-6 md:mx-10 py-6 md:py-10 lg:flex">
          <form className="lg:flex lg:w-full" onSubmit={handleSubmit}>
            <input
              className="block w-full lg:w-4/5 py-3 rounded-md pl-3"
              type="url"
              placeholder="Shorten a link here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="block w-full lg:w-auto mx-auto bg-Cyan rounded-md text-white py-2 md:px-8 lg:ml-4 mt-4 md:mt-4 lg:mt-0"
              type="submit"
              onClick={handleSubmit}
            >
              Shorten It!
            </button>
          </form>
          <p className="error absolute bottom-16 md:bottom-20 lg:bottom-3 text-sm italic text-red-500"></p>
        </div>
      </div>
    </>
  );
}
