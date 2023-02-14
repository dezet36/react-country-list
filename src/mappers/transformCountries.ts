import { CountryApi } from "../types/types";
import { Country } from "../types/types";

export const transformCountries = (countries: CountryApi[]): Country[] => {
  return countries.map(
    ({ name, capital, flags, region, area, population }) => ({
      name: name.common,
      capital: capital[0],
      population: population,
      area: area,
      region: region,
      flag: flags.svg,
    })
  );
};
