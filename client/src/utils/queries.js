import { gql } from "@apollo/client";

export const QUERY_CHILDREN_BY_ROOM = gql`
  query ChildrenByRoom($roomId: ID!) {
    childrenByRoom(roomId: $roomId) {
      children {
        primaryContact
        name
        birthday
        _id
        documentations {
          _id
          domain
          note
          goals
          createdAt
        }
      }
      name
      _id
    }
  }
`;
export const QUERY_LESSONS = gql`
  query Lessons {
    lessons {
      _id
      date
      title
      goals
      note
    }
  }
`;
export const QUERY_DOCUMENTATION = gql`
  query Documentation($id: ID!) {
    documentation(_id: $id) {
      _id
      child {
        name
        _id
      }
      domain
      note
      goals
      createdAt
    }
  }
`;

export const QUERY_DOCUMENTATIONS = gql`
  query Documentations {
    documentations {
      _id
      child {
        name
        _id
      }
      domain
      note
      goals
      createdAt
    }
  }
`;
export const QUERY_ME = gql`
  query Me {
    me {
      username
      rooms {
        _id
      }
      _id
    }
  }
`;
export const QUERY_CHILD = gql`
  query Child($childId: ID!) {
    child(childId: $childId) {
      _id
      birthday
      room {
        _id
        name
      }
      documentations {
        _id
        createdAt
        domain
        goals
        note
      }
      name
      primaryContact
    }
  }
`;
export const QUERY_CHILDREN = gql`
  query Children {
    children {
      _id
      birthday
      room {
        _id
        name
      }
      documentations {
        _id
        createdAt
        domain
        goals
        note
      }
      name
      primaryContact
    }
  }
`;
export const QUERY_ROOMS = gql`
  query Rooms {
    rooms {
      _id
      name
    }
  }
`;
