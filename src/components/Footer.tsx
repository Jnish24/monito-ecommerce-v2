import monitoLogo from "../assets/svg/monito.svg";
import FooterButton from "./ui/FooterButton";
import FooterInput from "./ui/FooterInput";
import FooterMedia from "./ui/FooterMedia";
import FooterNavigation from "./ui/FooterNavigation";

const fontSize = {
  smallHeading: "text-xl",
  largeHeading: "md:text-2xl",
};

const Footer: React.FC = () => {
  return (
    <div className="lg:rounded-t-10 rounded-t-5 bg-footerBg pb-5 pt-10 lg:pb-10 lg:pt-20">
      <div className="px-mobile-padding md:container lg:px-desktop-padding">
        {/* Register Box */}
        <div className="flex items-center justify-center rounded-2xl bg-footerBox px-4 py-4 max-lg:flex-col lg:justify-between lg:px-8 lg:py-8">
          <p
            className={`font-bold text-whiteText ${fontSize.smallHeading} ${fontSize.largeHeading} max-lg:mb-4 lg:mr-5`}
          >
            Register Now So You Don't Miss Our Programs
          </p>
          <div className="flex w-full rounded-3.5 bg-whiteText px-3 py-3 max-lg:flex-1 max-lg:flex-col lg:basis-3/4 lg:justify-between lg:gap-3">
            <FooterInput />
            <FooterButton />
          </div>
        </div>
        {/* Navigation and Links*/}
        <div className="my-10 flex w-full max-lg:flex-col max-lg:gap-5 lg:justify-between">
          <FooterNavigation />
          <FooterMedia />
        </div>
        <hr className="mb-9 w-full border border-[#CCD1D2] lg:mb-10" />
        <div className="flex items-center justify-center max-lg:flex-col lg:justify-between">
          <a href="" className="max-lg:mb-8 lg:order-2">
            <img src={monitoLogo} alt="Monito Logo" className="" />
          </a>
          <div className="flex gap-3 text-xs text-grayText max-lg:mb-2 lg:order-3 lg:gap-8 lg:text-sm">
            <a href="">
              <span>Terms of Service</span>
            </a>
            <a href="">
              <span>Privacy Policy</span>
            </a>
          </div>
          <p className="text-2.5 text-grayText lg:order-1 lg:text-sm">
            ©{new Date().getFullYear()} Monito. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
