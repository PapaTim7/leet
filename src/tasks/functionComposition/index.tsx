import { useState } from "react";

const funcArray1: Array<(x: number) => number> = [
  (x) => x + 1,
  (x) => x * x,
  (x) => 2 * x,
];
const funcArray2: Array<(x: number) => number> = [
  (x) => 10 * x,
  (x) => 10 * x,
  (x) => 10 * x,
];

const compositionReducer = (
  funcArray: Array<(x: number) => number>,
  defaultValue: number | undefined = 0
) => {
  return funcArray.length
    ? funcArray.reduceRight((previousValue, currentFn) => {
        return currentFn(previousValue);
      }, defaultValue)
    : defaultValue;
};

export function FunctionComposition() {
  const [result, setResult] = useState(0);
  const handleResult1 = () => {
    setResult(compositionReducer(funcArray1, 4));
  };
  const handleResult2 = () => {
    setResult(compositionReducer(funcArray2, 1));
  };
  const handleResult3 = () => {
    setResult(compositionReducer([], 42));
  };

  return (
    <div>
      <h2>FunctionComposition</h2>
      <p>
        Given an array of functions [f1, f2, f3, ..., fn], return a new function
        fn that is the function composition of the array of functions. The
        function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). The
        function composition of an empty list of functions is the identity
        function f(x) = x. You may assume each function in the array accepts one
        integer as input and returns one integer as output.
        <br />
        all functions accept and return a single integer
      </p>
      <h4>Example 1</h4>
      <p>
        Input: functions = [x = x + 1, x = x * x, x = 2 * x], x = 4 Output: 65
        Explanation: Evaluating from right to left ... Starting with x = 4. 2 *
        (4) = 8 (8) * (8) = 64 (64) + 1 = 65
      </p>
      <button onClick={handleResult1}>Result</button>
      <h4>Example 2</h4>
      <p>
        Input: functions = [x = 10 * x, x = 10 * x, x = 10 * x], x = 1 Output:
        1000 Explanation: Evaluating from right to left ... 10 * (1) = 10 10 *
        (10) = 100 10 * (100) = 1000
      </p>
      <button onClick={handleResult2}>Result</button>
      <h4>Example 3</h4>
      <p>
        Input: functions = [], x = 42 Output: 42 Explanation: The composition of
        zero functions is the identity function
      </p>
      <button onClick={handleResult3}>Result</button>
      <hr />
      Result {result}
    </div>
  );
}
