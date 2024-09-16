import SearchInput from "../../Componants/SearchInput/SearchInput";
import Regions from "../../Componants/Regions/Regions";
import CountryList from "../../Componants/CountryList/CountryList";
import { useFetchData } from "../../Hooks/useFetchData";

export default function Home() {
  const { filteredCountries, countries, setFilteredCountries } = useFetchData();

  return (
    <>
      <div className="min-h-screen dark:bg-black dark:text-gray-100">
        <div className="z-10 dark:text-gray-100">
          <div className="container flex flex-col items-center gap-4 p-4 sm:flex-row sm:items-center sm:justify-center md:gap-6 md:p-6 lg:gap-10 lg:p-8">
            <SearchInput
              className="w-full md:w-auto"
              countries={countries}
              filterCountriesList={setFilteredCountries}
            />
            <Regions
              className="w-full md:w-auto"
              countries={countries}
              filterCountriesList={setFilteredCountries}
            />
          </div>

          <CountryList data={filteredCountries} />
        </div>
      </div>
    </>
  );
}
