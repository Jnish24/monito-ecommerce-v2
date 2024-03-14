import pomDog from "../../assets/img-temporary/Pomeranian-puppy.jpg";
import { useAnimalContext, useProductContext } from "../../utils/context";

const CardAnimal: React.FC = () => {
  const animalItems = useAnimalContext();
  const productItems = useProductContext();

  return (
    <>
      {animalItems.map((item) => (
        <div
          key={item.id}
          className="flex w-[11.5625rem] flex-col justify-self-center rounded-[0.75rem] shadow-xl lg:w-[17.5rem]"
        >
          <img
            src={pomDog}
            alt="Pomeranian"
            className="mx-[0.5rem] mb-[0.75rem] mt-[0.5rem] h-[169px] w-[169px] rounded-[0.625rem] lg:h-[264px] lg:w-[264px]"
          />
          <div className="mx-[0.75rem] mb-[0.75rem] flex flex-col gap-[0.25rem] lg:mx-[1rem] lg:mb-[1.25rem]">
            <h3 className="font-bold text-neutral100 max-lg:text-[0.875rem]">
              {item.id} - {item.breed} {item.size} {item.color}
            </h3>
            <div className="flex text-[0.75rem] text-neutral60 max-lg:flex-col max-lg:gap-[0.25rem]">
              <p className="">
                Gene: <span className="font-bold">{item.gender}</span>
              </p>
              <p className="lg:before:mx-[0.75rem] lg:before:content-['•']">
                Age: <span className="font-bold">{item.age}</span>
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
