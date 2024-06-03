const typeDefs = `

type User {
  _id: ID!
  username: String!
  email: String!
  rooms: [Room]
}

type Auth {
  token: ID!
  user: User
}

type Room {
  _id: ID!
  name: String!
  children: [Child]
}

  type Child {
    _id: ID!
    room: Room
    name: String!
    birthday: String!
    primaryContact: String!
    documentations: [Documentation]
  }

  type Lesson {
    _id: ID!
    title: String!
    note: String!
    date: String!
  }

  scalar Date

  type Documentation {
    _id: ID!
    child: Child
    domain: String!
    note: String!
    goals: String!
    createdAt: Date!
  }

  input UpdateChildInput {
    name: String
    birthday: String
    primaryContact: String
  }
  
  input UpdateLessonInput {
    title: String
    note: String
  }

  input UpdateDocumentationInput {
    child: ID
    domain: String
    note: String
    goals: String
  }

  type Query {
    me: User
    rooms: [Room]
    childrenByRoom(roomId: ID!) : Room
    child(childId: ID!): Child
    children: [Child]
    lessons: [Lesson]
    documentation(_id: ID!) : Documentation
    documentations: [Documentation]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(email: String!, username: String!, password: String!): Auth
    createRoom(name: String!): Room
    createChild(name: String!, birthday: String!, primaryContact: String!): Child
    addChildToRoom(roomId: ID!, childId: ID!): Room
    createLesson(title: String!, note: String!, goals: String!): Lesson
    createDocumentation(childId: ID!, domain: String!, note: String!, goals: String!): Documentation
    updateRoom(roomId: ID!, name: String!): Room
    updateChild(_id: ID!, updateChildInput: UpdateChildInput): Child
    updateLesson(_id: ID!, updatedData: UpdateLessonInput!): Lesson
    updateDocumentation(_id: ID!, updatedData: UpdateDocumentationInput!): Documentation
    deleteChild(childId: ID!): Child
    deleteLesson(_id: ID!): Lesson
    deleteDocumentation(_id: ID!): Documentation
  }
`;

module.exports = typeDefs;
