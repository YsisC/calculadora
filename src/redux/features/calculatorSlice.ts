// calculatorSlice.js
import { createSlice } from '@reduxjs/toolkit';

type HistoryEntry = {
    expression: string;
    result: string;
  };

const initialState = {
  displayValue: '',
  history: [] as HistoryEntry[],
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateDisplay: (state, action) => {
      state.displayValue += action.payload;
    },
    calculateResult: (state) => {
      try {
        const expression = state.displayValue;
        const result = eval(expression.toString());
        state.displayValue = result
        state.history.push({
            expression,
            result
          });
      } catch (error) {
        state.displayValue = 'Error';
      }
    },
    deleteLastCharacter: (state) => {
      state.displayValue = state.displayValue.slice(0, -1); // Elimina el último carácter
    },
    removeCharacter: (state, action) => {
   state.history =   state.history.filter( 
    op => op.expression !== action.payload.expression )
    },
    clearDisplay: (state) => {
      state.displayValue = '';
    },
   
  },
});

export const { updateDisplay, calculateResult, clearDisplay , removeCharacter, deleteLastCharacter } = calculatorSlice.actions;

export default calculatorSlice.reducer;