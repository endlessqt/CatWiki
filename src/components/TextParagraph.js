import React from "react";
const TextParagraph = ({ text, additionalStyles }) => {
  return (
    <p
      className={`text-text-main font-medium text-base leading-5 text-justify ${additionalStyles}`}
    >
      {text}
    </p>
  );
};

export default TextParagraph;
