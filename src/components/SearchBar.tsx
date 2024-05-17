const SearchBar = () => {
  return (
    <form action="" className="md:w-3/4 w-full">
      <div className="rounded-lg w-full">
        <input
          type="search"
          name="search"
          className="border-[1.5px] focus:outline-none rounded-lg px-4 py-2 text-lg w-full"
          placeholder="search..."
        />
      </div>
    </form>
  );
};

export default SearchBar;
