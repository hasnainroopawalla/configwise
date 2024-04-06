type DefaultConfig = { value: unknown };

type FilterConfig = (
  | { browser: string }
  | { platform: string }
  | { os: string }
  | { engine: string }
) &
  DefaultConfig;

type IConfigValues = [DefaultConfig, ...FilterConfig[]];

export type IConfig<TConfig> = {
  [K in keyof TConfig]: IConfigValues;
};
