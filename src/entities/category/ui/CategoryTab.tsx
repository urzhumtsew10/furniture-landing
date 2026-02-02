import React from "react";
import { motion } from "framer-motion";
import { ICategory } from "../model/types";

type Props = {
  onChangeCategory: (id: number) => void;
} & ICategory;

export const CategoryTab = ({ id, text, active, onChangeCategory }: Props) => {
  return (
    <div
      key={id}
      className="relative z-10 py-2 px-5 cursor-pointer rounded-[32px]"
      onClick={() => onChangeCategory(id)}
    >
      {active && (
        <motion.div
          layoutId="activeBackground"
          className="absolute inset-0 bg-white rounded-[32px]"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}

      <p
        className={`text-dark-gray text-lg ${active ? "font-normal" : "font-light"} relative z-20`}
      >
        {text}
      </p>
    </div>
  );
};
