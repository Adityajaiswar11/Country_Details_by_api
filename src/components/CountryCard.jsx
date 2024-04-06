/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const CountryCard = ({ data,setSingleCountry}) => {
  const handleClick = (data)=>{
   
    setSingleCountry(data)
  }

  return (
      <Link to ={`/country/${data?.name?.common}`}>
    <div className="flex justify-center items-center">
      <div className="xl:w-[300px] md:w-[330px] w-[320px] text-center rounded-sm shadow-md shadow-black/65 bg-gray-200 cursor-pointer hover:scale-[1.1] duration-300" onClick={()=>handleClick(data)}>
        <img
          src={data?.flags?.svg}
          alt={data?.name?.common}
          className="h-[200px] w-full object-cover"
        />
        <div className="mt-1 py-3 text-center ">
          <h1 className="py-1 font-semibold text-black/80">
            Country :{" "}
            <span className="text-red-">{data?.name?.common}</span>
          </h1>
          <h1 className="py-1 font-semibold text-black/80">
            Population : <span>{data?.population}</span>
          </h1>
          <h1 className="py-1 font-semibold text-black/80">
            Capital : <span>{data?.capital}</span>
          </h1>
          <h1 className="py-1 font-semibold text-black/80">
            Region: <span>{data?.region}</span>
          </h1>
        </div>
      </div>
    </div>
      </Link>
  );
};
