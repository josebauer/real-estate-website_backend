import { ResourceWithOptions } from "adminjs";
import { Category, Property, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { propertyResourceFeatures, propertyResourceOptions } from "./property";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Property,
    options: propertyResourceOptions,
    features: propertyResourceFeatures
  },
  {
    resource: User,
    options: userResourceOptions
  }
]