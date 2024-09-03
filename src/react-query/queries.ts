import { useQuery } from "@tanstack/react-query";
import { getBorderCountries, getCountries, getSingleCountry } from "../lib/api";
import { QUERY_KEY } from "./queryKeys";

export const useGetSingleCountryData = (countryName: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_COUNTRY_BY_NAME, countryName],
    queryFn: () => getSingleCountry(countryName),
  });
};

export const useGetCountries = (region: string | null) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_COUNTRIES, region],
    queryFn: () => getCountries(region),
  });
};

export const useGetBorderCountries = (countries: string[]) => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_NEIGHBOUR_COUNTRIES],
    queryFn: () => getBorderCountries(countries),
  });
};
