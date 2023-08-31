"use client";
import React from "react";
import styles from "./HistoryList.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
removeCharacter
} from "../redux/features/calculatorSlice";

export const HistoryList = () => {

  const history = useAppSelector((state) => state.calculator.history);
  const dispatch = useAppDispatch();

  const handleRemove = (value: string) => {
    dispatch(removeCharacter(value));
  };
  return (
    <div className={styles.historyContainer}>
      <h2 className={styles.text_primary}>History</h2>

      {history.map((entry, index) => (
        <div key={index} className={styles.historyItem}>
          <div className={styles.headerHistory}>
            <p className={styles.expression}>{entry.expression}</p>
            <button
             className={styles.expression}
             onClick={() => handleRemove(entry.expression)}>B</button>
          </div>
          <div className={styles.headerHistory}>

          <h2 className={styles.result}>{entry.result}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
