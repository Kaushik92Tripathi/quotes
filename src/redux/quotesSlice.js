
// File: src/redux/quotesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async () => {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    return data.quotes;
  }
);

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default quotesSlice.reducer;