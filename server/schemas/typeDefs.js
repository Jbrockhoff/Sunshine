const typeDefs = `

type Room {
  _id: ID!
  name: String!
  children: [Child]
  lessons: [Lesson]
  documentation: [Documentation]
}

  type Child {
    _id: ID!
    name: String!
    birthday: String!
    primaryContact: String!
  }

  type Lesson {
    _id: ID!
    room: [Room]
    title: String!
    description: String!
    date: String!
  }

  type Documentation {
    _id: ID!
    childName: String!
    domain: String!
    note: String!
    goals: String!
    createdAt: String!
  }

  input UpdateChildInput {
    name: String!
    birthday: String!
    primaryContact: String!
    createdAt: String!
  }
  
  input UpdateLessonInput {
    title: String!
    lesson: String!
    goals: String!
    createdAt: String!
  }

  input UpdateDocumentationInput {
    childName: String!
    domain: String!
    note: String!
    goals: String!
    createdAt: String!
  }

  type Query {
    room(roomId: ID!): Room
    children(roomId: ID!) : [Child]
    lessons(roomId: ID!) : [Lesson]
    documentation(roomId: ID!) : [Documentation]
  }

  type Mutation {
    createRoom(name: String!): Room
    createChild(roomId: ID!, childId: ID!, name: String!, birthday: String!, primaryContact: String!): Child
    createLesson(roomId: ID!, title: String!, lesson: String!, goals: String!, createdAt: String!): Lesson
    createDocumentation(roomId: ID!, childName: String!, domain: String!, note: String!, goals: String!, createdAt: String!): Documentation
    updateRoom(roomId: ID!, name: String!): Room
    updateChild(roomId: ID!, childId: ID!, name: String!, birthday: String!, primaryContact: String!): Child
    updateLesson(_id: ID!, updatedData: UpdateLessonInput!): Lesson
    updateDocumentation(_id: ID!, updatedData: UpdateDocumentationInput!): Documentation
    deleteChild(childId: ID!): Child
    deleteLesson(_id: ID!): Lesson
    deleteDocumentation(_id: ID!): Documentation
  }
`;

module.exports = typeDefs;
