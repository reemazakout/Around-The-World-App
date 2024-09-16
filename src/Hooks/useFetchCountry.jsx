import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchCountry = (countries) => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!countries) return;

    async function getCountries() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${countries}`,
        );
        setCountry(response.data[0]);
      } catch (error) {
        setError("Failed to fetch countries data");
        console.error("Error fetching countries:", error);
      }
    }

    getCountries();
  }, [countries]);

  return { country, error };
};
