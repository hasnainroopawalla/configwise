import { Browser, Engine, OS, Platform } from "./enums";

// TODO: Potentially move to type utils
type OneOf<T> = {
  [K in keyof T]-?: Pick<T, K> & Partial<T>;
}[keyof T];

export type IFilterValue<TProp> = OneOf<{
  browser: Browser[];
  os: OS[];
  platform: Platform[];
  engine: Engine[];
}> & { value: TProp };

export type IProperty<TProp> = {
  value: TProp;
  filters?: IFilterValue<TProp>[];
};

/**
 * A strongly typed `userConfig` object required to create the `IConfig` object.
 */
export type IUserConfig<TConfig> = {
  [K in keyof TConfig]: IProperty<TConfig[K]>;
};

/**
 * A type-safe object of the config parameters and corresponding values.
 */
export type IConfig<TConfig> = {
  [K in keyof TConfig]: TConfig[K];
};
