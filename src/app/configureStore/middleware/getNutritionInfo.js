import axios from "axios";

import { saveSearchTypeAndResults, showLoader, showToast } from "../reducers";

const calorieNinjasApiKey = "+s27KaD9wWKFWEwKb9ftAQ==XqudOuNZQdLY2ck7";

export const getNutritionInfo = (inputValue) => {
  return async function getNutritionInfoThunk(dispatch, getState) {
    try {
      const {
        data: { items },
      } = await axios(
        `https://api.calorieninjas.com/v1/nutrition?query=${inputValue}`,
        { headers: { "X-Api-Key": calorieNinjasApiKey } }
      );

      const toastTitle = items.length ? 'Nutrition received!' : 'No Nutrition found.';

      dispatch(saveSearchTypeAndResults({ type: 'nutrition', results: items }));
      dispatch(showToast({ title: toastTitle, type: 'success' }));
    } catch (error) {
      dispatch(showToast({ title: 'Failed to get Nutrition :(', type: 'error' }))
    } finally {
      dispatch(showLoader(false));
    }

  };
}
