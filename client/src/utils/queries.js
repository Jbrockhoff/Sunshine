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
`

export const QUERY_LESSONS = gql`
query Lessons {
  lessons {
    _id
    date
    title
    note
  }
}
`
export const QUERY_DOCUMENTATION = gql`
query Documentation($id: ID!) {
  documentation(_id: $id) {
    _id
    child {
      name
    }
    domain
    note
    goals
    createdAt
  }
}
`

export const QUERY_DOCUMENTATIONS = gql`
query Documentations {
  documentations {
    _id
    child {
      name
      birthday
      primaryContact
    }
    domain
    note
    goals
    createdAt
  }
}
`
;
