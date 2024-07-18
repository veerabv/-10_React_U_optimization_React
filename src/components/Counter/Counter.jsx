import { useState , useCallback,useMemo, useEffect } from 'react'; // usememo added

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import CounterHistory from './CounterHistory.jsx';


function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
//this Memo will check the props in the render time if the props changes then this will render otherwise it will not render
// dont use memo in the nested child component becasue it checks props which is unneccessary , use it in the top level components
const Counter = function Counter({ initialCount }) {   
  
  log('<Counter /> rendered', 1);

// tihs effect is used to set the counter to the entered value when initialCount changes, but we can also change this using key in the place of this component useage
  useEffect(()=>{
    setCounter([{value:initialCount,id:Math.random()*1000}])
  },[initialCount])

  const initialCountIsPrime = useMemo(()=>isPrime(initialCount),[initialCount]);

  const [counter, setCounter] = useState([{value:initialCount,id:Math.random()*1000}]);
  const counterTotal = counter.reduce((acc,crr) => (acc+crr.value),0);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prevCounter) => [{value:-1 ,id:Math.random()*1000 },...prevCounter]);
  },[]);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => [{value:1 ,id:Math.random()*1000 },...prevCounter]);
  },[])
 
  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counterTotal} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counter}/>
    </section>
  );
}

export default Counter;
