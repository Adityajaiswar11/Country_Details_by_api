/* eslint-disable react/prop-types */


export const CountryCard = ({data}) => {
  return (
    <>
     
          <div className="w-[250px] text-center rounded-sm shadow-md shadow-black/65">
               <img src={data?.flags?.svg} alt="flag" 
               className="h-[200px] w-full rounded-md object-cover"/>
               <div className="mt-1 py-3 text-center ">
          <h1 className="py-1">Country Name : <span className="text-red-">{data?.name?.common}</span></h1>
          <h1 className="py-1">Population : <span>{data?.population}</span></h1>
          <h1 className="py-1">Capital : <span>{data?.capital}</span></h1>
          <h1 className="py-1">Region: <span>{data?.region}</span></h1>
          </div>
          </div>
          
     
    </>
  )
}
