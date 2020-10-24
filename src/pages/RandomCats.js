import React from "react";
import CatCard from "../components/CatCard";

const RandomCats = ({ cats }) => {
  return (
    <div className="text-text-main">
      <h2 className="text-left font-bold leading-snug sm:leading-10  text-4xl sm:text-5xl ">
        10 Random Cat Breeds
      </h2>
      <div className="my-7 sm:mt-10 md:mt-14 ">
        {cats.map((cat, index) => (
          <CatCard cat={cat} index={index} key={cat.id} />
        ))}
      </div>
    </div>
  );
};

export default RandomCats;
