import { Browser, OS, Platform } from "../src/enums";
import { createConfig } from "../src/create-config";

describe("createConfig", () => {
  let userAgentGetter: jest.SpyInstance;

  beforeEach(() => {
    userAgentGetter = jest.spyOn(window.navigator, "userAgent", "get");
  });

  test("No valid filter", () => {
    userAgentGetter.mockReturnValue(
      "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 7 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.99 Safari/537.36"
    );

    const result = createConfig({
      property: {
        value: "base",
        filters: [
          {
            browser: [Browser.Edge],
            os: [OS.MacOS],
            value: "edge-macos",
          },
          {
            browser: [Browser.Chrome],
            platform: [Platform.Mobile],
            value: "chrome-mobile",
          },
        ],
      },
    });
    expect(result()).toMatchObject({
      property: "base",
    });
  });

  test("2 valid filters", () => {
    userAgentGetter.mockReturnValue(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0) Gecko/20100101 Firefox/4.0"
    );

    const result = createConfig({
      property: {
        value: "base",
        filters: [
          {
            browser: [Browser.Firefox],
            os: [OS.MacOS],
            value: "firefox-macos",
          },
          {
            browser: [Browser.Chrome],
            platform: [Platform.Mobile],
            value: "chrome-mobile",
          },
        ],
      },
    });
    expect(result()).toMatchObject({
      property: "firefox-macos",
    });
  });

  test("Partial filter returns base value", () => {
    userAgentGetter.mockReturnValue(
      "Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.450 Mobile Safari/534.8+"
    );

    const result = createConfig({
      property: {
        value: "base",
        filters: [
          {
            browser: [Browser.Blackberry],
            platform: [Platform.Desktop],
            value: "blackberry-desktop",
          },
          {
            browser: [Browser.Chrome],
            platform: [Platform.Mobile],
            value: "chrome-mobile",
          },
        ],
      },
    });
    expect(result()).toMatchObject({
      property: "base",
    });
  });
});
