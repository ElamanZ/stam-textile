import { useId } from "react";

type Props = {
  size?: number;
};

const ArrowLIcon = ({ size = 40 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29 20.0001H11.75M11.75 20.0001L18.65 13.1001M11.75 20.0001L18.65 26.9001"
        stroke="#2B2742"
        stroke-width="3.45"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowLIcon;
