import { Star } from "@/shared/icons/Star";
import React from "react";

type Props = {
  rating: number;
  size?: number;
};

export const StarsRating = ({ rating, size = 22 }: Props) => {
  const clampedValue = Math.max(0, Math.min(5, rating));

  return (
    <div style={{ display: "flex", gap: 6 }}>
      {[1, 2, 3, 4, 5].map((star) => {
        const fillPercent = Math.max(0, Math.min(1, clampedValue - (star - 1)));

        return (
          <div
            key={star}
            style={{
              position: "relative",
              width: size,
              height: size,
            }}
          >
            <Star size={size} color="rgba(246, 151, 63, 0.3)" />
            {fillPercent > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${fillPercent * 100}%`,
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Star size={size} color="#F6973F" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
