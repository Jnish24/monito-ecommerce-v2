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
        "lg: flex items-center justify-center gap-[0.5rem] rounded-full px-[1.75rem] py-[0.75rem] outline outline-[2px] outline-monitoPrimary max-lg:w-full lg:text-[0.875rem]",
        props.className,
      )}
    >
      <span>View more</span> <OutlineArrowSvg size={propValue} />
    </button>
  );
};

export default ButtonOutlineArrow;
