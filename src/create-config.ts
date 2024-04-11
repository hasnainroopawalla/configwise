import { PropertyParser } from "./property-parser";
import type { IConfig, IUserConfig } from "./config.interface";
import { getEnvironment } from "./environment";

export function createConfig<TUserConfig>(
  userConfig: IUserConfig<TUserConfig>
) {
  const environment = getEnvironment();

  const propParser = new PropertyParser(environment);

  const configValues: IConfig<TUserConfig> = {} as IConfig<TUserConfig>;

  for (const propertyName in userConfig) {
    configValues[propertyName] = propParser.getValue(userConfig[propertyName]);
  }

  return configValues;
}
