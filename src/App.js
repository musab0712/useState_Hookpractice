import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setstate] = useState(0);
  console.log(count);
  function increse() {
    setstate(count + 1);
  }
  function decrease() {
    setstate(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increse}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
