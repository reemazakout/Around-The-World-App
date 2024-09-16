import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
}) {
  return (
    <Link
      to={name}
      className="flex h-full max-w-xs transform flex-col rounded-lg border border-gray-300 p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
    >
      <div className="flex h-full flex-col">
        <div className="">
          <img
            src={flag}
            alt="Country"
            className="h-40 w-full rounded-t-lg object-cover"
          />
        </div>
        <div className="flex flex-grow flex-col p-6">
          <h1 className="mb-4 truncate text-2xl font-bold text-gray-900 dark:text-gray-100">
            {name}
          </h1>
          <div className="mb-4">
            <span className="px-3 text-lg font-bold text-gray-800 dark:text-gray-300">
              Population:
            </span>
            <span className="text-xl text-gray-900 dark:text-gray-100">
              {population}
            </span>
          </div>
          <div className="mb-4">
            <span className="px-3 text-lg font-bold text-gray-800 dark:text-gray-300">
              Region:
            </span>
            <span className="text-xl text-gray-900 dark:text-gray-100">
              {region}
            </span>
          </div>
          <div className="flex-grow">
            <span className="px-3 text-lg font-bold text-gray-800 dark:text-gray-300">
              Capital:
            </span>
            <span className="truncate text-xl text-gray-900 dark:text-gray-100">
              {capital}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
