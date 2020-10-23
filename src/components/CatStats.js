import React from "react";

const CatStat = ({ name, value, additionalText }) => {
  const ratingArr = isFinite(value)
    ? new Array(5).fill(false).map((i, index) => {
        return index < value ? true : false;
      })
    : [];

  return (
    <div className="flex flex-col lg:flex-row   text-base sm:text-lg leading-5 ">
      <div className="flex-1 font-bold text-center lg:text-left text-lg">
        {name}:
      </div>
      {isFinite(value) ? (
        <div className="flex flex-row items-center justify-center lg:justify-start mt-2 lg:mt-0 space-x-3  flex-2 lg:ml-2 xl:ml-0">
          {ratingArr.map((rate, index) => {
            return rate ? (
              <div
                key={index}
                className="bg-rating-true w-14 h-3 rounded-full"
              ></div>
            ) : (
              <div
                key={index}
                className="bg-rating-false w-14 h-3 rounded-full"
              ></div>
            );
          })}
        </div>
      ) : (
        <div className=" mt-1 lg:mt-0 text-center lg:text-left font-medium flex-2">
          {value} {additionalText}
        </div>
      )}
    </div>
  );
};

const CatStats = ({ breedInfo }) => {
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
