import logo from "../assets/svg/monito.svg";
import hamburger from "../assets/svg/hamburger.svg";
import { useNavContext } from "../utils/context";
import ButtonPill from "./ui/ButtonPill";

const Navigation = () => {
  const navItems = useNavContext();

  return (
    <>
      <div className="w-full">
        <nav className="xl:px-desktop-padding px-mobile-padding py-3 lg:px-10 lg:py-[1.875rem]">
          <div className="relative flex items-center justify-center lg:justify-between">
            <button className="absolute left-0 lg:hidden">
              <img src={hamburger} alt="Menu" />
            </button>
            <div className="flex items-center justify-between">
              <a href="" className="lg:pr-12">
                <img
                  src={logo}
                  alt="Monito-Logo"
                  className="max-lg:h-8 max-lg:w-[92px]"
                />
              </a>
              <ul className="flex list-none items-center justify-center gap-12 font-bold text-monitoPrimary max-lg:hidden">
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
                className="px-7 py-3 font-bold text-whiteText max-lg:hidden"
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
