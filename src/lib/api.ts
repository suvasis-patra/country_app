import axios from "axios";
import { BASE_URL } from "./constant";

export const getCountryData = axios.create({
  baseURL: BASE_URL,
});

export const getSingleCountry = async (countryName: string) => {
  try {
    const response = await getCountryData.get(
      `name/${countryName}?fullText=true`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getCountries(region: string | null) {
  console.log(region);
  try {
    if (region) {
      const response = await getCountryData.get(
        `/region/${region}?fields=name,flags,region,population,capital`
      );
      console.log(response.data);
      return response.data;
    } else {
      const response = await getCountryData.get(
        "/all?fields=name,flags,region,population,capital"
      );
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getCountriresByRegion(region: string) {
  try {
    const response = await getCountryData.get(`/region/${region}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getBorderCountries(countries: string[]) {
  try {
    const codes = countries.map((coutnry) => coutnry.toLowerCase()).join(",");
    const response = await getCountryData.get(
      `alpha?codes=${codes}&fields=name,flags,region,population,capital`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
