import { CountryDetails } from "../pages/Landing";
import { useGetBorderCountries } from "../react-query/queries";
import CountryCard from "./CountryCard";
import SkeletonLoader from "./Skeleton";

const NeighbourCountries = ({ countries }: { countries: string[] }) => {
  const { data, isLoading, isError } = useGetBorderCountries(countries);

  return (
    <section className="p-4">
      <h3 className="text-2xl font-bold mb-4">Neighbour Countries</h3>
      {isLoading ? (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </section>
      ) : isError ? (
        <div className="text-red-500 bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
          <p className="text-base font-medium">
            Oops! Something went wrong while fetching the neighboring countries.
          </p>
          <p className="text-sm">
            Please try again later or check your network connection.
          </p>
        </div>
      ) : data?.length ? (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.slice(0, 6).map((country: CountryDetails) => (
            <CountryCard
              key={country.name.official}
              flags={country.flags}
              region={country.region}
              population={country.population}
              capital={country.capital}
              name={country.name}
            />
          ))}
        </section>
      ) : (
        <p className="text-gray-500">No neighboring countries found.</p>
      )}
    </section>
  );
};

export default NeighbourCountries;
