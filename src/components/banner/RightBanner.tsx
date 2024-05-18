import React from "react";
import Image from "next/image";
import "./banner.css";

const RightBanner = () => {
  return (
    <div className="">
      <Image
        className="profilePic"
        src="/imgs/profilePic.jpeg"
        alt="bannerImg"
        layout="fill" // Adjust as needed
        objectFit="cover" // Adjust as needed
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
