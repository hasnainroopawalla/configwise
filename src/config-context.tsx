import type { IConfig } from "./config-context.interface";

export function createConfig<TConfig>(config: IConfig<TConfig>) {
  const useConfig = () => config;

  return useConfig;
}
