import React from "react";
import ReactDOM from "react-dom/client";
import Bowser from "bowser";

console.log(Bowser.BROWSER_MAP);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<div>hi</div>);
