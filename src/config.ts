import { createConfig } from "./config-context";
import { Browser, Platform } from "./enums";

export const useConfig = createConfig({
  showButton: {
    value: true,
    filters: [
      {
        browser: Browser.Edge,
        value: "false",
      },
      {
        platform: Platform.Mobile,
        browser: Browser.Chrome,
        value: true,
      },
    ],
  },
  enableModernUi: {
    value: { name: "base" },
    filters: [
      {
        browser: Browser.InternetExplorer,
        value: { name: "IE" },
      },
    ],
  },
});
