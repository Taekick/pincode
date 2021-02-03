import React from "react";
import "./Display.scss";

const Display = ({ pin }) => {
  let pinStar = [...pin];

  const star = pinStar.map((item, index) => {
    // not the last item
    if (index < pinStar.length - 1) {
      return (pinStar[index] = "*");
    } else {
      return item;
    }
  });

  return <div className='field'>{star}</div>;
};

export default Display;
