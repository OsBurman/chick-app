import React from 'react';
import { IngredientForm, Loader, Logo, Toast, Header } from './features';
import { SearchResultsContainer } from './features/SearchResultsContainer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Toast />
        <Logo />
        <IngredientForm />
        <Loader />
        <SearchResultsContainer />
      </div>
    </>

  );
}

export default App;
