import React from "react";
import styles from "./InputBox.module.css";

const InputBox = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        className={`${styles.inputBoxStyle}`}
        value={displayValue}
        readOnly
      />
    </>
  );
};

export default InputBox;
