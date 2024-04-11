import React from "react";
import ReactDOM from "react-dom/client";
import { configwise } from "./config";

const App = () => (
  <>
    <Component1 />
    <Component2 />
    <Component3 />
  </>
);

const Component1 = () => <span>Component 1</span>;

const Component2 = () => <span>Component 2</span>;

const Component3 = () => {
  const [counter, setCounter] = React.useState(0);

  const onClick = () => setCounter(counter + 1);

  return <button onClick={onClick}>Component 3</button>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
