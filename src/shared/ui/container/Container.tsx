import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className = "" }: Props) => {
  return (
    <div className={`w-full max-w-[1920px] px-[12px] lg:px-[80px] ${className}`}>{children}</div>
  );
};
