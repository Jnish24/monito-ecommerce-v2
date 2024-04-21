import bannerDesktop from "../assets/img/banner-woman.png";
import ButtonPill from "./ui/ButtonPill";
import ButtonSolidArrow from "./ui/ButtonSolidArrow";

const Banner = () => {
  return (
    <div className="overflow-hidden rounded-5 bg-monitoPrimary">
      <div className="bg-banner-mobile bg-cover bg-center bg-no-repeat lg:bg-banner-desktop [@media(min-width:1500px)]:bg-contain">
        <div className="md:container">
          <div className="flex items-center justify-center px-mobile-padding max-lg:flex-col max-lg:pt-7 lg:justify-between lg:px-desktop-padding">
            <div className="order-1 flex flex-col justify-center lg:order-2 lg:basis-[50%] lg:items-end">
              <h1 className="heading flex flex-col text-center text-monitoPrimary lg:text-end">
                One More Friend{" "}
                <span className="sub-heading">Thousands More Fun!</span>
              </h1>
              <p className="max-lg:mx-13 mt-3 text-center text-neutral80 lg:mt-2 lg:text-end">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="mt-7 flex items-center justify-center gap-4 max-lg:mb-6 max-[379px]:flex-col lg:mt-6 lg:gap-5 2xl:mr-12">
                <ButtonPill
                  description="Explore Now"
                  className="px-9 outline outline-0.5 outline-footerBg"
                />{" "}
                <ButtonSolidArrow
                  description="View Intro"
                  className=" max-sm:bg-footerBg"
                />
              </div>
            </div>
            <div className="order-2 flex flex-auto justify-center lg:order-1">
              <img src={bannerDesktop} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
