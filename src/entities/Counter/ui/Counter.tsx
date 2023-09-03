import {Button, ButtonSize, ButtonTheme} from '@/shared/ui/Button'
import {useDispatch, useSelector} from 'react-redux'
import {counterActions} from '@/entities/Counter/model/slice/counterSlice'
import {getCounterValue} from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {dispatch(counterActions.increment())}
  const decrement = () => {dispatch(counterActions.decrement())}

  return (
    <div>
      <h1 data-testid="value-title">Result: {counterValue}</h1>
      <Button
        data-testid="increment-btn"
        onClick={increment}
        size={ButtonSize.XL}
        theme={ButtonTheme.OUTLINE}>+</Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrement}
        size={ButtonSize.XL}
        theme={ButtonTheme.OUTLINE}>-</Button>
    </div>
  );
};