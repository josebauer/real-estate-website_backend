import { ResourceWithOptions } from "adminjs";
import { Category, RealEstate, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { realEstateResourceFeatures, realEstateResourceOptions } from "./realEstate";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: RealEstate,
    options: realEstateResourceOptions,
    features: realEstateResourceFeatures
  },
  {
    resource: User,
    options: userResourceOptions
  }
]