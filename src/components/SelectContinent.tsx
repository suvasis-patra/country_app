import { useEffect, useState } from "react";
import { CONTINENTS } from "../lib/constant";
import { useLocation, useNavigate } from "react-router-dom";

const SelectContinent = () => {
  // console.log(continent);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialContinent = searchParams.get("region") || "";
  const [continent, setContinet] = useState(initialContinent);
  const navigate = useNavigate();
  useEffect(() => {
    if (continent !== "") {
      navigate(`?region=${continent}`);
    }
  }, [continent]);
  return (
    <span className="border-[1.75px] p-2 rounded-lg w-fit">
      <select
        name="select-continent"
        id="select"
        onChange={(e) => {
          setContinet(e.target.value);
        }}
        value={continent}
        className="focus:outline-none"
      >
        <option value="" disabled>
          select region
        </option>
        {CONTINENTS.map((continent) => (
          <option key={continent} value={continent.toLocaleLowerCase()}>
            {continent}
          </option>
        ))}
      </select>
    </span>
  );
};

export default SelectContinent;
