import React from "react";
import ButtonOutlineArrow from "./ui/ButtonOutlineArrow";
import CardHomeCatalogue from "./ui/CardHomeCatalogue";

interface CatalogueProps {
  smallHeader: string;
  header: string;
}

const HomeAnimals: React.FC<CatalogueProps> = (props: CatalogueProps) => {
  return (
    <div className="container">
      <div className="lg:my-15 px-mobile-padding lg:px-desktop-padding my-10 flex flex-wrap items-center justify-between gap-5 max-lg:flex-col">
        <div className="order-1 max-lg:self-start">
          <p className="max-lg:text-3.5">{props.smallHeader}</p>
          <h2 className="text-5 font-bold text-monitoPrimary lg:text-6">
            {props.header}
          </h2>
        </div>
        <div className="1sm:grid-cols-2 1xl:grid-cols-4 order-2 grid w-full gap-3 sm:grid-cols-3 lg:order-3 lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
          <CardHomeCatalogue />
        </div>
        <ButtonOutlineArrow className="order-3 max-lg:w-full lg:order-2" />
      </div>
    </div>
  );
};

export default HomeAnimals;
