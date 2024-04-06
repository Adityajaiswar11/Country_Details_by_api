/* eslint-disable react/prop-types */


const CountryDetails = ({singleCountry}) => {
          console.log(singleCountry)
  return (
   <>
     <section className="w-full flex justify-center items-cente">
          <div className=" w-[70%]  mx-auto flex justify-center items-start gap-[4rem] mt-[6rem] py-8 px-8">

          <div className="w-[350px] rounded-md">
             <img  src={singleCountry?.flags?.svg} alt={singleCountry.name.common} className="w-full object-cover rounded-md"/>
             <h1 className="text-2xl text-black/80 font-semibold mt-5 text-center">Country :<span className="text-red-500 px-2">{singleCountry.name.common}</span></h1>
          </div>

          <div className="mt-1 py-3  ">
          <h1 className="py-1 font-semibold text-black/80">
            Country :{" "}
            <span className="text-red-">{singleCountry?.name?.common}</span>
          </h1>
          <h1 className="py-1 font-semibold text-black/80">
            Population : <span>{singleCountry?.population}</span>
          </h1>
          <h1 className="py-1 font-semibold text-black/80">
            Capital : <span>{singleCountry?.capital}</span>
          </h1>
          <h1 className="py-1 font-semibold text-black/80">
            Region: <span>{singleCountry?.region}</span>
          </h1>
          <h1 className="py-1 font-semibold text-black/80">
          Area
: <span>{singleCountry?.area}</span>
          </h1>

          <div className="bg-red-500">
              {singleCountry?.borders?.map((b)=>{
            <h1 key={b}>Border {b}</h1>
              })}
          </div>
        </div>
          </div>
     </section>
   </>
  )
}

export default CountryDetails