const typeDefs = `

type Query {
  room(roomId: ID!): Room
}

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
    birthday: Date!
    familyMembers: String!
  }

  type Lesson {
    _id: ID!
    room: [Room]
    title: String!
    description: String
    date: String
  }

  type Documentation {
    _id: ID!
    childName: String!
    domain: String!
    note: String!
    goals: String!
    createdAt: String!
  }


  type Mutation {
    createRoom(name: String!): Room
    createChild(roomId: ID!, childId: ID!, name: String!, birthday: Date!, familyMembers: String!): Child
    createLesson(roomId: ID!, title: String!, lesson: String!, goals: String!, createdAt: String!): Lesson
    createDocumentation(roomId: ID!, childName: String!, domain: String!, note: String!, goals: String!, createdAt: String!): Documentation
    updateRoom(roomId: ID!, updatedData: UpdateRoomInput!): Room
    updateChild(roomId: ID!, childId: ID!, name: String!, birthday: Date!, familyMembers: String!): Child
    updateLesson(_id: ID!, updatedData: UpdateLessonInput!): Lesson
    updateDocumentation(_id: ID!, updatedData: UpdateDocumentationInput!): Documentation
    deleteChild(childId: ID!): Child
    deleteLesson(_id: ID!): Lesson
    deleteDocumentation(_id: ID!): Documentation
  }

  input UpdateRoomInput {
    name: String
  }

  input UpdateChildInput {
    name: String
    birthday: Date
    familyMembers: String
  }
  
  input UpdateLessonInput {
    title: String
    lesson: String
    goals: String
    createdAt: String
  }

  input UpdateDocumentationInput {
    childName: String
    domain: String
    note: String
    goals: String
    createdAt: String
  }
`;

module.exports = typeDefs;
