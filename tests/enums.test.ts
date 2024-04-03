import Bowser from "bowser";
import { BrowserName } from "../src/enums";

describe("Enums", () => {
  test("BrowserName", () => {
    expect(Object.keys(Bowser.BROWSER_MAP)).toMatchObject(
      Object.values(BrowserName)
    );
  });
});
