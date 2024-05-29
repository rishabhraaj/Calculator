import React from "react";
import AppHeading from "./components/AppHeading";
import Container from "./components/Container";
import InputBox from "./components/InputBox";
import Buttons from "./components/Buttons";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <AppHeading />
      <Container>
        <InputBox displayValue={calVal} />
        <Buttons onButtonClick={onButtonClick} />
      </Container>
    </>
  );
};

export default App;
