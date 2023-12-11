/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};
export const createDiary = /* GraphQL */ `mutation CreateDiary(
  $input: CreateDiaryInput!
  $condition: ModelDiaryConditionInput
) {
  createDiary(input: $input, condition: $condition) {
    id
    name
    image
    description
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDiaryMutationVariables,
  APITypes.CreateDiaryMutation
>;
export const updateDiary = /* GraphQL */ `mutation UpdateDiary(
  $input: UpdateDiaryInput!
  $condition: ModelDiaryConditionInput
) {
  updateDiary(input: $input, condition: $condition) {
    id
    name
    image
    description
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDiaryMutationVariables,
  APITypes.UpdateDiaryMutation
>;
export const deleteDiary = /* GraphQL */ `mutation DeleteDiary(
  $input: DeleteDiaryInput!
  $condition: ModelDiaryConditionInput
) {
  deleteDiary(input: $input, condition: $condition) {
    id
    name
    image
    description
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDiaryMutationVariables,
  APITypes.DeleteDiaryMutation
>;
