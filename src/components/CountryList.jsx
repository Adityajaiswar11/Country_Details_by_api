/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";
import axios from "axios";
import Loader from "./Loader";

export const CountryList = ({ search, setSingleCountry }) => {
  const [country, setCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountry(res.data);
        setFilterCountry(res.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredCountries = country.filter((data) => {
      setLoader(true);
      if (search === "") return true; // Include all countries if search is empty
      return (
        data.name.common.toLowerCase().includes(search.toLowerCase()) ||
        data?.region.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilterCountry(filteredCountries);
    setLoader(false);
    setPage(1); // Reset page to 1 whenever search changes
  }, [country, search]);

  const handlePageChange = (newPage) => {
    if (
      newPage >= 1 &&
      newPage <= filterCountry.length / 10 &&
      newPage !== page
    )
      setPage(newPage);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <main className="md:w-[85%] w-full mx-auto px-5 mt-10">
          <h1 className="font-medium text-2xl opacity-90 first-letter:text-red-600 text-center">
            All Country List Details
          </h1>
          {filterCountry.length > 0 ? (
            <>
              <div className="mt-[3rem] mb-5 grid md:grid-cols-2 xl:grid-cols-4 gap-10 grid-cols-1">
                {filterCountry.slice(page * 10 - 10, page * 10).map((data) => (
                  <CountryCard
                    data={data}
                    key={data.name.common}
                    setSingleCountry={setSingleCountry}
                  />
                ))}
              </div>
              <div className="mt-[3rem] w-full flex justify-center items-center mb-[3rem] flex-wrap gap-2 ">
                <span
                  className={`cursor-pointer border border-black py-2 px-2 hover:bg-blue-500 duration-200 ${
                    page == 1 ? "hidden" : ""
                  }`}
                  onClick={() => handlePageChange(page - 1)}
                >
                  ⏮
                </span>
                {[...Array(Math.ceil(filterCountry.length / 10))].map(
                  (_, i) => (
                    <span
                      key={i}
                      className={`border border-gray-300  px-2 py-2 rounded-md font-semibold cursor-pointer ${
                        i + 1 === page ? "bg-blue-500 text-white " : ""
                      }`}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </span>
                  )
                )}
                <span
                  className={`cursor-pointer border border-black py-2 px-2  hover:bg-blue-500 duration-200 ${
                    page == filterCountry.length / 10 ? "hidden" : ""
                  }`}
                  onClick={() => handlePageChange(page + 1)}
                >
                  ⏩
                </span>
              </div>
            </>
          ) : (
            <h1 className="text-center mt-[5rem] text-2xl font-semibold">
              No Country Found
            </h1>
          )}
        </main>
      )}
    </>
  );
};
