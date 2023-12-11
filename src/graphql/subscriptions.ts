/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDiary = /* GraphQL */ `subscription OnCreateDiary($filter: ModelSubscriptionDiaryFilterInput) {
  onCreateDiary(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDiarySubscriptionVariables,
  APITypes.OnCreateDiarySubscription
>;
export const onUpdateDiary = /* GraphQL */ `subscription OnUpdateDiary($filter: ModelSubscriptionDiaryFilterInput) {
  onUpdateDiary(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDiarySubscriptionVariables,
  APITypes.OnUpdateDiarySubscription
>;
export const onDeleteDiary = /* GraphQL */ `subscription OnDeleteDiary($filter: ModelSubscriptionDiaryFilterInput) {
  onDeleteDiary(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDiarySubscriptionVariables,
  APITypes.OnDeleteDiarySubscription
>;
