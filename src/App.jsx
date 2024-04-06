import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryList } from "./components/CountryList";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [search, setSearch] = useState("");
 

  return (
    <>
      {/* <Searchbar></Searchbar>
      <CountryList search={search} /> */}
      <BrowserRouter>

      <Header />
      <Searchbar  search={search} setSearch={setSearch} />
      <Routes>
          <Route path="/" element={<CountryList search={search}  />}>
          <Route path="pro" element={<CountryDetails/>} />
         
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
