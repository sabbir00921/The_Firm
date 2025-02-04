import React from "react";

const Heading = ({ title }) => {
  const titleArr = title?.split(" ");
  const titlelast = titleArr[titleArr.length - 1];
  const tailefirst = title.replace(titlelast, "");

  return (
    <h1 className=" text-[44px] text-black_color font-black  content-center">
      {tailefirst || "Frist missing"}{" "}
      <span className="navstyle cursor-pointer">
        {titlelast || "Last missing"}
      </span>
    </h1>
  );
};

export default Heading;
