import { ResourceWithOptions } from "adminjs";
import { Category, Property } from "../../models";
import { categoryResourceOptions } from "./category";
import { propertyResourceFeatures, propertyResourceOptions } from "./property";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Property,
    options: propertyResourceOptions,
    features: propertyResourceFeatures
  }
]