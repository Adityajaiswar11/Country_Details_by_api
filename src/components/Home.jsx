import { useState } from "react";
import { CountryList } from "./CountryList"
import { Searchbar } from "./Searchbar"

const Home = ({setSingleCountry}) => {
          const [search, setSearch] = useState("");
  return (
    <div>
       <Searchbar search={search}   setSearch={setSearch}/>
       <CountryList search={search}  setSingleCountry={setSingleCountry} />
    </div>
  )
}

export default Home