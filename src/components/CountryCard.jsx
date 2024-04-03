/* eslint-disable react/prop-types */

export const CountryCard = ({ data }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="xl:w-[300px] md:w-[330px] w-[320px] text-center rounded-sm shadow-md shadow-black/65 bg-gray-200 cursor-pointer hover:scale-[1.1] duration-300">
        <img
          src={data?.flags?.svg}
          alt="flag"
          className="h-[200px] w-full object-cover"
        />
        <div className="mt-1 py-3 text-center ">
          <h1 className="py-1 font-semibold text-black/80">
            Country Name :{" "}
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
  );
};
