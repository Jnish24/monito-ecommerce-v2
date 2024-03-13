import bannerMobile from "../assets/img/banner-woman-mobile.png";
import ButtonPill from "./ui/ButtonPill";
import ButtonSolidArrow from "./ui/ButtonSolidArrow";

import anotherBanner from "../assets/img/hero-woman-desktop.png";

const Banner = () => {
  return (
    <div className="overflow-hidden rounded-[1.25rem] bg-monitoPrimary bg-banner-mobile bg-cover bg-center lg:bg-banner-desktop">
      <div className="responsive-padding flex items-center justify-center max-lg:flex-col max-lg:pt-[1.75rem] lg:justify-between">
        <div className="order-1 flex flex-col justify-center lg:order-2 lg:basis-[50%] lg:items-end">
          <h1 className="font-xbold flex flex-col text-center text-[2.25rem] text-monitoPrimary lg:text-end lg:text-[3.25rem]">
            One More Friend{" "}
            <span className="text-[1.5rem] font-bold lg:text-[2.25rem]">
              Thousands More Fun!
            </span>
          </h1>
          <p className="mt-[0.75rem] text-center text-[0.75rem] text-neutral80 md:text-[1rem] lg:mt-[0.5rem] lg:text-end lg:text-[1rem]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="mt-[1.75rem] flex items-center justify-center gap-[1rem] max-lg:mb-[1.5rem] max-[379px]:flex-col lg:mt-[1.5rem] lg:gap-[1.25rem]">
            <ButtonPill
              description="Explore Now"
              className="px-[2.25rem] lg:outline lg:outline-[2px] lg:outline-footerBg"
            />{" "}
            <ButtonSolidArrow
              description="View Intro"
              className=" max-sm:bg-footerBg"
            />
          </div>
        </div>
        <div className="order-2 flex flex-auto justify-center lg:order-1">
          <img src={bannerMobile} alt="" className="lg:hidden" />
          <img src={anotherBanner} alt="" className="max-lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
