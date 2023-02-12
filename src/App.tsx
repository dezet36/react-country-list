import { log } from "console";
import React from "react";
import { CountryList } from "./components/CountryList/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./components/mappers/transformCountries";

export const App = () => {
  const Countries = transformCountries(countries);
  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countries={Countries} />
    </div>
  );
};
