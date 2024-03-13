import React from "react";
import ButtonOutlineArrow from "./ui/ButtonOutlineArrow";
import CardAnimal from "./ui/CardAnimal";

const HomeAnimals: React.FC = () => {
  return (
    <div className="responsive-padding my-[2.5rem] flex flex-wrap items-center justify-between gap-[1.25rem] max-lg:flex-col lg:my-[3.75rem]">
      <div className="order-1 max-lg:self-start">
        <p className="max-lg:text-[0.875rem]">What's new?</p>
        <h2 className="text-[1.25rem] font-bold text-monitoPrimary lg:text-[1.5rem]">
          Take a look At Some Of Our Pets
        </h2>
      </div>
      <div className="order-2 grid w-full grid-cols-auto-fill justify-center gap-[0.75rem] lg:order-3 lg:gap-[1.75rem] ">
        <CardAnimal />
      </div>
      <ButtonOutlineArrow className="order-3 max-lg:w-full lg:order-2" />
    </div>
  );
};

export default HomeAnimals;
