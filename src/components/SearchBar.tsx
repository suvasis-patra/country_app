import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [countryName, setCountryName] = useState("");
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${countryName}`);
  };
  return (
    <form onSubmit={submitHandler} className="md:w-3/4 w-full">
      <div className="rounded-lg w-full">
        <input
          type="search"
          name="search"
          className="border-[1.5px] focus:outline-none rounded-lg px-4 py-2 text-lg w-full"
          onChange={(e) => setCountryName(e.target.value)}
          required
          placeholder="search..."
        />
      </div>
    </form>
  );
};

export default SearchBar;
