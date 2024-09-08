import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SelectComponent = ({
  items,
  selectfor,
  placeholderOption,
  value,
  setValue,
}: {
  items: string[];
  selectfor: string;
  placeholderOption: string;
  value: string;
  setValue: (newValue: string) => void;
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (value !== "") {
      navigate(`?${selectfor}=${value}`);
    }
  }, [value, selectfor, navigate]);

  return (
    <div className="border-[1.75px] p-2 rounded-lg w-fit">
      <select
        name={`select-${selectfor}`}
        id="select"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="focus:outline-none"
      >
        <option value="" disabled>
          {placeholderOption}
        </option>
        {items.map((item) => (
          <option key={item} value={item.toLocaleLowerCase()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
