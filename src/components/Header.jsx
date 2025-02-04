import Logo from "../assets/logo.png";
import Button from "./CommonComponent/button";
function Header() {
  // business logic layer
  const namItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Solutions",
    },
    {
      id: 3,
      name: "Cases",
    },
    {
      id: 4,
      name: "About Us",
    },
    {
      id: 5,
      name: "Blog",
    },
    {
      id: 6,
      name: "Contact Us",
    },
  ];

  // business logic layer
  return (
    <div className="container">
      <div className="flex items-center justify-between py-4.5">
        {/* Logo */}
        <picture>
          <img src={Logo} alt={Logo} />
        </picture>
        {/* Logo */}
        {/* namItem */}
        <div className="flex gap-3 items-center">
          <ul className="flex items-center gap-x-[40px] mr-[50px]">
            {namItems?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="font-nunito text-[18px] font-bold text-black_color navstyle"
                >
                  <a href="#">{item.name}</a>
                </li>
              );
            })}
          </ul>
          {/* namItem */}
          <Button content={"Get in touch"}  style = {"bg-yellow_color"}/>
          
        </div>
      </div>
    </div>
  );
}
export default Header;
