import { Search } from "lucide-react";
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
      <div className="rounded-lg border-[1.5px] px-4 w-full flex justify-between items-center">
        <input
          type="search"
          name="search"
          className="focus:outline-none rounded-lg  py-2 text-lg w-full"
          onChange={(e) => setCountryName(e.target.value)}
          required
          placeholder="search..."
        />
        <Search />
      </div>
    </form>
  );
};

export default SearchBar;
