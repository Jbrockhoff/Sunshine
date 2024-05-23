const { Room, Lessons, Documentation } = require('../models');

const resolvers = {
  Query: {
    room: async () => {
      return Room.find({});
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

    // createChild: async (parent, {roomId, })

    createLesson: async (parent, { roomId, title, lesson, goals, createdAt }) => {
      const lesson = await Lessons.create({ 
        room: roomId, 
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
