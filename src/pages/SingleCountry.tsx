import { useParams } from "react-router-dom";
import { useGetSingleCountryData } from "../react-query/queries";
import ErrorPage from "./ErrorPage";
import { CountryFlag, CountryInfo, SingleCountrySkelton } from "../components";

const SingleCountry = () => {
  const { countryId } = useParams();
  const { data, isLoading, isError } = useGetSingleCountryData(
    countryId as string
  );
  console.log(data);
  return isLoading ? (
    <SingleCountrySkelton />
  ) : isError ? (
    <ErrorPage />
  ) : (
    <div className="px-6 md:px-12 py-8 md:py-12 flex flex-col gap-4 md:flex-row md:gap-6 w-full">
      <CountryFlag flag={data?.[0].flags} />
      <CountryInfo
        region={data?.[0].region}
        subregion={data?.[0].subregion}
        population={data?.[0].population}
        capital={data?.[0].capital[0]}
        tld={data?.[0].tld[0]}
        area={data?.[0].area}
        commonName={data?.[0].name.common}
        officialName={data?.[0].name.official}
        border={data?.[0].borders}
      />
    </div>
  );
};

export default SingleCountry;
