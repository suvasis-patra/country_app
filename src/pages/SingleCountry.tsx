import { useParams } from "react-router-dom";
import { useGetSingleCountryData } from "../react-query/queries";
import ErrorPage from "./ErrorPage";
import { CountryFlag, CountryInfo, SingleCountrySkelton } from "../components";
import NeighbourCountries from "../components/NeighbourCountries";
import { Country } from "../lib/types";

const SingleCountry = () => {
  const { countryId } = useParams();
  const { data, isLoading, isError } = useGetSingleCountryData(
    countryId as string
  );

  if (isLoading) return <SingleCountrySkelton />;
  if (isError) return <ErrorPage />;

  const country: Country = data?.[0];

  return (
    <div className="min-h-screen max-w-[1080px] mx-auto  p-6 md:p-12 flex flex-col items-center">
      <div className="w-full bg-white p-6 md:p-8 flex flex-col md:flex-row gap-8 md:justify-between">
        <div className="flex-1">
          <CountryFlag flag={country?.flags} />
        </div>
        <div className="flex-1">
          <CountryInfo
            region={country?.region}
            subregion={country?.subregion}
            population={country?.population}
            capital={country?.capital[0]}
            tld={country?.tld[0]}
            area={country?.area}
            commonName={country?.name.common}
            officialName={country?.name.official}
            border={country?.borders}
          />
        </div>
      </div>
      {country?.borders && country?.borders.length && (
        <NeighbourCountries countries={country.borders} />
      )}
    </div>
  );
};

export default SingleCountry;
