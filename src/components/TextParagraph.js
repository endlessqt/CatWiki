import React from "react";
const TextParagraph = ({ text, additionalStyles }) => {
  return (
    <p
      className={`text-text-main font-medium text-lg leading-5 ${additionalStyles}`}
    >
      {text}
    </p>
  );
};

export default TextParagraph;
