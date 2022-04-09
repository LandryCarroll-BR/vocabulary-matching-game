import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    list: [],
    activeIndex: null,
    previousIndex: null
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    setPreviousIndex: (state, action) => {
      state.previousIndex = action.payload;
    }
  }
});

export const { setList, setActiveIndex, setPreviousIndex } = gameSlice.actions;

export const selectList = state => state.game.list;
export const selectActiveIndex = state => state.game.activeIndex;
export const selectPreviousIndex = state => state.game.previousIndex;

export default gameSlice.reducer;