
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";
import { useState } from "react";

function App() {
    const [singleCountry,setSingleCountry] = useState({})
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home setSingleCountry={setSingleCountry}/>}/>
          <Route path="country/:name" element={<CountryDetails singleCountry={singleCountry} />} />
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
