import React from "react";

const Button = ({content, style}) => {
    
  return (
    <button className = {`px-5 py-2.5  rounded font-nunito font-bold text-lg text-white_color hover:opacity-70 cursor-pointer transition hover:bg-blue-600 ${style}` }>

      {content? content:"Missing "}
    </button>
  );
};

export default Button; 
