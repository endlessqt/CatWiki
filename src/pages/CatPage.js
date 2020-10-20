import React from "react";
import { useParams } from "react-router-dom";
const CatPage = () => {
  const { id } = useParams();
  return <div>cat id is {id}</div>;
};

export default CatPage;
