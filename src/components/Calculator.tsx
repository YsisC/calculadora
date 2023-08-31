// "use client";

import React, { useState } from "react";
import {
  updateDisplay,
  calculateResult,
  clearDisplay,
  deleteLastCharacter,
} from "../redux/features/calculatorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import styles from "./Calculator.module.css";

export const Calculadora = () => {
  const displayValue = useAppSelector((state) => state.calculator.displayValue);

  const dispatch = useAppDispatch();

  const handleButtonClick = (value: string) => {
    dispatch(updateDisplay(value));
  };
  const handleDelete = (value: any) => {
    dispatch(deleteLastCharacter(value));
  };

  const handleCalculate = () => {
    dispatch(calculateResult());
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  return (
    <div className={styles.calculator_container}> 
    
      <input className={`${styles.display}`} type="text" value={displayValue} />
      <div className={styles.calculator}>
        {/* Primer bloque */}
        <button className={`${styles.button}`} onClick={handleClear}>
          AC
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("8")}
        >
          4
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>

        <button
          onClick={() => handleButtonClick("%")}
          className={`${styles.button} ${styles.operator}`}
        >
          {" "}
          %{" "}
        </button>

        {/* segundo bloque */}
        <button
          className={`${styles.button}`}
          onClick={() => handleDelete(displayValue)}
        >
          {" "}
          B{" "}
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("9")}
        >
          5
        </button>

   

        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>

               {/* Tercero bloque */}
        <button
          className={`${styles.button} ${styles.operator}`}
          onClick={() => handleButtonClick("/")}
        >
          /
        </button>
               <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
  
     
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
   
   
        {/* tercer bloque */}
        <button
          className={`${styles.button} ${styles.operator}`}
          onClick={() => handleButtonClick("*")}
        >
          *
        </button>

        <button
           className={`${styles.button} ${styles.operator}`}
          onClick={() => handleButtonClick("-")}
        >
          {" "}
          -{" "}
        </button>
        <button
          className={`${styles.button} ${styles.equal} `}
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>


    
        <button
          className={`${styles.button} ${styles.equal} `}
          onClick={handleCalculate}
        >
          =
        </button>

    
    
      </div>
      </div>
  );
};
