import React from "react";

export default function Shortenedurl(props) {
  const { sendlinks, btntext } = props;
  return (
    <>
      {sendlinks.map((data) => {
        return (
          <div
            className="w-11/12 mt-4 mx-5 bg-white rounded-md md:flex md:py-3 md:mx-auto md:w-4/6 justify-between"
            key={data.code}
          >
            <a href={data.original_link} className="block mx-5 py-3">
              {data.original_link}
            </a>
            <hr className="opacity-30 md:hidden" />
            <div className="md:flex">
              <a href={data.full_short_link} className="block mx-5 py-3 text-Cyan">
                {data.full_short_link}
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(data.full_short_link);
                  console.log(`copied ${data.full_short_link}`);
                }}
                className="w-11/12 mx-5 mb-4 md:mb-0 text-white font-semibold bg-Cyan hover:bg-cyan-200 md:px-6 py-3 px-28 rounded-md md:w-auto"
              >
                {btntext}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
