import { useId } from "react";

type Props = {
  size?: number;
};

const ArrowRIcon = ({ size = 40 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 20.0001H28.25M28.25 20.0001L21.35 13.1001M28.25 20.0001L21.35 26.9001"
        stroke="#2B2742"
        stroke-width="3.45"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRIcon;
