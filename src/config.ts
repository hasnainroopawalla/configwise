import { createConfig } from "./config-context";
import { Browser } from "./enums";

export const useConfig = createConfig({
  showButton: [
    {
      value: true,
    },
    {
      browser: Browser.Edge,
      value: false,
    },
  ],
  enableModernUi: [
    {
      value: { name: 33 },
    },
  ],
});
