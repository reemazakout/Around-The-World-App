import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const Regions = ({ countries, filterCountriesList }) => {
  const handleRegionChange = (selectedOption) => {
    const region = selectedOption.value;

    const filteredCountries =
      region === "all regions"
        ? countries
        : countries.filter(
            (country) => country.region.toLowerCase() === region,
          );

    filterCountriesList(filteredCountries);
  };

  return (
    <div>
      <Select
        defaultValue={options[0]}
        onChange={handleRegionChange}
        options={options}
        classNames={{
          input: () => "dark:!text-gray-100",
          singleValue: () => "dark:text-gray-100",
          control: (state) =>
            `flex h-12 items-center justify-between gap-12 rounded-md pl-4 pr-2 md:h-14 border border-gray-300 ${
              state.isFocused
                ? "!ring-0 !outline-none shadow-lg border-gray-800"
                : "shadow-xl border-gray-300"
            } dark:bg-gray-800 dark:text-gray-100`,
          indicatorSeparator: () => "hidden",
          option: () => "hover:!text-gray-800",
          menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
        }}
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? "#374151!important" : "#d1d5db", // gray-800 when focused, gray-300 otherwise
            boxShadow: state.isFocused
              ? "0 0 5px rgba(0, 0, 0, 0.1)"
              : "0 0 10px rgba(0, 0, 0, 0.1)", // apply shadow
          }),
          container: (provided) => ({
            ...provided,
            width: "222px",
          }),
        }}
      />
    </div>
  );
};

export default Regions;
