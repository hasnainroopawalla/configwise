import React from "react";
import ReactDOM from "react-dom/client";
import { useConfig } from "./config";

const App = () => (
  <>
    <Component1 />
    <Component2 />
    <Component3 />
  </>
);

const Component1 = () => {
  const _config = useConfig();
  console.log("<Component1 />", _config);
  return <span>Component 1</span>;
};

const Component2 = () => {
  const _config = useConfig();
  console.log("<Component2 />", _config);
  return <span>Component 2</span>;
};

const Component3 = () => {
  const [counter, setCounter] = React.useState(0);

  const _config = useConfig();
  const onClick = () => setCounter(counter + 1);

  console.log("<Component3 />", _config);
  return <button onClick={onClick}>Component 3</button>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
