import React, { useReducer, useState } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    default:
      return state;
  }
};
const ReducerHookexample = () => {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => dispatch('Increment')}>Increment</button>
      <button onClick={() => dispatch('Decrement')}>Decrement</button>
    </div>
  );
};

export default ReducerHookexample;
