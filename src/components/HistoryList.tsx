"use client"
import React from 'react';


  import { useAppDispatch, useAppSelector } from "@/redux/hooks";
  import styles from './Calculadora.module.css';
  export const HistoryList = () => {
    const history = useAppSelector((state) => state.calculator.history);

  return (
    <div className={styles.historyContainer}>
    <h2>Historial</h2>
    <ul className={styles.historyList}>
      {history.map((entry, index) => (
        <li key={index} className={styles.historyItem}>
          <span className={styles.expression}>{entry.expression}</span>
          <span className={styles.result}>{entry.result}</span>
        </li>
      ))}
    </ul>
  </div>

);
};



