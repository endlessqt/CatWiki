import React from "react";
import Main from "./layout/Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="container mx-auto px-4 md:p-0 flex flex-col h-screen">
      <Header />
      <Main>
        <Hero />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
