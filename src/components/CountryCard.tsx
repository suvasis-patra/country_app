import { CountryDetails } from "../pages/Landing";
import { Link } from "react-router-dom";

const CountryCard = ({
  capital,
  flags,
  name,
  population,
  region,
}: CountryDetails) => {
  return (
    <div className="relative flex flex-col rounded-xl shadow-lg hover:shadow-2xl duration-300 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 transform hover:-translate-y-2 hover:scale-105 transition ease-in-out group">
      <div className="flex justify-center items-center max-h-[200px] w-full overflow-hidden rounded-t-xl">
        <Link to={`/${name.common}`}>
          <img
            src={flags.png}
            alt={flags.alt}
            className="h-full w-full cursor-pointer rounded-t-xl object-cover transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-2xl font-bold text-purple-900 mb-4 animate-fade-in">
          {name.common}
        </h3>
        <p className="text-gray-700 animate-fade-in">
          <span className="font-semibold text-purple-800">Population: </span>
          {population.toLocaleString()}
        </p>
        <p className="text-gray-700 animate-fade-in">
          <span className="font-semibold text-purple-800">Region: </span>
          {region}
        </p>
        <p className="text-gray-700 animate-fade-in">
          <span className="font-semibold text-purple-800">Capital: </span>
          {capital}
        </p>
      </div>
      <Link
        to={`/${name.common}`}
        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 bg-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out
  hover:bg-purple-700 hover:scale-105 hover:shadow-xl"
      >
        View Details
      </Link>
    </div>
  );
};

export default CountryCard;
