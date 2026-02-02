import React from "react";
import { FEATURE_CARD_LIST } from "./constants";
import { FeatureCard } from "./feature-card/FeatureCard";

export const FeatureSection = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">
      {FEATURE_CARD_LIST.map(({ title, text, link }, index) => (
        <FeatureCard key={index} title={title} text={text} link={link} />
      ))}
    </ul>
  );
};
