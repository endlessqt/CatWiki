import React from "react";
//* FONT SIZE ALWAYS GOES TO ADDITIONAL STYLES
const TextParagraph = ({ text, additionalStyles }) => {
  return (
    <div className={"text-text-main font-medium " + `${additionalStyles}`}>
      {text}
    </div>
  );
};

export default TextParagraph;
