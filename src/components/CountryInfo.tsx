export type countryInfoProps = {
  region: string;
  subregion: string;
  population: number;
  capital: string;
  tld: string;
  area: number;
  commonName: string;
  officialName: string;
  border: string[] | undefined;
};

const CountryInfo = ({
  region,
  subregion,
  population,
  capital,
  tld,
  area,
  commonName,
  officialName,
  border,
}: countryInfoProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 bg-gradient-to-r from-green-50 to-lime-50 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      <h3 className="text-4xl font-extrabold text-blue-800 mb-4">
        {commonName}
      </h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-4 text-gray-800">
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Official Name:</span>{" "}
            {officialName}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Population:</span>{" "}
            {population.toLocaleString("en-US")}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Region:</span>{" "}
            {region}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Subregion:</span>{" "}
            {subregion}
          </p>
        </div>
        <div className="flex flex-col gap-4 text-gray-800">
          <p className="text-lg">
            <span className="font-semibold text-blue-600">
              Top Level Domain:
            </span>{" "}
            {tld}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Capital:</span>{" "}
            {capital}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-blue-600">Area:</span>{" "}
            {area.toLocaleString("en-US")} km²
          </p>
        </div>
      </div>
      {border && border.length > 0 && (
        <div className="mt-4 flex gap-1 items-center flex-wrap">
          <span className="text-xl font-semibold text-blue-800">Borders:</span>
          {border.slice(0, 5).map((country) => (
            <span
              key={country}
              className="inline-block px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm mr-2 font-medium"
            >
              {country}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
