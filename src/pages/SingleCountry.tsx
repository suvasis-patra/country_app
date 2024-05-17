import { useParams } from "react-router-dom";
import { useGetSingleCountryData } from "../react-query/queries";

const SingleCountry = () => {
  const { countryId } = useParams();
  const { data, isLoading, error } = useGetSingleCountryData(
    countryId as string
  );
  console.log(data);
  return <div>SingleCountry</div>;
};

export default SingleCountry;
