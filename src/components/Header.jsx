// import { Link } from "react-router-dom"
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="w-full h-16 flex items-center shadow-sm shadow-black/70 py-2 px-5 ">
        <nav className="md:w-[70%] w-full mx-auto flex justify-between items-center gap-5 py-3">
          {/* <h1 className="md:text-[1.2rem] text-sm font-semibold opacity-90 ">
            {" "}
            Discover the World! Explore Country Details!
          </h1> */}
          <h1 className="font-medium md:text-2xl text-sm opacity-90 text-center">
  <span className="text-blue-500">Discover the World:</span> <span className="text-green-500">Explore Country Details</span>
</h1>

          <div className="flex justify-center items-center gap-2 hover:text-red-600 duration-200 cursor-pointer">
            <IoHome size={20} />
            <Link
              to="/"
              className="text-[1rem] font-semibold hover:text-red-600 duration-200 link px-1"
            >
              Home
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
