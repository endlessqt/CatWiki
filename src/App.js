import React, { useEffect, useState } from "react";
import Main from "./layout/Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import axios from "axios";
const App = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await axios.get("https://api.thecatapi.com/v1/breeds", {
          headers: { "x-api-key": process.env.REACT_APP_CATAPI_KEY },
        });
        setCats(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCats();
  }, []);
  return (
    <div className="container mx-auto px-4 md:p-0 flex flex-col h-screen">
      <Header />
      <Main>
        <Hero cats={cats} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
