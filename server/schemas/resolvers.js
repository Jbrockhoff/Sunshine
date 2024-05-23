const { Child, Lessons, Documentation } = require('../models');

const resolvers = {
  Query: {
    children: async (parent, { roomId }) => {
      return Child.find({ room: roomId });
    },
    lessons: async (parent, { roomId }) => {
      return Lessons.find({ room: roomId });
    },
    documentation: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Documentation.find(params);
    }
  },
  
  Mutation: {
    createRoom: async (parent, args) => {
      const room = await Room.create(args);
      return room;
    },

   createChild: async (parent, {roomId, childId, name, birthday, familyMembers }) => {
      const child = await Child.create({ roomId, childId, name, birthday, familyMembers });
      return child;
   },
     

    createLesson: async (parent, { roomId, title, lesson, goals, createdAt }) => {
      const lesson = await Lessons.create({ 
       roomId, 
       title,
       lesson,
        goals, 
        createdAt 
      });
      return lesson;
    },
  
    createDocumentation: async (parent, { roomId, childName, domain, note, goals, createdAt }) => {
      const lesson = await Documentation.create({ 
        room: roomId, 
        childName, 
        domain, 
        note, 
        goals, 
        createdAt 
      });
      return lesson;
    },
    

  },
};

module.exports = resolvers;
