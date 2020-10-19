import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Main from "./layout/Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import FrontPage from "./pages/FrontPage";

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
        <Switch>
          <Route path="/">
            <FrontPage cats={cats} />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
