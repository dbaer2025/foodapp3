/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDiary = /* GraphQL */ `query GetDiary($id: ID!) {
  getDiary(id: $id) {
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
` as GeneratedQuery<APITypes.GetDiaryQueryVariables, APITypes.GetDiaryQuery>;
export const listDiaries = /* GraphQL */ `query ListDiaries(
  $filter: ModelDiaryFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      description
      author
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDiariesQueryVariables,
  APITypes.ListDiariesQuery
>;
