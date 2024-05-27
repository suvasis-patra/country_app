import { CountryCard, SearchBar, Wrappper } from "../components";
import SelectContinent from "../components/SelectContinent";
import { useGetCountries } from "../react-query/queries";
export interface Country {
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
  const { data, isLoading, isError } = useGetCountries();
  console.log(data);
  return (
    <>
      <section className="w-full flex flex-col gap-4 md:flex-row px-6 md:px-12 py-8 md:justify-between md:items-center ">
        <SearchBar />
        <SelectContinent />
      </section>
      <Wrappper>
        {data?.map((country: Country) => (
          <CountryCard
            key={country.name.official}
            flags={country.flags}
            region={country.region}
            population={country.population}
            capital={country.capital}
            name={country.name}
          />
        ))}
      </Wrappper>
    </>
  );
};

export default Landing;
