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
        "outline-0.5 flex items-center justify-between gap-2 text-nowrap rounded-full px-7 py-3 text-monitoPrimary outline outline-monitoPrimary",
        props.className,
      )}
    >
      <span>{props.description}</span>
      <SolidArrowSvg />
    </button>
  );
};

export default ButtonSolidArrow;
