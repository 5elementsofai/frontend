/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateProductInput = {
  id?: string | null;
  name: string;
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelProductConditionInput | null> | null;
  or?: Array<ModelProductConditionInput | null> | null;
  not?: ModelProductConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateProductInput = {
  id: string;
  name?: string | null;
};

export type DeleteProductInput = {
  id?: string | null;
};

export type CreateServiceInput = {
  id?: string | null;
  title: string;
  productID: string;
};

export type ModelServiceConditionInput = {
  title?: ModelStringInput | null;
  productID?: ModelIDInput | null;
  and?: Array<ModelServiceConditionInput | null> | null;
  or?: Array<ModelServiceConditionInput | null> | null;
  not?: ModelServiceConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateServiceInput = {
  id: string;
  title?: string | null;
  productID?: string | null;
};

export type DeleteServiceInput = {
  id?: string | null;
};

export type CreateSolutionInput = {
  id?: string | null;
  title: string;
  productID: string;
};

export type ModelSolutionConditionInput = {
  title?: ModelStringInput | null;
  productID?: ModelIDInput | null;
  and?: Array<ModelSolutionConditionInput | null> | null;
  or?: Array<ModelSolutionConditionInput | null> | null;
  not?: ModelSolutionConditionInput | null;
};

export type UpdateSolutionInput = {
  id: string;
  title?: string | null;
  productID?: string | null;
};

export type DeleteSolutionInput = {
  id?: string | null;
};

export type CreateFeatureInput = {
  id?: string | null;
  title: string;
  productID: string;
};

export type ModelFeatureConditionInput = {
  title?: ModelStringInput | null;
  productID?: ModelIDInput | null;
  and?: Array<ModelFeatureConditionInput | null> | null;
  or?: Array<ModelFeatureConditionInput | null> | null;
  not?: ModelFeatureConditionInput | null;
};

export type UpdateFeatureInput = {
  id: string;
  title?: string | null;
  productID?: string | null;
};

export type DeleteFeatureInput = {
  id?: string | null;
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelProductFilterInput | null> | null;
  or?: Array<ModelProductFilterInput | null> | null;
  not?: ModelProductFilterInput | null;
};

export type ModelServiceFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  productID?: ModelIDInput | null;
  and?: Array<ModelServiceFilterInput | null> | null;
  or?: Array<ModelServiceFilterInput | null> | null;
  not?: ModelServiceFilterInput | null;
};

export type ModelSolutionFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  productID?: ModelIDInput | null;
  and?: Array<ModelSolutionFilterInput | null> | null;
  or?: Array<ModelSolutionFilterInput | null> | null;
  not?: ModelSolutionFilterInput | null;
};

export type ModelFeatureFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  productID?: ModelIDInput | null;
  and?: Array<ModelFeatureFilterInput | null> | null;
  or?: Array<ModelFeatureFilterInput | null> | null;
  not?: ModelFeatureFilterInput | null;
};

