export default function SearchInput({ countries, filterCountriesList }) {
  const handleSearchChange = (event) => {
    event.preventDefault();
    const searchQuery = event.target.value;
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    filterCountriesList(filteredCountries);
  };
  return (
    <div className="container p-5">
      <form action="" className="relative flex items-center">
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Search"
          className="h-14 w-full max-w-md rounded-full border-2 border-gray-300 py-3 pl-12 pr-4 shadow-md outline-primary dark:border-gray-600 dark:bg-primary"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500 dark:text-gray-300"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
          />
        </svg>
      </form>
    </div>
  );
}
