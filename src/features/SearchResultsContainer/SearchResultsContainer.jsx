import { Nutrition } from './Nutrition';
import { Recipe } from './Recipe';
import { useSelector } from 'react-redux';
import css from './SearchResultsContainer.module.css';

export const SearchResultsContainer = () => {
  const searchType = useSelector((state) => state.search.type);
  const searchResults = useSelector((state) => state.search.results);

  return (
    <div className={css.searchResultsContainer}>
      {
        searchType === 'recipes' ?
          searchResults.map((result) => (
            <Recipe key={result.title} {...result} />
          ))
        :
          searchResults.map((result) => (
            <Nutrition key={result.name} {...result} />
          ))
      }
    </div>
  )
}