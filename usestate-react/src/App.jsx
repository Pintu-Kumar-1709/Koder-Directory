import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  function increaseVal() {
    setnum(num + 1);
  }

  function decreaseVal() {
    setnum(num - 1);
  }

  function jump10() {
    setnum(num + 10);
  }

  function jump5() {
    setnum(num + 5);
  }
  return (
    <>
      <h1> Value of num is :- {num}</h1>
      <button onClick={increaseVal}>increase val</button>
      <button onClick={decreaseVal}>decrease val</button>
      <button onClick={jump10}> jump by 10</button>
      <button onClick={jump5}>jump by 5</button>
    </>
  );
};

export default App;
