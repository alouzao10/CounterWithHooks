import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Set up the hook, only in Functional components
  const [counter, setCounter] = useState(0);
  const [isPos, setIsPos] = useState(false);
  const [isEven, setIsEven] = useState(true);
  const [addOn, setAddOn] = useState(1);

  function decrementCount() {
    var newCount = counter - parseInt(addOn);
    setCounter(newCount);
  }

  function incrementCount() {
    var newCount = counter + parseInt(addOn);
    setCounter(newCount);
  }

  function restartCount() {
    setCounter(0);
    setAddOn(1);
  }

  function applyAddOn(e) {
    setAddOn(e.target.value);
  }

  useEffect(() => {
    if (counter % 2 === 0) {
      //console.log('Even Number');
      setIsEven(true);
    } else {
      //console.log('Odd Number');
      setIsEven(false);
    }

    if (counter > 0) {
      //console.log('Positive Number');
      setIsPos(true);
    } else {
      //console.log('Negative Number');
      setIsPos(false);
    }
  }, [counter]);

  return (
    <div className='App'>
      <button onClick={decrementCount}>-</button>
      <span>{counter}</span>
      <button onClick={incrementCount}>+</button>
      <br />
      <label>Add On:</label>
      <input type='number' onChange={applyAddOn} value={addOn}></input>
      <br />
      <button onClick={restartCount}>Restart</button>
      <div>
        {counter !== 0 ? (
          <h1>
            {isPos && counter !== 0 ? (
              <span>Positive {isEven ? 'Even' : 'Odd'} Number</span>
            ) : (
              <span>Negative {isEven ? 'Even' : 'Odd'} Number</span>
            )}
          </h1>
        ) : (
          <h1>We are at 0!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
