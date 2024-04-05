import Bowser from "bowser";
import { Browser, Engine, OS, Platform } from "../src/enums";

describe("Enums", () => {
  test("Browser", () => {
    expect(Object.keys(Bowser.BROWSER_MAP)).toMatchObject(
      Object.values(Browser)
    );
  });

  test("OS", () => {
    expect(Object.keys(Bowser.OS_MAP)).toMatchObject(Object.values(OS));
  });

  test("Platform", () => {
    expect(Object.keys(Bowser.PLATFORMS_MAP)).toMatchObject(
      Object.values(Platform)
    );
  });

  test("Engine", () => {
    expect(Object.keys(Bowser.ENGINE_MAP)).toMatchObject(Object.values(Engine));
  });
});
