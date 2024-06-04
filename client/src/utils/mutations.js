import { gql } from "@apollo/client";

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
`;
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
`;

export const CREATE_ROOM = gql`
  mutation CreateRoom($name: String!) {
    createRoom(name: $name) {
      _id
      name
    }
  }
`;
export const CREATE_CHILD = gql`
  mutation CreateChild(
    $name: String!
    $birthday: String!
    $primaryContact: String!
  ) {
    createChild(
      name: $name
      birthday: $birthday
      primaryContact: $primaryContact
    ) {
      birthday
      name
      primaryContact
    }
  }
`;
export const ADD_CHILD_TO_ROOM = gql`
  mutation addChildToRoom($roomId: ID!, $childId: ID!) {
    addChildToRoom(roomId: $roomId, childId: $childId) {
      _id
      children {
        _id
      }
      name
    }
  }
`;
export const CREATE_LESSON = gql`
  mutation CreateLesson($title: String!, $note: String!, $goals: String!) {
    createLesson(title: $title, note: $note, goals: $goals) {
      title
      note
      goals
      date
    }
  }
`;
export const CREATE_DOCUMENTATION = gql`
  mutation CreateDocumentation(
    $childId: ID!
    $domain: String!
    $note: String!
    $goals: String!
  ) {
    createDocumentation(
      childId: $childId
      domain: $domain
      note: $note
      goals: $goals
    ) {
      _id
      createdAt
      domain
      goals
      note
    }
  }
`;
export const UPDATE_ROOM = gql`
  mutation UpdateRoom($roomId: ID!, $name: String!) {
    updateRoom(roomId: $roomId, name: $name) {
      _id
      name
      children {
        _id
      }
    }
  }
`;

export const UPDATE_CHILD = gql`
  mutation UpdateChild($id: ID!, $updateChildInput: UpdateChildInput) {
    updateChild(_id: $id, updateChildInput: $updateChildInput) {
      _id
      room {
        _id
        name
      }
      name
      birthday
      primaryContact
      documentations {
        _id
      }
    }
  }
`;
export const UPDATE_LESSON = gql`
  mutation UpdateLesson($updatedData: UpdateLessonInput!, $id: ID!) {
    updateLesson(updatedData: $updatedData, _id: $id) {
      _id
      title
      note
      date
    }
  }
`;
export const UPDATE_DOCUMENTATION = gql`
  mutation UpdateDocumentation(
    $id: ID!
    $updatedData: UpdateDocumentationInput!
  ) {
    updateDocumentation(_id: $id, updatedData: $updatedData) {
      _id
      child {
        _id
      }
      domain
      note
      goals
      createdAt
    }
  }
`;
export const DELETE_CHILD = gql`
  mutation DeleteChild($childId: ID!) {
    deleteChild(childId: $childId) {
      _id
    }
  }
`;

export const DELETE_LESSON = gql`
  mutation DeleteLesson($id: ID!) {
    deleteLesson(_id: $id) {
      _id
      title
      note
      date
    }
  }
`;
export const DELETE_DOCUMENTATION = gql`
  mutation DeleteDocumentation($id: ID!) {
    deleteDocumentation(_id: $id) {
      _id
    }
  }
`;
