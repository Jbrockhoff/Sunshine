import { gql } from '@apollo/client';


export const SIGNUP = gql`
mutation Signup($email: String!, $username: String!, $password: String!) {
  signup(email: $email, username: $username, password: $password) {
    token
    user {
      username
      email
      rooms {
        _id
      }
    }
  }
}
`
export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      _id
      username
      email
      rooms {
        _id
      }
    }
    token
  }
}
`

