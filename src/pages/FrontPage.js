import React from "react";
import Hero from "../components/Hero";
import TextParagraph from "../components/TextParagraph";
import Image1 from "../assets/images/image 1.png";
import Image2 from "../assets/images/image 2.png";
import Image3 from "../assets/images/image 3.png";
const FrontPage = ({ cats }) => {
  return (
    <div>
      <Hero cats={cats} />
      <div className="flex flex-col sm:flex-row sm:justify-between px-4 pt-14 pb-6 md:pt-24 md:pb-14  sm:px-14  lg:px-28 text-text-main">
        <div className="w-full  md:mt-14">
          <hr className="divider md:w-16" />
          <h2 className="font-bold text-4xl md:text-5xl leading-tight mt-4">
            Why should you have cat?
          </h2>
          <TextParagraph
            text={
              "Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves"
            }
            additionalStyles={"mt-10 lg:w-10/12"}
          />

          <button>click me</button>
        </div>
        <div className="w-full  mt-10 sm:mt-0 sm:self-center lg:self-start">
          <div className="grid  gap-4 md:gap-6 lg:gap-8 lg:gap-y-10 grid-cols-8 grid-rows-gallerySM  sm:grid-rows-galleryLG ">
            <img
              src={Image2}
              alt=""
              className="object-center object-cover col-span-4 "
            />
            <img
              src={Image3}
              alt=""
              className="object-center object-cover col-span-4 sm:col-start-5"
            />
            <img
              src={Image1}
              alt=""
              className="object-center object-cover row-start-4 col-start-2 col-span-3 sm:row-start-3 md:row-start-3 lg:row-start-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrontPage;
