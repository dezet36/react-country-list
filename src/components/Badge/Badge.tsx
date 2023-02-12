import React from "react";
import { Color } from "../../ui/colors";

interface BadgeProps {
  titleinformation: string;
  countryinformation: number;
  color: Color;
}

export const Badge = ({
  color,
  countryinformation,
  titleinformation,
}: BadgeProps) => {
  console.log(countryinformation);
  return (
    <span className={`badge text-bg-${color}`}>
      {titleinformation}:{countryinformation}
    </span>
  );
};
