import { createConfig } from "./config-context";
import { Browser, OS, Platform } from "./enums";

export const useConfig = createConfig({
  showButton: {
    value: true,
    filters: [
      {
        browser: [Browser.Edge],
        os: [OS.MacOS],
        value: false,
      },
      {
        browser: [Browser.Chrome],
        platform: [Platform.Mobile],
        value: true,
      },
    ],
  },
  // enableModernUi: {
  //   value: { name: "base" },
  //   filters: [
  //     {
  //       browser: [Browser.InternetExplorer, Browser.Chrome],
  //       value: { name: "IE" },
  //     },
  //   ],
  // },
});
