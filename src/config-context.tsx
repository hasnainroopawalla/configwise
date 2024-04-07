import type {
  IConfig,
  IDynamicConfigFilters,
  IUserConfig,
} from "./config-context.interface";

// TODO: move to utils
export const getBaseConfig = <TUserConfig,>(
  configFilters: IDynamicConfigFilters<TUserConfig>
) =>
  configFilters.find(
    (configValue) =>
      Object.keys(configValue).length === 1 && "value" in configValue
  )!;

export function createConfig<TUserConfig>(
  userConfig: IUserConfig<TUserConfig>
) {
  const configValues: IConfig<TUserConfig> = {} as IConfig<TUserConfig>;

  const useConfig = () => {
    for (const key in userConfig) {
      const configFilters = userConfig[key];

      const baseConfig = getBaseConfig(configFilters);

      configValues[key] = baseConfig.value;
    }
    return configValues;
  };

  return useConfig;
}
