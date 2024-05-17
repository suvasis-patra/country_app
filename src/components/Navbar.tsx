import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between px-6 md:px-12 py-4 items-center shadow-md mb-[1px] bg-slate-50">
      <div>
        <h1 className="text-2xl font-semibold">Where in the world ?</h1>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-lg  border-[1px] border-black rounded-se-2xl">
        <span>
          <Moon height={20} width={20} />
        </span>
        <p>dark mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
