import { useLocation } from "react-router-dom";

import Filters from "../components/Filters";
import SkeletonLoader from "../components/Skeleton";
import { useGetCountries } from "../react-query/queries";
import SelectContinent from "../components/SelectContinent";
import { CountryCard, SearchBar, Wrapper } from "../components";
export interface CountryDetails {
  name: {
    common: string;
    official: string;
    nativeName: string;
  };
  population: string;
  region: string;
  capital: Array<string>;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
const Landing = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const region = params.get("region");
  const lang = params.get("lang");
  const currency = params.get("currency");
  const subregion = params.get("subregion");
  console.log(params, "lang", lang, currency);
  const { data, isLoading } = useGetCountries({
    region,
    lang,
    currency,
    subregion,
  });

  console.log(location, region);

  return (
    <>
      <section className="w-full flex flex-col gap-4 md:flex-row px-6 md:px-12 py-8 md:justify-between md:items-center ">
        <SearchBar />
        <SelectContinent />
      </section>
      <Filters params={{ currency, lang, subregion }} />
      {isLoading ? (
        <section className="px-6 md:px-12 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </section>
      ) : (
        <Wrapper>
          {data?.map((country: CountryDetails) => (
            <CountryCard
              key={country.name.official}
              flags={country.flags}
              region={country.region}
              population={country.population}
              capital={country.capital}
              name={country.name}
            />
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default Landing;
