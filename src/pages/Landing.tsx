import { useLocation } from "react-router-dom";
import { CountryCard, SearchBar, Wrapper } from "../components";
import SelectContinent from "../components/SelectContinent";
import { useGetCountries } from "../react-query/queries";
import SkeletonLoader from "../components/Skeleton";
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
  const { data, isLoading } = useGetCountries(region);

  console.log(location, region);

  return (
    <>
      <section className="w-full flex flex-col gap-4 md:flex-row px-6 md:px-12 py-8 md:justify-between md:items-center ">
        <SearchBar />
        <SelectContinent />
      </section>
      {isLoading ? (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
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
