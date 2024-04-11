import type { IFilterValue, IProperty } from "./config.interface";
import type { Browser, Engine, OS, Platform } from "./enums";
import type { IEnvironment } from "./environment";

export class PropertyParser {
  private environment: IEnvironment;

  constructor(environment: IEnvironment) {
    this.environment = environment;
  }

  public getValue<TProp>(property: IProperty<TProp>): TProp {
    return this.getFilterValue(property) || this.getBaseValue(property);
  }

  private getFilterValue<TProp>(property: IProperty<TProp>): TProp | undefined {
    if (!property.filters) {
      return;
    }

    for (let i = 0; i < property.filters.length; i++) {
      const filter = property.filters[i];

      if (this.isFilterSatisfied(filter)) {
        return filter.value;
      }
    }
  }

  private isFilterSatisfied<TProp>(filter: IFilterValue<TProp>): boolean {
    return [
      this.validBrowserFilter(filter),
      this.validOsFilter(filter),
      this.validPlatformFilter(filter),
      this.validEngineFilter(filter),
    ].every((element) => element === true);
  }

  private getBaseValue<TProp>(property: IProperty<TProp>): TProp {
    return property.value;
  }

  private validBrowserFilter<TProp>(filter: IFilterValue<TProp>): boolean {
    if (!filter.browser) {
      return true;
    }
    return filter.browser.includes(this.environment.browser as Browser);
  }

  private validOsFilter<TProp>(filter: IFilterValue<TProp>): boolean {
    if (!filter.os) {
      return true;
    }
    return filter.os.includes(this.environment.os as OS);
  }

  private validPlatformFilter<TProp>(filter: IFilterValue<TProp>): boolean {
    if (!filter.platform) {
      return true;
    }
    return filter.platform.includes(this.environment.platform as Platform);
  }

  private validEngineFilter<TProp>(filter: IFilterValue<TProp>): boolean {
    if (!filter.engine) {
      return true;
    }
    return filter.engine.includes(this.environment.engine as Engine);
  }
}
