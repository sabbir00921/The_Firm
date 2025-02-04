import React from "react";
import Button from "./CommonComponent/button";
import bannerimg from "../assets/bannerimj.png"

const Banner = () => {
  return (
    <div className="bannerBG">
      <div className="container flex h-[580px]  items-center relative" >
        <div className="w-1/2 h-">
          <h1 className=" text-[48px] font-black font-nunito">Get Bussiness <span className=" inline-block">Solutions with TheFirm.</span></h1>
          <p className=" text-[18px] font-normal w-[400px] py-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <Button content={"Get in touch"} style={" bg-yellow_color"} />
        </div>
        <div className="bannerImg absolute top-0 right-[-5%] -z-10">
          <picture>
            <img className="h-[600px] m-0 p-0" src={bannerimg} alt="assets/bannerimj.png" />
          </picture>

        </div>
      </div>
    </div>
  );
};

export default Banner;