export type CreateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  services: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  solutions: {
    __typename: "ModelSolutionConnection";
    items: Array<{
      __typename: "Solution";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  features: {
    __typename: "ModelFeatureConnection";
    items: Array<{
      __typename: "Feature";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  services: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  solutions: {
    __typename: "ModelSolutionConnection";
    items: Array<{
      __typename: "Solution";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  features: {
    __typename: "ModelFeatureConnection";
    items: Array<{
      __typename: "Feature";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProductMutation = {
  __typename: "Product";
  id: string;
  name: string;
  services: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  solutions: {
    __typename: "ModelSolutionConnection";
    items: Array<{
      __typename: "Solution";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  features: {
    __typename: "ModelFeatureConnection";
    items: Array<{
      __typename: "Feature";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteServiceMutation = {
  __typename: "Service";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSolutionMutation = {
  __typename: "Solution";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSolutionMutation = {
  __typename: "Solution";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSolutionMutation = {
  __typename: "Solution";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateFeatureMutation = {
  __typename: "Feature";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFeatureMutation = {
  __typename: "Feature";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFeatureMutation = {
  __typename: "Feature";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetProductQuery = {
  __typename: "Product";
  id: string;
  name: string;
  services: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  solutions: {
    __typename: "ModelSolutionConnection";
    items: Array<{
      __typename: "Solution";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  features: {
    __typename: "ModelFeatureConnection";
    items: Array<{
      __typename: "Feature";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProductsQuery = {
  __typename: "ModelProductConnection";
  items: Array<{
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetServiceQuery = {
  __typename: "Service";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListServicesQuery = {
  __typename: "ModelServiceConnection";
  items: Array<{
    __typename: "Service";
    id: string;
    title: string;
    productID: string;
    product: {
      __typename: "Product";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSolutionQuery = {
  __typename: "Solution";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSolutionsQuery = {
  __typename: "ModelSolutionConnection";
  items: Array<{
    __typename: "Solution";
    id: string;
    title: string;
    productID: string;
    product: {
      __typename: "Product";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetFeatureQuery = {
  __typename: "Feature";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListFeaturesQuery = {
  __typename: "ModelFeatureConnection";
  items: Array<{
    __typename: "Feature";
    id: string;
    title: string;
    productID: string;
    product: {
      __typename: "Product";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  services: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  solutions: {
    __typename: "ModelSolutionConnection";
    items: Array<{
      __typename: "Solution";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  features: {
    __typename: "ModelFeatureConnection";
    items: Array<{
      __typename: "Feature";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  services: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  solutions: {
    __typename: "ModelSolutionConnection";
    items: Array<{
      __typename: "Solution";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  features: {
    __typename: "ModelFeatureConnection";
    items: Array<{
      __typename: "Feature";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProductSubscription = {
  __typename: "Product";
  id: string;
  name: string;
  services: {
    __typename: "ModelServiceConnection";
    items: Array<{
      __typename: "Service";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  solutions: {
    __typename: "ModelSolutionConnection";
    items: Array<{
      __typename: "Solution";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  features: {
    __typename: "ModelFeatureConnection";
    items: Array<{
      __typename: "Feature";
      id: string;
      title: string;
      productID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteServiceSubscription = {
  __typename: "Service";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSolutionSubscription = {
  __typename: "Solution";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSolutionSubscription = {
  __typename: "Solution";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSolutionSubscription = {
  __typename: "Solution";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFeatureSubscription = {
  __typename: "Feature";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFeatureSubscription = {
  __typename: "Feature";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFeatureSubscription = {
  __typename: "Feature";
  id: string;
  title: string;
  productID: string;
  product: {
    __typename: "Product";
    id: string;
    name: string;
    services: {
      __typename: "ModelServiceConnection";
      nextToken: string | null;
    } | null;
    solutions: {
      __typename: "ModelSolutionConnection";
      nextToken: string | null;
    } | null;
    features: {
      __typename: "ModelFeatureConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProduct(
    input: CreateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<CreateProductMutation> {
    const statement = `mutation CreateProduct($input: CreateProductInput!, $condition: ModelProductConditionInput) {
        createProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          services {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          solutions {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProductMutation>response.data.createProduct;
  }
  async UpdateProduct(
    input: UpdateProductInput,
    condition?: ModelProductConditionInput
  ): Promise<UpdateProductMutation> {
    const statement = `mutation UpdateProduct($input: UpdateProductInput!, $condition: ModelProductConditionInput) {
        updateProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          services {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          solutions {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProductMutation>response.data.updateProduct;
  }
  async DeleteProduct(
    input: DeleteProductInput,
    condition?: ModelProductConditionInput
  ): Promise<DeleteProductMutation> {
    const statement = `mutation DeleteProduct($input: DeleteProductInput!, $condition: ModelProductConditionInput) {
        deleteProduct(input: $input, condition: $condition) {
          __typename
          id
          name
          services {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          solutions {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProductMutation>response.data.deleteProduct;
  }
  async CreateService(
    input: CreateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<CreateServiceMutation> {
    const statement = `mutation CreateService($input: CreateServiceInput!, $condition: ModelServiceConditionInput) {
        createService(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateServiceMutation>response.data.createService;
  }
  async UpdateService(
    input: UpdateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<UpdateServiceMutation> {
    const statement = `mutation UpdateService($input: UpdateServiceInput!, $condition: ModelServiceConditionInput) {
        updateService(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateServiceMutation>response.data.updateService;
  }
  async DeleteService(
    input: DeleteServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<DeleteServiceMutation> {
    const statement = `mutation DeleteService($input: DeleteServiceInput!, $condition: ModelServiceConditionInput) {
        deleteService(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteServiceMutation>response.data.deleteService;
  }
  async CreateSolution(
    input: CreateSolutionInput,
    condition?: ModelSolutionConditionInput
  ): Promise<CreateSolutionMutation> {
    const statement = `mutation CreateSolution($input: CreateSolutionInput!, $condition: ModelSolutionConditionInput) {
        createSolution(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSolutionMutation>response.data.createSolution;
  }
  async UpdateSolution(
    input: UpdateSolutionInput,
    condition?: ModelSolutionConditionInput
  ): Promise<UpdateSolutionMutation> {
    const statement = `mutation UpdateSolution($input: UpdateSolutionInput!, $condition: ModelSolutionConditionInput) {
        updateSolution(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSolutionMutation>response.data.updateSolution;
  }
  async DeleteSolution(
    input: DeleteSolutionInput,
    condition?: ModelSolutionConditionInput
  ): Promise<DeleteSolutionMutation> {
    const statement = `mutation DeleteSolution($input: DeleteSolutionInput!, $condition: ModelSolutionConditionInput) {
        deleteSolution(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSolutionMutation>response.data.deleteSolution;
  }
  async CreateFeature(
    input: CreateFeatureInput,
    condition?: ModelFeatureConditionInput
  ): Promise<CreateFeatureMutation> {
    const statement = `mutation CreateFeature($input: CreateFeatureInput!, $condition: ModelFeatureConditionInput) {
        createFeature(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFeatureMutation>response.data.createFeature;
  }
  async UpdateFeature(
    input: UpdateFeatureInput,
    condition?: ModelFeatureConditionInput
  ): Promise<UpdateFeatureMutation> {
    const statement = `mutation UpdateFeature($input: UpdateFeatureInput!, $condition: ModelFeatureConditionInput) {
        updateFeature(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFeatureMutation>response.data.updateFeature;
  }
  async DeleteFeature(
    input: DeleteFeatureInput,
    condition?: ModelFeatureConditionInput
  ): Promise<DeleteFeatureMutation> {
    const statement = `mutation DeleteFeature($input: DeleteFeatureInput!, $condition: ModelFeatureConditionInput) {
        deleteFeature(input: $input, condition: $condition) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFeatureMutation>response.data.deleteFeature;
  }
  async GetProduct(id: string): Promise<GetProductQuery> {
    const statement = `query GetProduct($id: ID!) {
        getProduct(id: $id) {
          __typename
          id
          name
          services {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          solutions {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProductQuery>response.data.getProduct;
  }
  async ListProducts(
    filter?: ModelProductFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProductsQuery> {
    const statement = `query ListProducts($filter: ModelProductFilterInput, $limit: Int, $nextToken: String) {
        listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProductsQuery>response.data.listProducts;
  }
  async GetService(id: string): Promise<GetServiceQuery> {
    const statement = `query GetService($id: ID!) {
        getService(id: $id) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetServiceQuery>response.data.getService;
  }
  async ListServices(
    filter?: ModelServiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListServicesQuery> {
    const statement = `query ListServices($filter: ModelServiceFilterInput, $limit: Int, $nextToken: String) {
        listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            productID
            product {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListServicesQuery>response.data.listServices;
  }
  async GetSolution(id: string): Promise<GetSolutionQuery> {
    const statement = `query GetSolution($id: ID!) {
        getSolution(id: $id) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSolutionQuery>response.data.getSolution;
  }
  async ListSolutions(
    filter?: ModelSolutionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSolutionsQuery> {
    const statement = `query ListSolutions($filter: ModelSolutionFilterInput, $limit: Int, $nextToken: String) {
        listSolutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            productID
            product {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSolutionsQuery>response.data.listSolutions;
  }
  async GetFeature(id: string): Promise<GetFeatureQuery> {
    const statement = `query GetFeature($id: ID!) {
        getFeature(id: $id) {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFeatureQuery>response.data.getFeature;
  }
  async ListFeatures(
    filter?: ModelFeatureFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFeaturesQuery> {
    const statement = `query ListFeatures($filter: ModelFeatureFilterInput, $limit: Int, $nextToken: String) {
        listFeatures(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            productID
            product {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFeaturesQuery>response.data.listFeatures;
  }
  OnCreateProductListener: Observable<
    OnCreateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProduct {
        onCreateProduct {
          __typename
          id
          name
          services {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          solutions {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProductSubscription>;

  OnUpdateProductListener: Observable<
    OnUpdateProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProduct {
        onUpdateProduct {
          __typename
          id
          name
          services {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          solutions {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProductSubscription>;

  OnDeleteProductListener: Observable<
    OnDeleteProductSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProduct {
        onDeleteProduct {
          __typename
          id
          name
          services {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          solutions {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          features {
            __typename
            items {
              __typename
              id
              title
              productID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProductSubscription>;

  OnCreateServiceListener: Observable<
    OnCreateServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateService {
        onCreateService {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateServiceSubscription>;

  OnUpdateServiceListener: Observable<
    OnUpdateServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateService {
        onUpdateService {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateServiceSubscription>;

  OnDeleteServiceListener: Observable<
    OnDeleteServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteService {
        onDeleteService {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteServiceSubscription>;

  OnCreateSolutionListener: Observable<
    OnCreateSolutionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSolution {
        onCreateSolution {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateSolutionSubscription>;

  OnUpdateSolutionListener: Observable<
    OnUpdateSolutionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSolution {
        onUpdateSolution {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateSolutionSubscription>;

  OnDeleteSolutionListener: Observable<
    OnDeleteSolutionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSolution {
        onDeleteSolution {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteSolutionSubscription>;

  OnCreateFeatureListener: Observable<
    OnCreateFeatureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFeature {
        onCreateFeature {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateFeatureSubscription>;

  OnUpdateFeatureListener: Observable<
    OnUpdateFeatureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFeature {
        onUpdateFeature {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateFeatureSubscription>;

  OnDeleteFeatureListener: Observable<
    OnDeleteFeatureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFeature {
        onDeleteFeature {
          __typename
          id
          title
          productID
          product {
            __typename
            id
            name
            services {
              __typename
              nextToken
            }
            solutions {
              __typename
              nextToken
            }
            features {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteFeatureSubscription>;
}
