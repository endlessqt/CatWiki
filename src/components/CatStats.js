import React from "react";

const CatStat = ({ name, value, additionalText }) => {
  return (
    <div className="flex flex-col lg:flex-row text-base sm:text-lg leading-5">
      <div className="font-bold text-center lg:text-center text-lg">
        {name}:{" "}
      </div>
      {isFinite(value) ? (
        <div>{value}</div>
      ) : (
        <div className="xl:ml-1 mt-1 lg:mt-0 text-center font-medium xl:text-left">
          {value} {additionalText}
        </div>
      )}
    </div>
  );
};

const CatStats = ({ breedInfo }) => {
  console.log(breedInfo);
  return (
    <div className="flex flex-col lg:space-y-5 space-y-3">
      <CatStat name="Temperament" value={breedInfo?.temperament} />
      <CatStat name="Origin" value={breedInfo?.origin} />
      <CatStat
        name="Life Span"
        value={breedInfo?.life_span}
        additionalText="years"
      />
      <CatStat name="Adaptability" value={breedInfo?.adaptability} />
      <CatStat name="Affection level" value={breedInfo?.affection_level} />
      <CatStat name="Child friendly" value={breedInfo?.child_friendly} />
      <CatStat name="Grooming" value={breedInfo?.grooming} />
      <CatStat name="Intelligence" value={breedInfo?.intelligence} />
      <CatStat name="Health issues" value={breedInfo?.health_issues} />
      <CatStat name="Social needs" value={breedInfo?.social_needs} />
      <CatStat name="Stranger friendly" value={breedInfo?.stranger_friendly} />
    </div>
  );
};

export default CatStats;
