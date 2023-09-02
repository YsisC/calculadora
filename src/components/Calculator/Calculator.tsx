// "use client";

import React from "react";
import {
  updateDisplay,
  changeDisplay,
  calculateResult,
  calculatePercentage,
  clearDisplay,
  deleteLastCharacter,
} from "../../redux/features/calculatorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import styles from "./Calculator.module.css";
import {BackspaceOutlined,HistoryOutlined } from "@mui/icons-material";
import Image from "next/image";
import chuck from "../../../public/logochuck.png";
import Link from "next/link";

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
  const handleCalculatePercentage = () => {

    dispatch(calculatePercentage());
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  const handleEnter = ( e: React.KeyboardEvent<HTMLInputElement >): void => {
    if (e.key === 'Enter') {
      dispatch(calculateResult());
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeDisplay(e.target.value))
  }

  return (
    <section className={styles.calculator_container}>
      <div className={`${styles.navbar}`}>
        <Link href={"jokes"} passHref>
          <Image src={chuck} height={40} alt="chuck" />
        </Link>
        <Link className={`link`}href={"history"} passHref>
        <HistoryOutlined />

        </Link>
      </div>
      <input 
      onKeyUp={handleEnter} 
      onChange={handleChange}
      className={`${styles.display}`} type="text" value={displayValue} />
      <div className={styles.calculator}>
        {/* Primer bloque */}
        <button className={`${styles.button} ${styles.operator}`} onClick={handleClear}>
          AC
        </button>
        <button
          className={`${styles.button} `}
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("4")}
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
          onClick={ handleCalculatePercentage}
          className={`${styles.button} `}
        >
          {" "}
          %{" "}
        </button>

        {/* segundo bloque */}
        <button
          className={`${styles.button} ${styles.operator}`}
          onClick={() => handleDelete(displayValue)}
        >
          {" "}
          <BackspaceOutlined />
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className={`${styles.button}`}
          onClick={() => handleButtonClick("5")}
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
          className={`${styles.button} ${styles.operator} link`}
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
          className={`${styles.button} ${styles.operator} link`}
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
    </section>
  );
};
