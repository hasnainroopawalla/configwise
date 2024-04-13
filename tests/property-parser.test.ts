import { Browser, OS, Platform, Engine } from "../src/enums";
import { PropertyParser } from "../src/property-parser";
// import { testPresets } from "./test-presets";

describe("PropertyParser", () => {
  test("2 valid filters", () => {
    const environment = {
      browser: "Microsoft Edge",
      platform: "desktop",
      os: "macOS",
      engine: "EdgeHTML",
    };

    const property = {
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
    };
    const result = new PropertyParser(environment).getValue(property);
    expect(result).toBe("edge-macos");
  });

  test("Partial filter returns base value", () => {
    const environment = {
      browser: "Microsoft Edge",
      platform: "desktop",
      os: "macOS",
      engine: "EdgeHTML",
    };

    const property = {
      value: "base",
      filters: [
        {
          browser: [Browser.Edge],
          os: [OS.Android],
          value: "edge-android",
        },
        {
          browser: [Browser.Chrome],
          os: [OS.MacOS],
          value: "chrome-macOS",
        },
      ],
    };
    const result = new PropertyParser(environment).getValue(property);
    expect(result).toBe("base");
  });

  test("All 4 valid filters", () => {
    const environment = {
      browser: "Chrome",
      platform: "tablet",
      os: "Windows",
      engine: "Gecko",
    };

    const property = {
      value: "base",
      filters: [
        {
          browser: [Browser.Edge],
          os: [OS.iOS],
          value: "edge-ios",
        },
        {
          browser: [Browser.Chrome],
          platform: [Platform.Tablet],
          os: [OS.Windows],
          engine: [Engine.Gecko],
          value: "chrome-tablet-windows-gecko",
        },
      ],
    };
    const result = new PropertyParser(environment).getValue(property);
    expect(result).toBe("chrome-tablet-windows-gecko");
  });

  test("Empty filters array", () => {
    const environment = {
      browser: "Chrome",
      platform: "tablet",
      os: "Windows",
      engine: "Gecko",
    };

    const property = {
      value: "base",
      filters: [],
    };
    const result = new PropertyParser(environment).getValue(property);
    expect(result).toBe("base");
  });

  test("Value as object type", () => {
    const environment = {
      browser: "Microsoft Edge",
      platform: "desktop",
      os: "macOS",
      engine: "EdgeHTML",
    };

    const property = {
      value: {
        name: "base",
        age: 4,
      },
      filters: [
        {
          browser: [Browser.Edge],
          platform: [Platform.Desktop],
          value: {
            name: "edge-desktop",
            age: 44,
          },
        },
        {
          browser: [Browser.Chrome],
          os: [OS.MacOS],
          value: {
            name: "chrome-macos",
            age: 12,
          },
        },
      ],
    };
    const result = new PropertyParser(environment).getValue(property);
    expect(result).toMatchObject({
      name: "edge-desktop",
      age: 44,
    });
  });
});
