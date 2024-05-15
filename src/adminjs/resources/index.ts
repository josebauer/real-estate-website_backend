import { ResourceWithOptions } from "adminjs";
import { Category, Properties } from "../../models";
import { categoryResourceOptions } from "./category";
import { propertyResourceFeatures, propertyResourceOptions } from "./properties";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Properties,
    options: propertyResourceOptions,
    features: propertyResourceFeatures
  }
]