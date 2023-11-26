/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function HomePageCard({ title, img, link }) {
  return (
    <div className="h-[420px] bg-white z-30 m-3">
      <div className="text-lg xl:text-xl font-bold ml-4 mt-4">{title}</div>
      <div className="h-[300px] m-3">
        <img src={img} />
      </div>
      <div className="text-xs xl:text-sm text-blue-400 ml-4">{link}</div>
    </div>
  );
}

export default HomePageCard;
