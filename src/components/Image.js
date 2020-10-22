import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ styles, effect, src, alt }) => {
  return (
    <LazyLoadImage src={src} className={styles} effect={effect} alt={alt} />
  );
};

export default Image;
