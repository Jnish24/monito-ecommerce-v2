interface ArrowProps {
  size: string;
}
const OutlineArrowSvg: React.FC<ArrowProps> = (props: ArrowProps) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
        stroke="#003459"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OutlineArrowSvg;
