export interface CountryApi {
  flags: CountryFlagApi;
  name: CountryNameApi;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface CountryFlagApi {
  png: string;
  svg: string;
}
export interface NativeNameApi {
  [name: string]: CountrySpaApi | undefined;
}

export interface CountryNameApi {
  common: string;
  official: string;
  nativeName: NativeNameApi;
}

export interface CountrySpaApi {
  official?: string;
  common?: string;
}

export interface Country {
  flag: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

export type BadgeLabel = "area" | "population";
