import React from "react";
import Button from "./button";

const Card = ({carditems}) => {
    
  return (
    <div className="py-10">
      <div className=" w-[340px] p-3 flex flex-col gap-y-4 rounded-2xl shadow-2xl border-blue-200 border-1 cursor-pointer">
        {/* Image */}
        <div className="w-full h-[200px] ">
          <picture>
            <img
              src={carditems?.img}
              alt="Missing immage"
              className="object-cover w-full h-full rounded-2xl"
            />
          </picture>
        </div>
        {/* Image */}
        {/* Text */}
        <h1 className="text-[24px] font-bold">{carditems?.title}</h1>
        <p className="pb-4 border-b-gray-400 border-b-2 text-[17px] font-normal">
        {carditems?.description}{" "}
        </p>
        {/* Text */}
        {/* Profile */}
        <div className="flex justify-between items-center ">
          <div className=" flex items-center gap-1.5 text-[14px]">
            <div>
              <picture>
                <img
                  src={carditems?.profile_img}
                  alt=""
                  className="h-[30px] w-[30px] object-cover rounded-full"
                />
              </picture>
            </div>
            <h1>{carditems?.profile_name}</h1>
          </div>
          <div className="date text-[10px]">
            <p>{carditems?.date}</p>
          </div>
        </div>

        {/* Profile */}
        <div className="flex justify-center">
          <Button content={carditems?.button_text} style={"bg-red-400"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
