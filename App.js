import React from 'react';
import './App.css';
import Listofcards from './listofcards';
import Listoftutorial from './listoftutorial';
import Footers from './footers';
import Signin from './Signin';
import Header from './header';

function App() {
  return (
    <div>
     <Header/>
    <div className = "image1">
    <div className = "image1">
    <img src = "https://echangesinternationaux.hec.ca/wp-content/uploads/2016/06/deakin.jpg" alt = "Deakin" className = 'logo'/>
    </div>
    </div>

    <div className = 'center'>
      <h1>Featured Articles</h1>
    </div>
    <Listofcards/>

    <div className = 'center'>
      <h1>Featured Tutorials</h1>
    </div>

    <Listoftutorial/>
      <Signin/>
      <Footers/>
    </div>
  );
}

export default App;
    
    
   
