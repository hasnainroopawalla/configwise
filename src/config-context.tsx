import type {
  IConfig,
  IDynamicConfigFilters,
  IUserConfig,
} from "./config-context.interface";
import { IEnvironment, getEnvironment } from "./environment";

// TODO: move to utils
const getBaseValue = <TUserConfig,>(
  configFilters: IDynamicConfigFilters<TUserConfig>
) =>
  configFilters.find(
    (configValue) =>
      Object.keys(configValue).length === 1 && "value" in configValue
  )!;

const getParameterValue = <TUserConfig,>(
  parameterFilters: IDynamicConfigFilters<TUserConfig>,
  environment: IEnvironment
) => {
  // const ok = BROWSER_ALIASES_MAP[environment.browser];
  // console.log(
  //   "final",
  //   environment.browser,
  //   Browser.Edge,
  //   BROWSER_ALIASES_MAP[environment.browser]
  // );
  // parameterFilters.map((filter) => console.log(filter));
};

export function createConfig<TUserConfig>(
  userConfig: IUserConfig<TUserConfig>
) {
  const environment = getEnvironment();
  console.log(environment);

  const configValues: IConfig<TUserConfig> = {} as IConfig<TUserConfig>;
  for (const key in userConfig) {
    const parameterFilters = userConfig[key];
    const baseParameter = getBaseValue(parameterFilters);
    console.log(key);
    getParameterValue(parameterFilters, environment);
    configValues[key] = baseParameter.value;
  }

  return () => configValues;
}
