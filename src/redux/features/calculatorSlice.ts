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
        const result = eval(state.displayValue);
        state.displayValue = result.toString();
        state.history.push({
            expression: state.displayValue,
            result: result.toString(),
          });
      } catch (error) {
        state.displayValue = 'Error';
      }
    },
    clearDisplay: (state) => {
      state.displayValue = '';
    },
   
  },
});

export const { updateDisplay, calculateResult, clearDisplay , } = calculatorSlice.actions;

export default calculatorSlice.reducer;
