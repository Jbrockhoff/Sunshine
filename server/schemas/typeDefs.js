const typeDefs = `
  type Room {
    _id: ID!
    name: String!
    lessons: [Lesson]
  }

  type Lesson {
    _id: ID!
    title: String!
    description: String
    date: String
    documentation: [Documentation]
  }

  type Documentation {
    _id: ID!
    note: String!
    createdAt: String!
  }

  type Query {
    rooms: [Room]
    lessons(roomId: String): [Lesson]
    documentation(lessonId: String): [Documentation]
  }

  type Mutation {
    addRoom(name: String!, capacity: Int!): Room
    addLesson(roomId: String!, title: String!, description: String, date: String): Lesson
    addDocumentation(lessonId: String!, note: String!): Documentation
  }
`;

module.exports = typeDefs;
