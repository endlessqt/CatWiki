import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "../components/Image";
import TextParagraph from "../components/TextParagraph";
import CatStats from "../components/CatStats";
import axios from "axios";

const CatPage = () => {
  const { id } = useParams();
  const [cat, setCat] = useState({});
  useEffect(() => {
    const fetchCat = async (id) => {
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          headers: {
            "x-api-key": process.env.REACT_APP_CATAPI_KEY,
          },
          params: {
            breed_id: id,
            limit: 9,
            order: "DESC",
          },
        }
      );
      const catInfo = data.reduce((total, curr, index) => {
        if (index === 0) {
          total.images = [];
          total.breedInfo = { ...curr.breeds[0] };
          total.avatar = curr?.url;
        } else {
          total.images.push(curr?.url);
        }
        return total;
      }, {});
      setCat(catInfo);
    };
    fetchCat(id);
  }, [id]);
  return (
    <div>
      <div className="flex flex-col lg:flex-row  mt-3 px-3 sm:pr-14 sm:pl-7 lg:pr-28">
        <div className="relative self-center lg:self-start">
          <div className="hidden sm:block w-5  h-80 absolute bg-back-thing top-0 transform -translate-x-2  translate-y-7 rounded-roundedImgDef"></div>
          <Image
            styles="w-full lg:w-92 lg:h-92 rounded-roundedImgSm sm:rounded-roundedImgDef object-cover object-center"
            src={cat.avatar}
            alt="Cat Avatar"
            effect="blur"
          />
        </div>
        <div className="flex flex-col flex-1 sm:ml-16 lg:ml-28">
          <h2 className="text-center lg:text-left font-semibold leading-7 sm:leading-10  text-3xl sm:text-4xl">
            {cat.breedInfo?.name}
          </h2>
          <TextParagraph
            text={cat.breedInfo?.description}
            additionalStyles={"sm:text-lg mt-3 md:mt-6"}
          />
          <div className="mt-3 sm:mt-5 md:mt-8">
            <CatStats breedInfo={cat.breedInfo} />
          </div>
        </div>
      </div>
      <div>bottom section</div>
    </div>
  );
};

export default CatPage;
