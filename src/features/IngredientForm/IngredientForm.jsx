import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../';
import { getNutritionInfo, getRecipeInfo } from '../../app/configureStore/middleware';
import { showLoader } from '../../app/configureStore/reducers';

export const IngredientForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const findRecipe = () => {
    dispatch(showLoader(true));
    dispatch(getRecipeInfo(inputValue));
  }
  
  const findNutrition = () => {
    dispatch(showLoader(true));
    dispatch(getNutritionInfo(inputValue));
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <Input value={inputValue} handleOnChange={handleOnChange} placeholder={'Enter Ingredient(s)...'} />
      <div>
        <Button onClick={findRecipe}>Find Recipe</Button>
        <Button onClick={findNutrition}>Find Nutrition Info</Button>
      </div>
    </>
  )
};
