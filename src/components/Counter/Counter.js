import React, {useState} from 'react';
import CounterView from './CounterView';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(c => c + 1);
  }

  return <CounterView counter={counter} onClickButton={handleButtonClick} />;
}
