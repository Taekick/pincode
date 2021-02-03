import React, { useState } from "react";
import Display from "../Display/Display";
import Numbers from "../Numbers/Numbers";
import "./Calculatrice.scss";

const Calculatrice = () => {
  const [pin, setPin] = useState([]);
  const [maxNum, setMaxNum] = useState(false);
  const [result, setResult] = useState(false);
  const goodPin = "1234";

  const getNumber = (number) => {
    let arr = [...pin, number];
    setPin(arr);
    //4 digit max
    if (arr.length === 4) {
      setMaxNum(true);
    }
  };

  //check is the good pin
  const check = () => {
    const val = pin && pin.join("");
    if (pin && pin.length > 3) {
      if (val === goodPin) {
        setResult(true);
        //reset pin
        setPin("");
      } else {
        setResult(false);
        //reset pin
        setPin("");
      }
    }
  };
  check();
  return (
    <div className='wrapper'>
      <Display pin={pin} result={result} />
      <Numbers getNumber={getNumber} maxNum={maxNum} />
    </div>
  );
};

export default Calculatrice;
