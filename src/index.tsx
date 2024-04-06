import React from "react";
import ReactDOM from "react-dom/client";
import { useConfig } from "./config";

const App = () => {
  const config = useConfig();

  console.log("config", config.showButton[0].value);

  return <span>Component</span>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
