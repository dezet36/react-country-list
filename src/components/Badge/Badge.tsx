import React from "react";
import { Color } from "../../ui/colors";
import { BadgeLabel } from "../../types/types";

interface BadgeProps {
  label: BadgeLabel;
  value: number;
  color: Color;
}

export const Badge = ({ color, value, label }: BadgeProps) => {
  return (
    <span className={`badge text-bg-${color}`}>
      {label}:{value}
    </span>
  );
};
