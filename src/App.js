import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [count, setCountDown] = useState(10);
  useEffect(() => {
    if (count === 0) {
      alert("Time up!");
      return;
    }
    var timer = setInterval(() => {
      setCountDown(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
      </header>
    </div>
  );
}

export default App;
