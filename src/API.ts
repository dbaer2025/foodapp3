/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDiartInput = {
  id?: string | null,
  name?: string | null,
  img?: string | null,
  description?: string | null,
  author?: string | null,
};

export type ModelDiartConditionInput = {
  name?: ModelStringInput | null,
  img?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelDiartConditionInput | null > | null,
  or?: Array< ModelDiartConditionInput | null > | null,
  not?: ModelDiartConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Diart = {
  __typename: "Diart",
  id: string,
  name?: string | null,
  img?: string | null,
  description?: string | null,
  author?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDiartInput = {
  id: string,
  name?: string | null,
  img?: string | null,
  description?: string | null,
  author?: string | null,
};

export type DeleteDiartInput = {
  id: string,
};

export type CreateDiaryInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  description?: string | null,
  author?: string | null,
};

export type ModelDiaryConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelDiaryConditionInput | null > | null,
  or?: Array< ModelDiaryConditionInput | null > | null,
  not?: ModelDiaryConditionInput | null,
};

export type Diary = {
  __typename: "Diary",
  id: string,
  name: string,
  image?: string | null,
  description?: string | null,
  author?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDiaryInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  description?: string | null,
  author?: string | null,
};

export type DeleteDiaryInput = {
  id: string,
};

export type ModelDiartFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  img?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelDiartFilterInput | null > | null,
  or?: Array< ModelDiartFilterInput | null > | null,
  not?: ModelDiartFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDiartConnection = {
  __typename: "ModelDiartConnection",
  items:  Array<Diart | null >,
  nextToken?: string | null,
};

export type ModelDiaryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelDiaryFilterInput | null > | null,
  or?: Array< ModelDiaryFilterInput | null > | null,
  not?: ModelDiaryFilterInput | null,
};

export type ModelDiaryConnection = {
  __typename: "ModelDiaryConnection",
  items:  Array<Diary | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDiartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  img?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiartFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiartFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionDiaryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiaryFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiaryFilterInput | null > | null,
};

export type CreateDiartMutationVariables = {
  input: CreateDiartInput,
  condition?: ModelDiartConditionInput | null,
};

export type CreateDiartMutation = {
  createDiart?:  {
    __typename: "Diart",
    id: string,
    name?: string | null,
    img?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDiartMutationVariables = {
  input: UpdateDiartInput,
  condition?: ModelDiartConditionInput | null,
};

export type UpdateDiartMutation = {
  updateDiart?:  {
    __typename: "Diart",
    id: string,
    name?: string | null,
    img?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDiartMutationVariables = {
  input: DeleteDiartInput,
  condition?: ModelDiartConditionInput | null,
};

export type DeleteDiartMutation = {
  deleteDiart?:  {
    __typename: "Diart",
    id: string,
    name?: string | null,
    img?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDiaryMutationVariables = {
  input: CreateDiaryInput,
  condition?: ModelDiaryConditionInput | null,
};

export type CreateDiaryMutation = {
  createDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDiaryMutationVariables = {
  input: UpdateDiaryInput,
  condition?: ModelDiaryConditionInput | null,
};

export type UpdateDiaryMutation = {
  updateDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDiaryMutationVariables = {
  input: DeleteDiaryInput,
  condition?: ModelDiaryConditionInput | null,
};

export type DeleteDiaryMutation = {
  deleteDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDiartQueryVariables = {
  id: string,
};

export type GetDiartQuery = {
  getDiart?:  {
    __typename: "Diart",
    id: string,
    name?: string | null,
    img?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDiartsQueryVariables = {
  filter?: ModelDiartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiartsQuery = {
  listDiarts?:  {
    __typename: "ModelDiartConnection",
    items:  Array< {
      __typename: "Diart",
      id: string,
      name?: string | null,
      img?: string | null,
      description?: string | null,
      author?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDiaryQueryVariables = {
  id: string,
};

export type GetDiaryQuery = {
  getDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDiariesQueryVariables = {
  filter?: ModelDiaryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiariesQuery = {
  listDiaries?:  {
    __typename: "ModelDiaryConnection",
    items:  Array< {
      __typename: "Diary",
      id: string,
      name: string,
      image?: string | null,
      description?: string | null,
      author?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDiartSubscriptionVariables = {
  filter?: ModelSubscriptionDiartFilterInput | null,
};

export type OnCreateDiartSubscription = {
  onCreateDiart?:  {
    __typename: "Diart",
    id: string,
    name?: string | null,
    img?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDiartSubscriptionVariables = {
  filter?: ModelSubscriptionDiartFilterInput | null,
};

export type OnUpdateDiartSubscription = {
  onUpdateDiart?:  {
    __typename: "Diart",
    id: string,
    name?: string | null,
    img?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDiartSubscriptionVariables = {
  filter?: ModelSubscriptionDiartFilterInput | null,
};

export type OnDeleteDiartSubscription = {
  onDeleteDiart?:  {
    __typename: "Diart",
    id: string,
    name?: string | null,
    img?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDiarySubscriptionVariables = {
  filter?: ModelSubscriptionDiaryFilterInput | null,
};

export type OnCreateDiarySubscription = {
  onCreateDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDiarySubscriptionVariables = {
  filter?: ModelSubscriptionDiaryFilterInput | null,
};

export type OnUpdateDiarySubscription = {
  onUpdateDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDiarySubscriptionVariables = {
  filter?: ModelSubscriptionDiaryFilterInput | null,
};

export type OnDeleteDiarySubscription = {
  onDeleteDiary?:  {
    __typename: "Diary",
    id: string,
    name: string,
    image?: string | null,
    description?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
