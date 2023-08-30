
import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({

    name: 'recipesItems',

    initialState: {
        windowWidth: window.innerWidth,
        wordSubmitted: 'avocado',
    },

    reducers: {
        setWindowWidth: (state, action) => {
            state.windowWidth = action.payload;
        },
        setWordSubmitted: (state, action) => {
            state.wordSubmitted = action.payload;
        },
    },
    
});

export const getWindowWidth = state => state.recipesItems.windowWidth;
export const getWordSubmitted = state => state.recipesItems.wordSubmitted;


export const { setWindowWidth, setWordSubmitted } = recipesSlice.actions;

export default recipesSlice.reducer;