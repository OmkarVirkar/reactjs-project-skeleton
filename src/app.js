import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>Testing</button>
    </>
  );
}

export default hot(App);
