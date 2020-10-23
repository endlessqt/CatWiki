import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import TextParagraph from "./TextParagraph";

const CatCard = ({ cat, index }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:mt-5">
      <div className="order-2 sm:order-1 flex-1">
        <Link to={`/cats/${cat.id}`}>
          <Image
            src={cat.image}
            effect="blur"
            alt="kitten image"
            styles="object-center object-cover rounded-roundedImgSm md:rounded-roundedImgDef w-full max-h-80 mt-3 sm:mt-0 sm:h-40 md:h-56 md:w-56 lg:w-80 lg:h-80"
          />
        </Link>
      </div>
      <div className="order-1 sm:order-2 flex-2 sm:ml-5 ">
        <Link
          to={`/cats/${cat.id}`}
          className="text-center lg:text-left font-semibold leading-7 sm:leading-10  text-3xl md:text-4xl hover:underline "
        >
          {index + 1}. {cat.name}
        </Link>
        <TextParagraph
          text={cat.description}
          additionalStyles="mt-3 sm:mt-0 md:text-lg lg:mt-10"
        />
      </div>
    </div>
  );
};

export default CatCard;
