import { twMerge } from "tailwind-merge";
import OutlineArrowSvg from "./svg/OutlineArrowSvg";
import { useMediaQuery } from "react-responsive";

interface ButtonProps {
  className?: string;
}

const ButtonOutlineArrow: React.FC<ButtonProps> = (props: ButtonProps) => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const propValue = isLargeScreen ? "20" : "24";
  return (
    <button
      className={twMerge(
        "lg: lg:text-3.5 flex items-center justify-center gap-2 rounded-full px-7 py-3 outline outline-0.5 outline-monitoPrimary max-lg:w-full",
        props.className,
      )}
    >
      <span>View more</span> <OutlineArrowSvg size={propValue} />
    </button>
  );
};

export default ButtonOutlineArrow;
