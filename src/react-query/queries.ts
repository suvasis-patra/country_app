import { useQuery } from "@tanstack/react-query";
import { getSingleCountry } from "../lib/api";
import { QUERY_KEY } from "./queryKeys";

export const useGetSingleCountryData = (countryName: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_COUNTRY_BY_NAME, countryName],
    queryFn: () => getSingleCountry(countryName),
  });
};
