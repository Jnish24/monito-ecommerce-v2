import pomDog from "../../assets/img-temporary/Pomeranian-puppy.jpg";
import product from "../../assets/img-temporary/Pet-pillow.png";
import {
  useAnimalContext,
  useProductContext,
  AnimalCard,
  ProductCard,
} from "../../utils/context";

interface CardProps {
  isAnimal: boolean;
}

const CardAnimal: React.FC<CardProps> = (props: CardProps) => {
  const catalogueItems: (AnimalCard | ProductCard)[] = props.isAnimal
    ? useAnimalContext()
    : useProductContext();

  return (
    <>
      {catalogueItems.map((item, index) => (
        <div
          key={index}
          className="flex w-[11.5625rem] flex-col justify-self-center rounded-[0.75rem] shadow-xl lg:w-[17.5rem]"
        >
          <img
            src={props.isAnimal ? pomDog : product}
            alt="Pomeranian"
            className="mx-[0.5rem] mb-[0.75rem] mt-[0.5rem] h-[169px] w-[169px] rounded-[0.625rem] lg:h-[264px] lg:w-[264px]"
          />
          <div className="mx-[0.75rem] mb-[0.75rem] flex flex-col gap-[0.25rem] lg:mx-[1rem] lg:mb-[1.25rem]">
            <h3 className="font-bold text-neutral100 max-lg:text-[0.875rem]">
              {props.isAnimal
                ? `${(item as AnimalCard).id} - ${(item as AnimalCard).breed} ${(item as AnimalCard).size} ${(item as AnimalCard).color}`
                : (item as ProductCard).name}
            </h3>
            <div className="flex text-[0.75rem] text-neutral60 max-lg:flex-col max-lg:gap-[0.25rem]">
              <p className="">
                {props.isAnimal ? "Gene: " : "Product: "}
                <span className="font-bold">
                  {props.isAnimal
                    ? (item as AnimalCard).gender
                    : (item as ProductCard).type}
                </span>
              </p>
              <p className="lg:before:mx-[0.75rem] lg:before:content-['•']">
                {props.isAnimal ? "Age: " : "Size: "}
                <span className="font-bold">
                  {props.isAnimal
                    ? (item as AnimalCard).age
                    : `${(item as ProductCard).size}kg`}
                </span>
              </p>
            </div>
            <p className="font-bold lg:text-[0.875rem]">{item.price} PHP</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardAnimal;
