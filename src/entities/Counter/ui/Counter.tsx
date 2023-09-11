import {Button, ButtonSize, ButtonTheme} from '@/shared/ui/Button'
import {counterActions, useCounterActions} from '@/entities/Counter/model/slice/counterSlice'
import {useCounterValue} from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
  const counterValue = useCounterValue()
  const {increment, decrement, incrementByAmount} = useCounterActions()
  const incrementHandler = () => increment()
  const decrementHandler = () => decrement()
  const incrementBy10Handler = () => incrementByAmount(10)

  return (
    <div>
      <h1 data-testid="value-title">Result: {counterValue}</h1>
      <Button
        data-testid="increment-btn"
        onClick={incrementHandler}
        size={ButtonSize.XL}
        theme={ButtonTheme.OUTLINE}>+</Button>
      <Button
        data-testid="decrement-btn"
        onClick={decrementHandler}
        size={ButtonSize.XL}
        theme={ButtonTheme.OUTLINE}>-</Button>
      <Button
        data-testid="decrement-btn"
        onClick={incrementBy10Handler}
        size={ButtonSize.XL}
        theme={ButtonTheme.OUTLINE}>add 10</Button>
    </div>
  );
};