import React from "react";
import { Badge } from "../Badge/Badge";
import { Country } from "../../types/types";
import { Color } from "../../ui/colors";

interface ItemProps {
  country: Country;
}

export const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: ItemProps) => {
  return (
    <li className="row row-cols-6 align-items-center border">
      <img src={flag} alt="#" />
      <p className="col">{name}</p>
      <p className="col">{capital}</p>
      <p className="col">{region}</p>
      <Badge
        color={Color.PRIMARY}
        countryinformation={area}
        titleinformation={"area"}
      />
      <Badge
        color={Color.SECOMDARY}
        countryinformation={population}
        titleinformation={"population"}
      />
    </li>
  );
};
