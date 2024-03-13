import WomanMobile from "../assets/img/hero-woman-mobile.png";
import WomanDesktop from "../assets/img/hero-woman-desktop.png";
import ButtonPill from "./ui/ButtonPill";
import ButtonSolidArrow from "./ui/ButtonSolidArrow";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-b-[1.25rem] bg-gradient-to-br from-footerBg via-footerBg via-60% to-[#FFE7BA] lg:rounded-b-[2.50rem]">
        <div className="bg-hero-mobile bg-cover lg:bg-hero-desktop">
          <Navigation />
          <div className="responsive-padding">
            <div className="flex max-lg:flex-col max-lg:gap-[3rem]">
              <div className="flex flex-col justify-center max-lg:pt-[8.75rem] lg:basis-[40%]">
                <h1 className="font-xbold flex flex-col text-[3rem] text-monitoPrimary lg:text-[3.75rem]">
                  One More Friend{" "}
                  <span className="text-[1.75rem] font-bold lg:text-[3rem]">
                    Thousands More Fun!
                  </span>
                </h1>
                <p className="mb-[2rem] mt-[0.75rem] lg:mt-[1.5rem]">
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </p>
                <div className="flex flex-wrap gap-[1rem] max-xs:items-center max-xs:justify-center lg:gap-[1.25rem]">
                  <ButtonSolidArrow description="View Intro" />
                  <ButtonPill
                    description="Explore Now"
                    className=" px-[2.25rem]"
                  />
                </div>
              </div>
              <div className="flex flex-auto items-center justify-center">
                <img
                  src={WomanMobile}
                  alt="Corgi-and-Woman"
                  className="pointer-events-none w-[500px] lg:hidden"
                />
                <img
                  src={WomanDesktop}
                  alt="Corgi-and-Woman"
                  className="pointer-events-none max-lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
