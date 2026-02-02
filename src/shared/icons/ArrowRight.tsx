interface IconProps {
  width?: string | number;
  height?: string | number;
  color?: string;
  className?: string;
}

export const ArrowRight = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className,
}: IconProps) => (
  <svg
    className={className}
    width="48"
    height="24"
    viewBox="0 0 48 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 12.4002H42M42 12.4002C42 12.4002 37.5119 9.44867 36.6 7.00024M42 12.4002C42 12.4002 38.0324 15.1736 36.6 17.8002"
      stroke={color}
      width={width}
      height={height}
      fill={color}
      strokeLinecap="square"
    />
  </svg>
);
