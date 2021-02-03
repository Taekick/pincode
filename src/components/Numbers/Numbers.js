import React from "react";
import "./Numbers.scss";
const Numbers = ({ getNumber, maxNum }) => {
  const NumbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='numbersContainer'>
      {NumbersArray.map((item, index) => {
        return (
          <button
            key={index}
            className='numberTouch'
            onClick={() => getNumber(item)}
            disabled={maxNum ? true : false}
          >
            {item}
          </button>
        );
      }).reverse()}
    </div>
  );
};

export default Numbers;
