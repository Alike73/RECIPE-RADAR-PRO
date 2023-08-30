
import { configureStore } from '@reduxjs/toolkit';
import recipesItems from './RecipesSlice';

export default configureStore({
    reducer: {
        recipesItems: recipesItems
    }
})