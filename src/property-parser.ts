import type { IProperty } from "./config-context.interface";
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
      filter.
      // if ("browser" in filter) {
      //   filter["browser"];
      // }
    }
  }

  private getBaseValue<TProp>(property: IProperty<TProp>): TProp {
    return property.value;
  }

  private browserFilter() {}
}
