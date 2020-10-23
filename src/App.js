import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import utils from "./utils";
import Main from "./layout/Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import FrontPage from "./pages/FrontPage";
import CatPage from "./pages/CatPage";
import RandomCats from "./pages/RandomCats";
const App = () => {
  const [cats, setCats] = useState([]);
  const [tenRandomCats, setTenRandomCats] = useState([]);
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
  useEffect(() => {
    const fetchRandomCats = async (cats) => {
      try {
        if (cats.length) {
          const catIds = cats.map((cat) => cat.id);
          const randomIds = utils.getRandomItems(catIds, 10);
          const res = await Promise.all(
            utils.createRequestArr("breed_id", randomIds)
          );
          const tenRandomData = res
            .flatMap((cat) => cat.data)
            .map((cat) => {
              return {
                image: cat.url,
                id: cat.breeds[0].id,
                name: cat.breeds[0].name,
                description: cat.breeds[0].description,
              };
            });
          setTenRandomCats(tenRandomData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchRandomCats(cats);
  }, [cats]);
  return (
    <div className="container mx-auto px-4 md:p-0 flex flex-col h-screen">
      <Header />
      <Main>
        <Switch>
          <Route path="/cats/:id">
            <CatPage />
          </Route>
          <Route path="/cats">
            <RandomCats cats={tenRandomCats} />
          </Route>
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
