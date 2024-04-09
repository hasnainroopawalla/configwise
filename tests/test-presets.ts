import { Browser, Engine, OS, Platform } from "../src/enums";

export const testPresets = [
  {
    name: "2 valid filters",
    userAgent: "",
    environment: {
      browser: "Microsoft Edge",
      platform: "desktop",
      os: "macOS",
      engine: "EdgeHTML",
    },
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
    expectedResult: "edge-macos",
  },

  {
    name: "Partial filter returns base value",
    userAgent: "",
    environment: {
      browser: "Microsoft Edge",
      platform: "desktop",
      os: "macOS",
      engine: "EdgeHTML",
    },
    property: {
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
    },
    expectedResult: "base",
  },

  {
    name: "All 4 valid filters",
    userAgent: "",
    environment: {
      browser: "Chrome",
      platform: "tablet",
      os: "Windows",
      engine: "Gecko",
    },
    property: {
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
    },
    expectedResult: "chrome-tablet-windows-gecko",
  },

  {
    name: "Empty filters array",
    userAgent: "",
    environment: {
      browser: "Chrome",
      platform: "tablet",
      os: "Windows",
      engine: "Gecko",
    },
    property: {
      value: true,
      filters: [],
    },
    expectedResult: true,
  },

  {
    name: "Value as object type",
    userAgent: "",
    environment: {
      browser: "Microsoft Edge",
      platform: "desktop",
      os: "macOS",
      engine: "EdgeHTML",
    },
    property: {
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
    },
    expectedResult: {
      name: "edge-desktop",
      age: 44,
    },
  },
];
