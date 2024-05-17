import { useParams } from "react-router-dom";
import { useGetSingleCountryData } from "../react-query/queries";
import ErrorPage from "./ErrorPage";
import { SingleCountrySkelton } from "../components";

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
    <div>SingleCountry</div>
  );
};

export default SingleCountry;
