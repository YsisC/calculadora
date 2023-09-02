// calculatorSlice.js
import { createSlice } from "@reduxjs/toolkit";

type HistoryEntry = {
  expression: string;
  result: string;
};

const initialState = {
  displayValue: "",
  history: [] as HistoryEntry[],
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateDisplay: (state, action) => {
      const newValue = action.payload;

      if (newValue === "0" && state.displayValue === "0") {
        // Evita agregar dos ceros seguidos
        return;
      }
      if (state.displayValue === "0") {
        if (newValue !== "0" && newValue !== ".") {
          state.displayValue = "";
        }
      }

      state.displayValue += newValue;
    },
    changeDisplay: (state, action) => {
      state.displayValue = action.payload;
    },
    calculateResult: (state) => {
      try {
        const expression = state.displayValue;
        const result = eval(expression.toString());
        state.displayValue = result.toString();
        state.history.push({
          expression,
          result,
        });
      } catch (error) {
        state.displayValue = "Error";
      }
    },
    calculatePercentage: (state) => {
      try {
        const expression = state.displayValue;

        const result = (eval(expression.toString()) / 100).toString();
        state.displayValue = result;
        state.history.push({
          expression,
          result,
        });
      } catch (error) {
        state.displayValue = "Error";
      }
    },
    deleteLastCharacter: (state) => {
      state.displayValue = state.displayValue.slice(0, -1);
    },
    removeCharacter: (state, action) => {
      state.history = state.history.filter(
        (op) => op.expression !== action.payload.expression
      );
    },
    deleteHistory: (state) => {
      state.history = [];
    },
    clearDisplay: (state) => {
      state.displayValue = "";
    },
  },
});

export const {
  updateDisplay,
  changeDisplay,
  calculateResult,
  clearDisplay,
  calculatePercentage,
  removeCharacter,
  deleteLastCharacter,
  deleteHistory,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
