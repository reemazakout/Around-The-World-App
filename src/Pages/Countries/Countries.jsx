import { Link, useParams } from "react-router-dom";
import { useFetchCountry } from "../../Hooks/useFetchCountry";
import Loading from "../../Componants/Loading/Loading";

export default function Countries() {
  const { countries } = useParams();
  const { country } = useFetchCountry(countries);
  console.log(country);

  if (country === null) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen dark:bg-black dark:text-gray-100">
      <div className="container mx-auto">
        <div className="p-10">
          <Link
            to="/"
            className="font-primary cursor-pointer rounded-md bg-gray-100 px-7 py-2 text-xl dark:bg-gray-800 dark:text-gray-100"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
          <div className="container col-span-12 grid grid-cols-1 items-center justify-center gap-8 p-8 dark:text-gray-100 md:grid-cols-3">
            <div className="">
              <img
                src={country?.flags?.svg}
                className="h-[200] w-[400px] object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold">{country?.name?.common}</h1>
              <div>
                <span className="font-bold">Native Name: </span>
                <span>{country?.name?.official}</span>
              </div>
              <div>
                <span className="font-bold">Population: </span>
                <span>{country?.population}</span>
              </div>
              <div>
                <span className="font-bold">Region: </span>
                <span>{country?.region}</span>
              </div>
              <div>
                <span className="font-bold">Sub Region: </span>
                <span>{country?.subregion}</span>
              </div>
              <div>
                <span className="font-bold">Capital: </span>
                <span>
                  {Array.isArray(country?.capital)
                    ? country.capital[0]
                    : country?.capital}
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="font-bold">Top Level Domain: </span>
                <span>
                  {Array.isArray(country?.tld)
                    ? country.tld.join(", ")
                    : country?.tld}
                </span>
              </div>

              <div>
                <span className="font-bold">Languages: </span>
                <span>
                  {country?.languages
                    ? Object.values(country.languages).join(", ")
                    : "N/A"}
                </span>
              </div>

              <div>
                <span className="font-bold">Capital: </span>
                <span>{country?.capital}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
