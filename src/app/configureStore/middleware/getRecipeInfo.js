import axios from "axios";

import { saveSearchTypeAndResults, showLoader, showToast } from "../reducers";

const formatRecipeInput = (input) => {
  return input.replaceAll(" and", ",").replaceAll(" ", "%20");
};

export const getRecipeInfo = (inputValue) => {
  return async function getRecipeInfoThunk(dispatch, getState) {
    const queryString = formatRecipeInput(inputValue);

    try {
      const { data } = await axios(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${queryString}&apiKey=fcc5dc3520ab4a5e8b9bde8093ef5b94`
      );

      const toastTitle = data.length ? 'Recipes received!' : 'No recipes found.';

      dispatch(saveSearchTypeAndResults({ type: 'recipes', results: data }));
      dispatch(showToast({ title: toastTitle, type: 'success' }));
    } catch (error) {
      dispatch(showToast({ title: 'Failed to get recipes :(', type: 'error' }))
    } finally {
      dispatch(showLoader(false))
    }

  }
};
