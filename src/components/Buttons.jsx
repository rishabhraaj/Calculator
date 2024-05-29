import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  let allBtns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className="row">
        {allBtns.map((item) => {
          return (
            <div className="col-4">
              <button
                className={`${styles.buttonStyles}`}
                onClick={() => onButtonClick(item)}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
