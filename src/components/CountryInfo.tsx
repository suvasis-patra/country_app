export type countryInfoProps = {
  region: string;
  subregion: string;
  population: number;
  capital: string;
  tld: string;
  area: number;
  commonName: string;
  officialName: string;
  border: Array<string>;
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
    <div className="flex flex-col gap-3 px-6 md:px-8 justify-center">
      <h3 className="text-2xl font-bold p-2">{commonName}</h3>
      <div className="flex items-end justify-between">
        {" "}
        <div className="flex flex-col  gap-3 capitalize text-md">
          <p>
            <span className="font-semibold">official name : </span>
            {officialName}
          </p>
          <p>
            <span className="font-semibold">Population : </span>
            {population.toLocaleString("en-US")}
          </p>
          <p>
            <span className="font-semibold">region : </span>
            {region}
          </p>
          <p>
            <span className="font-semibold">subregion : </span>
            {subregion}
          </p>
        </div>
        <div className="flex flex-col  gap-3 capitalize text-md">
          <p className="lowercase">
            <span className="font-semibold capitalize">
              top level domain :{" "}
            </span>
            {tld}
          </p>
          <p>
            <span className="font-semibold">capital : </span>
            {capital}
          </p>
          <p>
            <span className="font-semibold">area : </span>
            {area.toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CountryInfo;
