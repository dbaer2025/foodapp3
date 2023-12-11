/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDiary = /* GraphQL */ `
  query GetDiary($id: ID!) {
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
`;
export const listDiaries = /* GraphQL */ `
  query ListDiaries(
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
`;
