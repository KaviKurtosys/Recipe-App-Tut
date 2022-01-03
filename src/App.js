import React, { useEffect, useState } from 'react'
import './App.css';

const App = () => {

  const APP_ID = '85e22043';
  const APP_KEY = '563f237b3f1e11a2e74e7b54c4e49caf';
  

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('Effect has been run');
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }

  return (
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"></input>
          <button 
            className="search-button" 
            type="submit"
          >
            Search
          </button>
        </form>
        <h1 onClick={ () => setCounter(counter + 1)}>{counter}</h1>
      </div>
  )
}

export default App;

