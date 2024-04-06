import { createConfig } from "./config-context";
import { Browser } from "./enums";

export const useConfig = createConfig({
  showButton: [
    {
      value: true,
    },
    {
      browser: Browser.Chrome,
      value: false,
    },
  ],
  enableModernUi: [
    {
      value: true,
    },
  ],
});
