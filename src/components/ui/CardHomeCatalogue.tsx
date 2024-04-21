import pomDog from "../../assets/img-temporary/Pomeranian-puppy.jpg";
import { useAnimalContext } from "../../utils/context";

const CardAnimal: React.FC = () => {
  const animalData = useAnimalContext();
  return (
    <>
      {animalData.map((item, index) => (
        <div
          key={index}
          className="rounded-3 flex w-[11.5625rem] flex-col justify-self-center shadow-lg lg:w-[17.5rem]"
        >
          <img
            src={pomDog}
            alt="Pomeranian"
            className="rounded-2.5 mx-2 mb-3 mt-2 h-[169px] w-[169px] lg:h-[264px] lg:w-[264px]"
          />
          <div className="mx-3 mb-3 flex flex-col gap-1 lg:mx-4 lg:mb-5">
            <h3 className="max-lg:text-3.5 font-bold text-neutral100">
              {`${item.id} - ${item.breed} ${item.size} ${item.color}`}
            </h3>
            <div className="text-3 flex text-neutral60 max-lg:flex-col max-lg:gap-1">
              <p className="">
                {"Gene: "}
                <span className="font-bold">{item.gender}</span>
              </p>
              <p className="lg:before:mx-3 lg:before:content-['•']">
                {"Age: "}
                <span className="font-bold">{item.age}</span>
              </p>
            </div>
            <p className="lg:text-3.5 font-bold">{item.price} PHP</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardAnimal;
