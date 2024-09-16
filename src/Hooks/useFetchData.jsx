import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    try {
      //https://restcountries.com/v3.1/all/name/{countryName}

      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
      setFilteredCountries(response.data);
    } catch (error) {
      setError("Failed to fetch countries data");
      console.error("Error fetching countries:", error);
    }
  }

  return { countries, filteredCountries, setFilteredCountries, error };
};
