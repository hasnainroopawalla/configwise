import Bowser from "bowser";
import * as enums from "../src/enums";

const compareObjects = (
  bowserObj: Record<string, string>,
  configwiseEnum: object
) =>
  expect(Object.values(bowserObj).sort()).toMatchObject(
    Object.values(configwiseEnum).sort()
  );

describe("Enums", () => {
  test("Browser", () => {
    compareObjects(Bowser.BROWSER_MAP, enums.Browser);
  });

  test("OS", () => {
    compareObjects(Bowser.OS_MAP, enums.OS);
  });

  test("Platform", () => {
    compareObjects(Bowser.PLATFORMS_MAP, enums.Platform);
  });

  test("Engine", () => {
    compareObjects(Bowser.ENGINE_MAP, enums.Engine);
  });
});
