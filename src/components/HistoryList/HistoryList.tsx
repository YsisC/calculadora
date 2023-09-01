"use client";
import React from "react";
import styles from "./HistoryList.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  removeCharacter,
  deleteHistory,
} from "../../redux/features/calculatorSlice";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import Link from "next/link";

export const HistoryList = () => {
  const history = useAppSelector((state) => state.calculator.history);
  const dispatch = useAppDispatch();

  const handleRemove = (value: string) => {
    dispatch(removeCharacter({ expression: value }));
  };
  const handleDeleteHistory = () => {
    dispatch(deleteHistory());
  };

  return (
    <section className={styles.historyContainer}>
      <h2 className={"text_primary"}>History</h2>

      {history.map((entry, index) => (
        <div key={index} className={styles.historyItem}>
          <div className={styles.headerHistory}>
            <p className={styles.expression}>{entry.expression}</p>
            <button
              className={styles.button}
              onClick={() => handleRemove(entry.expression)}
            >
              {" "}
              <DeleteForeverOutlinedIcon className="link_second" />{" "}
            </button>
          </div>
          <div className={styles.headerHistory}>
            <h2 className={styles.result}>{entry.result}</h2>
          </div>
        </div>
      ))}
      {history.length === 0 ? (
        <div className={styles.historyContainer}>
          <p>No hay historial</p>
          <Link className={`link underline`} href={"/"}>
            Volver
          </Link>
        </div>
      ) : (
        <button
          onClick={() => handleDeleteHistory()}
          className={`${styles.button} link underline`}
        >
          Clear
        </button>
      )}
    </section>
  );
};
