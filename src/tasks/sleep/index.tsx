import { useState } from "react";

const sleep = (time: number) =>
  new Promise((res) => {
    setTimeout(() => res(time), time);
  });

const getTimeoutValue = async (time: number) => {
  const t = Date.now();
  await sleep(time);
  return Date.now() - t;
};

export function Sleep() {
  const [result, setResult] = useState(0);
  const handleResult1 = async () => {
    setResult(await getTimeoutValue(100));
  };
  const handleResult2 = async () => {
    setResult(await getTimeoutValue(200));
  };

  return (
    <div>
      <h2>Sleep</h2>
      <p>
        Given a positive integer millis (from 1 to 2000), write an asynchronous
        function that sleeps for millis milliseconds. It can resolve any value.
      </p>
      <h4>Example 1</h4>
      <p>
        Input: millis = 100 Output: 100 Explanation: It should return a promise
        that resolves after 100ms.
      </p>
      <pre>
        {`let t = Date.now();
sleep(100).then(() = {
  console.log(Date.now() - t); // 100
});`}
      </pre>
      <button onClick={handleResult1}>Result</button>
      <h4>Example 2</h4>
      <p>
        Input: millis = 200 Output: 200 Explanation: It should return a promise
        that resolves after 200ms.
      </p>
      <button onClick={handleResult2}>Result</button>
      <hr />
      Result {result}
    </div>
  );
}
