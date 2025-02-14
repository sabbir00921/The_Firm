import React from "react";
import Card from "./CommonComponent/card";
import Heading from "./CommonComponent/Heading";

const Blog = () => {
    const cartContent =[
        {
            img:"https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Lorem Ipsum ",
            description: `Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `,
            profile_img: "https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=600",
            profile_name: "Alex Liones",
            date: "28,Aug 2020, 09:48:00",
            button_text:"Read more"
        },

        {
            img:"https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Lorem Ipsum ",
            description: `Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `,
            profile_img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600",
            profile_name: "Alex Liones",
            date: "28,Aug 2020, 09:48:00",
            button_text:"Read no"
        },

        {
            img:"https://images.pexels.com/photos/547557/pexels-photo-547557.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Lorem Ipsum ",
            description: `Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `,
            profile_img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            profile_name: "Alex Liones",
            date: "28,Aug 2020, 09:48:00",
            button_text:"Read now"
        },

        {
            img:"https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Lorem Ipsum ",
            description: `Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `,
            profile_img: "https://images.pexels.com/photos/3157058/pexels-photo-3157058.jpeg?auto=compress&cs=tinysrgb&w=600",
            profile_name: "Alex Liones",
            date: "28,Aug 2020, 09:48:00",
            button_text:"Read now"
        },

        {
            img:"https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Lorem Ipsum ",
            description: `Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `,
            profile_img: "https://images.pexels.com/photos/159767/baby-cute-moe-brilliant-159767.jpeg?auto=compress&cs=tinysrgb&w=600",
            profile_name: "Alex Liones",
            date: "28,Aug 2020, 09:48:00",
            button_text:"Read now"
        },

        {
            img:"https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Lorem Ipsum ",
            description: `Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen. `,
            profile_img: "https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600",
            profile_name: "Alex Liones",
            date: "28,Aug 2020, 09:48:00",
            button_text:"Read now"
        }
    ]
    console.log(cartContent);
    
  return (
    <div className="container">
      {/* Heading */}

      <div className="flex justify-center pb-6">
        <Heading title={"Our Blogs"} />
      </div>
      {/* Heading */}
      <div className=" flex justify-between items-center flex-wrap">
        {cartContent?.map((item, index)=>(
            < Card carditems={{...item, id: index + 1 }} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
