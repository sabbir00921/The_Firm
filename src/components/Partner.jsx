import React from "react";
import Heading from "./CommonComponent/Heading";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaEthernet } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFirefoxBrowser } from "react-icons/fa";
import { BsBrowserSafari } from "react-icons/bs";
import { SiAmazonwebservices } from "react-icons/si";
import { SiInternetcomputer } from "react-icons/si";
import Slider from "react-slick";

const Partner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  const item = [
    {
      id: 1,
      icon: <TfiMicrosoftAlt />,
    },
    {
      id: 2,
      icon: <FaEthernet />,
    },
    {
      id: 3,
      icon: <FcGoogle />,
    },
    {
      id: 4,
      icon: <FaFirefoxBrowser />,
    },
    {
      id: 5,
      icon: <BsBrowserSafari />,
    },
    {
      id: 6,
      icon: <SiAmazonwebservices />,
    },
    {
      id: 7,
      icon: <SiInternetcomputer />,
    },
];

  return (
    <div className="container py-[100px]">
      <div className=" flex items-center justify-center">
        <Heading title={"Our Partner"} />
      </div>
      <div className="mt-[50px]">
      <Slider {...settings}>
        {item.map((item) => (
          <div className=" px-4">
            <div className=" h-[120px] flex items-center justify-center bg-gray_color rounded-2xl cursor-pointer hover:bg-gray-200">
              <span className=" text-[45px]">
                {item.icon}
              </span>
            </div>
          </div>
        ))}
      </Slider>
      </div> 
    </div>
  );
};

export default Partner;
