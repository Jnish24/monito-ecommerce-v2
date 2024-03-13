import { twMerge } from "tailwind-merge";
import SolidArrowSvg from "./svg/SolidArrowSvg";

interface ButtonProps {
  description: string;
  className?: string;
}
const ButtonSolidArrow: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-between gap-[0.5rem] text-nowrap rounded-full px-[1.75rem] py-[0.75rem] text-monitoPrimary outline outline-[2px] outline-monitoPrimary",
        props.className,
      )}
    >
      <span>{props.description}</span>
      <SolidArrowSvg />
    </button>
  );
};

export default ButtonSolidArrow;
