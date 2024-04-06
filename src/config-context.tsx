import type { IConfig } from "./config-context.interface";

export function createConfig<TConfig>(config: IConfig<TConfig>) {
  const useConfig = () => {
    for (const key in config) {
      const value = config[key];
      console.log(key, value);
    }
  };

  return useConfig;
}
