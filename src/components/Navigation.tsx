import logo from "../assets/svg/monito.svg";
import hamburger from "../assets/svg/hamburger.svg";
import { useNavContext } from "../utils/context";
import ButtonPill from "./ui/ButtonPill";

const Navigation = () => {
  const navItems = useNavContext();

  return (
    <>
      <div className="w-full">
        <nav className="responsive-padding py-[0.75rem] lg:py-[1.875rem]">
          <div className="relative flex items-center justify-center lg:justify-between">
            <button className="absolute left-0 lg:hidden">
              <img src={hamburger} alt="Menu" />
            </button>
            <div className="flex items-center justify-between">
              <a href="" className="lg:pr-[3rem]">
                <img
                  src={logo}
                  alt="Monito-Logo"
                  className="max-lg:h-[32px] max-lg:w-[92px]"
                />
              </a>
              <ul className="flex list-none items-center justify-center gap-[3rem] max-lg:hidden">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href="">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ButtonPill
                description="Join the community"
                className="py-[0.75rem]max-lg:hidden px-[1.75rem] font-bold text-whiteText max-lg:hidden"
              />
            </div>
          </div>
        </nav>
      </div>

      {/* <nav className="sticky top-0 py-[2rem] lg:px-[9%]">
        <div className="flex flex-wrap items-center justify-between">
          <button className="md:hidden ">
            <img className="" src={hamburger} alt="dropdown"></img>
          </button>

          <a href="" className="">
            <img className="w-24 md:w-28" src={logo} alt="monito-logo" />
          </a>

          <div className="w-full max-md:order-last md:flex md:w-auto md:items-center md:justify-center">
            <ul className="list-none md:flex md:space-x-3">
              {listItems.map((item) => (
                <li>
                  <a key={item.id} className="block" href="">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button className="md:hidden">
            <img className="" src={search} alt="dropdown"></img>
          </button>
        </div>
      </nav> */}

      {/* <nav>
        <div className="flex flex-wrap justify-between items-center py-4">
          <button className="order-1 md:hidden ">
            <img className="" src={hamburger} alt="dropdown"></img>
          </button>

          <a href="" className="order-2">
            <img className="w-24 md:w-28" src={logo} alt="monito-logo" />
          </a>

          <div className="order-last md:order-3 md:flex md:justify-center md:items-center">
            <ul className="md:flex md:space-x-3">
              {listItems.map((item) => (
                <li>
                  <a key={item.id} className="block" href="">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button className="order-4 md:hidden">
            <img className="" src={search} alt="dropdown"></img>
          </button>
        </div>
      </nav> */}
    </>
  );
};

export default Navigation;
