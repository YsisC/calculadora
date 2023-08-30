"use client";

import React, { useState } from 'react';
import {
    updateDisplay,
    calculateResult,
    clearDisplay,
  } from '../redux/features/calculatorSlice';
  import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import styles from './Calculadora.module.css';

export const Calculadora = () => {

    const displayValue = useAppSelector((state) => state.calculator.displayValue);
    const history = useAppSelector((state) => state.calculator.history);

    console.log(history)
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState(''); 
    const handleButtonClick = (value: string) => {
        dispatch(updateDisplay(value));
      };
      
    
      const handleCalculate = () => {
        dispatch(calculateResult());
      };
    
      const handleClear = () => {
        dispatch(clearDisplay());
      };

  return (
    <div className={styles.calculator}>
    <input  value={displayValue} />
    <div className={styles.button_container}>
        
    <button >AC</button>
    <button onClick={() => handleClear()}>BORRAR</button>
    <button onClick={() => handleButtonClick('/')} >/</button>
    <button onClick={() => handleButtonClick('*')} >*</button>
    <button  onClick={() => handleButtonClick('7')} >7</button>
        <button  onClick={() => handleButtonClick('8')} >8</button>
        <button  onClick={() => handleButtonClick('9')} >9</button>
        <button  >
       -
        </button>
        <button  onClick={() => handleButtonClick('8')}>4</button>
        <button  onClick={() => handleButtonClick('9')} >5</button>
        <button onClick={() => handleButtonClick('6')} >6</button>
        <button onClick={() => handleButtonClick('+')}>
          +
        </button>

        <button onClick={() => handleButtonClick('1')} >1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')} >3</button>
        <button  onClick={() => handleButtonClick('-')}>
          -
        </button>


        <button  onClick={() => handleButtonClick('0')} >0</button>
        <button  
        onClick={() => handleButtonClick('*')}
        className={`${styles.button} ${styles.operator}`}>
          x
        </button>

        <button
        className={`${styles.button} ${styles.operator}`}
        >
        %
        </button>

        <button
        className={`${styles.button} ${styles.operator}`}
        onClick={handleCalculate}
         
        >
          =
        </button>
    </div>
    </div>
  )
}
