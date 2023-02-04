import {useState} from 'react'
import '../styles/index.scss'
import s from './Counter.module.scss'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>{counter}</p>
      <button className={s.btn} onClick={() => setCounter(prev => prev + 1)}>+ 1</button>
    </div>
  );
};

export default Counter;