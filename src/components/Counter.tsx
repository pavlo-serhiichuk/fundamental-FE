import {useState} from 'react'
import '../main.scss'
const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(prev => prev + 1)}>+ 1</button>
    </div>
  );
};

export default Counter;