import React from "react";
import { CountryItem } from "../CountryItem/CountryItem";
import { Country } from "../../types/types";

interface CountriesProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountriesProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
};
