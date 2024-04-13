import { PropertyParser } from "./property-parser";
import type { IConfig, IUserConfig } from "./config.interface";
import { getEnvironment } from "./environment";

/**
 * Creates a configwise project configuration.
 *
 * @param userConfig - The project configuration with filters, properties and values.
 * @returns The filtered property values based on the browser environment.
 */
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
