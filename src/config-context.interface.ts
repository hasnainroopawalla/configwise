export type IBaseConfig<TConfigValueType> = { value: TConfigValueType };

type IConfigWithFilters<TConfigValueType> = (
  | { browser: string }
  | { platform: string }
  | { os: string }
  | { engine: string }
) &
  IBaseConfig<TConfigValueType>;

type IConfigFilters<TConfigFilter> = [
  IBaseConfig<TConfigFilter>,
  ...IConfigWithFilters<TConfigFilter>[]
];

/**
 * A strongly typed `userConfig` object required to create the `IConfig` object.
 */
export type IUserConfig<TConfig> = {
  [K in keyof TConfig]: IConfigFilters<TConfig[K]>;
};

/**
 * A type-safe object of the config parameters and corresponding values returned by the `useConfig` hook.
 */
export type IConfig<TConfig> = {
  [K in keyof TConfig]: IBaseConfig<TConfig[K]>["value"];
};

/**
 * A dynamic type to infer the filters of a specific config parameter.
 */
export type IDynamicConfigFilters<TUserConfig> =
  IUserConfig<TUserConfig>[Extract<keyof TUserConfig, string>];
