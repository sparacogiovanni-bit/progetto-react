import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h2>Contatore: {count}</h2>

      <div className="counter-buttons">
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrementa</button>
      </div>
    </div>
  );
}

export default Counter;