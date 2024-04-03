/* eslint-disable react/prop-types */


export const Searchbar = ({search,setSearch}) => {
  return (
    <>
      <main className="w-full py-10">
        <div className="w-[70%] mx-auto flex justify-between items-center gap-5">
          <div>
            <input
              type="text"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search a country"
              className="w-[300px] h-10 outline-none border border-gray-300 px-2 py-2 hover:border-black/70 rounded-sm"
            />
          </div>
          <div>
            <select className="w-[200px] border border-black py-2 px-2 rounded-sm">
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
              <option value="india">India</option>
            </select>
          </div>
        </div>
      </main>
    </>
  );
};
