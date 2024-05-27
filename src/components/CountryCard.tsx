import { Country } from "../pages/Landing";
import { Link } from "react-router-dom";

const CountryCard = ({ capital, flags, name, population, region }: Country) => {
  return (
    <div className="flex flex-col gap-3 hover:rounded-lg hover:shadow-md">
      <div className="flex justify-center items-center max-h-[200px] w-full">
        <Link to={`/${name.common}`}>
          <img
            src={flags.png}
            alt={flags.alt}
            className="h-full w-full cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 p-4 text-lg">
        <h3 className="text-2xl font-semibold my-2">{name.common}</h3>
        <p>
          <span className="text-lg font-semibold">Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span className="text-lg font-semibold">Region: </span>
          {region}
        </p>
        <p>
          <span className="text-lg font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
