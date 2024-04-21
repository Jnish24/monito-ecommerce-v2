import WomanMobile from "../assets/img/hero-woman-mobile.png";
import WomanDesktop from "../assets/img/hero-woman-desktop.png";
import ButtonPill from "./ui/ButtonPill";
import ButtonSolidArrow from "./ui/ButtonSolidArrow";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-b-5 bg-gradient-to-br from-footerBg via-footerBg via-60% to-[#FFE7BA] lg:rounded-b-[2.50rem]">
        <div className="bg-hero-mobile bg-cover bg-center bg-no-repeat lg:bg-hero-desktop [@media(min-width:1500px)]:bg-contain">
          <div className="md:container">
            <Navigation />
            <div className="px-mobile-padding lg:px-desktop-padding">
              <div className="flex max-lg:flex-col max-lg:gap-6">
                <div className="flex flex-col justify-center max-lg:pt-6 lg:mt-5 lg:basis-[40%] lg:self-start">
                  <h1 className="heading flex flex-col text-monitoPrimary">
                    One More Friend{" "}
                    <span className="sub-heading">Thousands More Fun!</span>
                  </h1>
                  <p className="mb-8 mt-3 lg:mt-6">
                    Having a pet means you have more joy, a new friend, a happy
                    person who will always be with you to have fun. We have 200+
                    different pets that can meet your needs!
                  </p>
                  <div className="flex flex-wrap gap-4 lg:gap-5">
                    <ButtonSolidArrow description="View Intro" />
                    <ButtonPill description="Explore Now" className=" px-9" />
                  </div>
                </div>
                <div className="flex flex-auto items-center justify-center">
                  <img
                    src={WomanDesktop}
                    alt="Corgi-and-Woman"
                    className="pointer-events-none w-auto max-lg:hidden"
                  />
                  <img
                    src={WomanMobile}
                    alt="Corgi-and-Woman"
                    className="pointer-events-none w-[500px] lg:hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
