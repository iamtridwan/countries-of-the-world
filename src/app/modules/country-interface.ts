import { Currency } from "./currency";
import { Flags } from "./flags";
import { Lang } from "./lang";

export interface CountryInterface {
  flags: Flags;
  nativeName:string;
  name: string;
  population: number;
  topLevelDomain: string;
  subregion: string;
  region: string;
  capital: string;
  currencies: Currency[];
  languages: Lang[];
  borders: string[];
}
