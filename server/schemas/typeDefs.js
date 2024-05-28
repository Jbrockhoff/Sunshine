const typeDefs = `

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

  type Documentation {
    _id: ID!
    child: Child
    domain: String!
    note: String!
    goals: String!
    createdAt: String!
  }

  input UpdateChildInput {
    name: String
    birthday: String
    primaryContact: String
  }
  
  input UpdateLessonInput {
    title: String
    note: String
    goals: String
  }

  input UpdateDocumentationInput {
    child: ID
    domain: String
    note: String
    goals: String
  }

  type Query {
    rooms: [Room]
    childrenByRoom(roomId: ID!) : [Child]
    children: [Child]
    lessons: [Lesson]
    documentation(_id: ID!) : Documentation
    documentations: [Documentation]
  }

  type Mutation {
    roomLogin(roomId: ID!, password: String!): Boolean
    createRoom(name: String!): Room
    createChild(room: ID!, name: String!, birthday: String!, primaryContact: String!): Child
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
