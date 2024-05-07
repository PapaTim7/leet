import { useState } from "react";

const counterWrapper = (init: number) => {
  let count = init;
  return () => {
    return ++count;
  };
};

export function CounterClosures() {
  const [counter, setCounter] = useState(10);
  const counterClosure = counterWrapper(counter);

  return (
    <div>
      <h2>Counter</h2>
      <p>
        Given an integer n, return a counter function. This counter function
        initially returns n and then returns 1 more than the previous value
        every subsequent time it is called (n, n + 1, n + 2, etc).
      </p>
      <h4>Example</h4>
      <p>
        Input: n = 10 ["call","call","call"] Output: [10,11,12] Explanation:
        counter() = 10 // The first time counter() is called, it returns n.
        counter() = 11 // Returns 1 more than the previous time. counter() = 12
        // Returns 1 more than the previous time.
      </p>
      <button onClick={() => setCounter(counterClosure())}>Count</button>{" "}
      {counter}
    </div>
  );
}
