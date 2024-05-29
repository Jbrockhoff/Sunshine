import { gql } from "@apollo/client";

export const QUERY_CHILDREN = gql`
query Children {
  children {
    birthday
    name
    primaryContact
    _id
    documentations{
      _id
      createdAt
      domain
      goals
      note
      }
      }
  }
`;
