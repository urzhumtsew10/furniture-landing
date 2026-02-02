type Props = {
  text: string;
  className?: string;
};

export const SectionTitle = ({ text, className = "" }: Props) => {
  return (
    <h3 className={`text-dark-black text-[32px] md:text-[42px] font-extrabold ${className}`}>
      {text}
    </h3>
  );
};
