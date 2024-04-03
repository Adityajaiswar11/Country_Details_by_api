/* eslint-disable react/prop-types */

export const Searchbar = ({ search, setSearch }) => {
  return (
    <>
      <main className="w-full py-6 px-2">
        <div className="md:w-[75%] w-full px-5 md:px-5 mx-auto flex justify-between items-center gap-5">
          <div>
            <h1 className="py-2 md:text-md text-black/80 font-medium text-sm">
              Search a country name
            </h1>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search a country"
              className="md:w-[300px] w-[170px] h-10 outline-none border border-gray-300 px-2 py-2 hover:border-black/70 rounded-sm text-sm"
            />
          </div>
          <div>
            <h1 className="py-2 md:text-md text-sm text-black/80 font-medium ">
              Filter By Region
            </h1>
            <select className="md:w-[200px] w-[120px] border border-gray-300 py-2 px-2 rounded-sm">
              <option value="0">Select Region</option>
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
              <option value="americas"> Americas</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
      </main>
    </>
  );
};
