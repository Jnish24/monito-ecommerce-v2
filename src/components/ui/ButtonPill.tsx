import { twMerge } from "tailwind-merge";

interface ButtonProps {
  description: string;
  className?: string;
}
const ButtonPill: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "text-nowrap rounded-full bg-monitoPrimary px-[2.75rem] py-[0.75rem] text-whiteText",
        props.className,
      )}
    >
      {props.description}
    </button>
  );
};

export default ButtonPill;
