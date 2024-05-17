import { CONTINENTS } from "../lib/constant";

const SelectContinent = () => {
  return (
    <span className="border-[1.75px] p-2 rounded-lg w-fit">
      <select
        name="select-continent"
        id="select"
        className="focus:outline-none"
      >
        <option value="">select region</option>
        {CONTINENTS.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </span>
  );
};

export default SelectContinent;
