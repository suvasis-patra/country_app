import { SearchBar } from "../components";
import SelectContinent from "../components/SelectContinent";

const Landing = () => {
  return (
    <section className="w-full flex flex-col gap-4 md:flex-row px-6 md:px-12 py-8 md:justify-between md:items-center ">
      <SearchBar />
      <SelectContinent />
    </section>
  );
};

export default Landing;
