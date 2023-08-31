
import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({

    name: 'recipesItems',

    initialState: {
        windowWidth: window.innerWidth,
        wordSubmitted: 'avocado',
        isSearchInput: false,
        isInputFocused: false,
        mySearch: '',
    },

    reducers: {
        setWindowWidth: (state, action) => {
            state.windowWidth = action.payload;
        },
        setWordSubmitted: (state, action) => {
            state.wordSubmitted = action.payload;
        },
        setIsSearchInput: (state, action) => {
            state.isSearchInput = action.payload
        },
        setIsInputFocused: (state, action) => {
            state.isInputFocused = action.payload
        },
        setMySearch: (state, action) => {
            state.mySearch = action.payload
        },
    },
    
});

export const getWindowWidth = state => state.recipesItems.windowWidth;
export const getWordSubmitted = state => state.recipesItems.wordSubmitted;
export const getSearchInput = state => state.recipesItems.isSearchInput;
export const getInputFocused = state => state.recipesItems.isInputFocused;
export const getMySearch = state => state.recipesItems.mySearch;
export const { setMyRecipes, setWindowWidth, setWordSubmitted, 
    setIsSearchInput, setIsInputFocused, setMySearch } = recipesSlice.actions;
export default recipesSlice.reducer;