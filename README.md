# Configwise

Crafting Dynamic Project Configs based on your Browser’s Whims 🌟

`configwise` is a lightweight, strongly-typed package to build and serve project configurations based on the browser environment, platform, os, engine, etc.

## 🏁 Getting started

```
$ npm install configwise
// OR
$ yarn add configwise
```

## 💻 Installation

```
$ git clone https://github.com/hasnainroopawalla/configwise.git
$ cd configwise
$ yarn install
```

## 💡 Usage

`configwise.createConfig` should be executed once on app init. The current browser/OS environment is detected and parsed by [bowser](https://www.npmjs.com/package/bowser) using the `window.navigator.userAgent`.

`configwise` builds and serves the appropriate config property values based on the user-created project configuration with filters such as `Browser`, `Platform`, `OS` and `Engine`.

> These enums are inferred from the bowser package.

Example: Create a configuration for your project with 2 properties - `showButton` and `themeColors` with the appropriate values based on the environment:

```javascript
// config.ts

import { createConfig, Browser, OS, Platform, Engine } from "configwise";

export const config = createConfig({
  showButton: {
    // default fallback base value if no filters are satisfied
    value: true,
    filters: [
      {
        // a filter to set this property as false for Edge and Firefox on MacOS
        browser: [Browser.Edge, Browser.Firefox],
        os: [OS.MacOS],
        value: false,
      },
      {
        // a filter to set this property as true for Chrome on Mobile
        browser: [Browser.Chrome],
        platform: [Platform.Mobile],
        value: true,
      },
    ],
  },

  themeColors: {
    value: {
      light: "#ffffff",
      dark: "#000000",
    },
    filters: [
      {
        browser: [Browser.InternetExplorer],
        engine: [Engine.EdgeHTML]
        value: {
          light: "#dbdbdb",
          dark: "#141414",
        },
      },
    ],
  },
});
```

Import the created `config` in any other file with full type-safety:

```javascript
import * as React from "react";
import config from "./config";

const MyComponent: React.FC = () => {
  // typeof config is inferred and strictly-typed as:
  //
  // typeof config = {
  //    showButton: boolean;
  //    themeColors: {
  //        light: string;
  //        dark: string;
  //    }
  // }

  const shouldShowButton = config.showButton;

  return (
    <>
      <span>Some text</span>
      {shouldShowButton && <button onClick={() => {}}>Submit</button>}
    </>
  );
};
```

## ✏️ Contributing

- Post any issues and suggestions on the GitHub [issues](https://github.com/hasnainroopawalla/configwise/issues) page.
- To contribute, fork the project and then create a pull request back to `master`.
