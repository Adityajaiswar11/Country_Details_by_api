import { useState } from "react";

import { CountryList } from "./components/CountryList";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";

function App() {
  const [search, setSearch] = useState("");
 

  return (
    <>
      <Header />
      <Searchbar search={search} setSearch={setSearch}></Searchbar>
      <CountryList search={search} />
    </>
  );
}

export default App;
