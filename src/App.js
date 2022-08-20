import React from 'react';
import WordCard from './WordCard';
import './App.css';
import Hint from './Hintstate';
const word = "Hello";
function App() {
  return (
    <div>
      <WordCard value="hello"/>
      <Hint></Hint>
    </div>
  );

}
export default App;