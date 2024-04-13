import { getParser } from "bowser";

export type IEnvironment = {
  browser: string;
  platform: string;
  os: string;
  engine: string;
};

export const getEnvironment = (): IEnvironment => {
  const parser = getParser(window.navigator.userAgent);
  return {
    browser: parser.getBrowserName(),
    platform: parser.getPlatformType(),
    os: parser.getOSName(),
    engine: parser.getEngineName(),
  };
};
