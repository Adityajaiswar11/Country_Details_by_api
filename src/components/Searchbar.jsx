/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
export const Searchbar = ({ setSearch }) => {
  return (
    <>
      <main className="w-full py-6 px-2">
        <div className="md:w-[75%] w-full px-5 md:px-5 mx-auto flex justify-between items-center gap-5">
          <div>
            <h1 className="py-2 md:text-md text-black/80 font-medium text-sm">
              Search a country name
            </h1>
           <div className="flex justify-center items-center md:w-[300px] w-[170px] border px-2  hover:border-black/70 rounded-sm ">
           <input
          
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search a country"
          className="w-full h-10 outline-none px-2 py-2 text-sm"
          
        />
          <span><CiSearch/></span>
           </div>
           
           
          </div>
          <div>
            <h1 className="py-2 md:text-md text-sm text-black/80 font-medium ">
              Filter By Region
            </h1>
            <select
              className="md:w-[200px] w-[120px] border border-gray-300 py-2 px-2 rounded-sm cursor-pointer"
              onChange={(e) => setSearch(e.target.value)}
            >
              <option hidden>Select Region</option>
              <option value="asia" className="cursor-pointer">Asia</option>
              <option value="africa" className="cursor-pointer">Africa</option>
              <option value="americas" className="cursor-pointer"> Americas</option>
              <option value="europe" className="cursor-pointer">Europe</option>
              <option value="oceania" className="cursor-pointer">Oceania</option>
            </select>
          </div>
        </div>
      </main>
    </>
  );
};
