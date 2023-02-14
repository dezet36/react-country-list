import React from "react";
import { Badge } from "../Badge/Badge";
import { Country } from "../../types/types";
import { Color } from "../../ui/colors";

interface CountryItemProps {
  country: Country;
}

export const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: CountryItemProps) => {
  return (
    <li className="row row-cols-6 align-items-center border">
      <img src={flag} alt={name} />
      <p className="col">{name}</p>
      <p className="col">{capital}</p>
      <p className="col">{region}</p>
      <Badge color={Color.PRIMARY} value={area} label="area" />
      <Badge color={Color.SECOMDARY} value={population} label="population" />
    </li>
  );
};
