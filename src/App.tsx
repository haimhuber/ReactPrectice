import React, { use } from 'react';
import { Gallery } from './Components/Gallery/Gallery';
import { MainArticle } from './Components/MainArticle/MainArticle';
import { List } from './Components/List/List';
import './App.css';
import { CheesecakeRecipe } from './Components/CheesecakeRecipe/CheesecakeRecipe';
import { useState } from 'react';
import { Quiz } from './Components/Quiz/Quiz';
function App() {
  const questions = ['Where do you live?', 'What is your name', 'Favorite city', ''];
  return (
    <div className="App">
      <Quiz
        header={questions}></Quiz>


    </div>
  );
}

export default App;
