import React from "react";
import { CountryItem } from "../CountryItem/CountryItem";
import { Country } from "../../types/types";

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
};
