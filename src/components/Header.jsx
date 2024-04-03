// import { Link } from "react-router-dom"
import { IoHome } from "react-icons/io5";

export const Header = () => {
  return (
    <>
      <header className="w-full h-16 flex items-center shadow-sm shadow-black/70 py-2 px-5 ">
        <nav className="md:w-[70%] w-full mx-auto flex justify-between items-center gap-5 py-3">
          <h1 className="md:text-[1.2rem] text-sm font-semibold opacity-90 ">
            {" "}
            Know all the Country details here
          </h1>
          <div className="flex justify-center items-center gap-2 hover:text-red-600 duration-200 cursor-pointer">
            <IoHome size={20} />
            <a
              href="/"
              className="text-[1rem] font-semibold hover:text-red-600 duration-200 link px-1"
            >
              Home
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};
