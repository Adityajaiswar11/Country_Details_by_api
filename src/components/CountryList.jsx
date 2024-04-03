/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";
import axios from "axios";

export const CountryList = ({ search }) => {
  const [country, setCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      const data = res.data;
      setCountry(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredCountries = country.filter((data) => {
      if (search === "") return true; // Include all countries if search is empty
      return data.name.common.toLowerCase().includes(search.toLowerCase());
    });
    setFilterCountry(filteredCountries);
    console.log(filteredCountries);
  }, [country, search]);
  return (
    <>
      <main className="md:w-[85%] w-full mx-auto px-5 mt-10">
        <h1 className="font-medium text-2xl opacity-90 first-letter:text-red-600 text-center">
          All Country List Details
        </h1>
        {filterCountry.length > 0 ? (
          <div className="mt-[3rem] mb-5 grid md:grid-cols-2 xl:grid-cols-4 gap-10 grid-cols-1">
            {filterCountry.map((data) => (
              <CountryCard data={data} key={data.id} />
            ))}
          </div>
        ) : (
          <>
            <h1 className="text-center mt-[5rem] text-2xl font-semibold">
              No Country Found
            </h1>
          </>
        )}
      </main>
    </>
  );
};
