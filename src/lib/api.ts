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

export async function getCountries() {
  try {
    const response = await getCountryData.get("/all");
    console.log(response.data);
    return response.data;
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
