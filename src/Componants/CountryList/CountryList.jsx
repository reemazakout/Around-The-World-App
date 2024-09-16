import CountryCard from "../CountryCard/CountryCard";
import Loading from "../Loading/Loading";

export default function CountryList({ data }) {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data === null ? (
          <Loading />
        ) : data.length > 0 ? (
          data.map((country) => (
            <CountryCard
              key={country.name.official}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
            />
          ))
        ) : (
          <div className="fixed flex items-center justify-center p-10 text-center text-3xl font-bold">
            No items found
          </div>
        )}
      </div>
    </div>
  );
}
