const { Room, Child, Lessons, Documentation } = require("../models");

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
    },
  },

  Mutation: {
    createRoom: async (parent, args) => {
      const room = await Room.create(args);
      return room;
    },
    createChild: async (
      parent,
      { roomId, childId, name, birthday, familyMembers }
    ) => {
      const child = await Child.create({
        roomId,
        childId,
        name,
        birthday,
        familyMembers,
      });
      return child;
    },
    createLesson: async (
      parent,
      { roomId, title, lesson, goals, createdAt }
    ) => {
      const lesson = await Lessons.create({
        roomId,
        title,
        lesson,
        goals,
        createdAt,
      });
      return lesson;
    },
    createDocumentation: async (
      parent,
      { roomId, childName, domain, note, goals, createdAt }
    ) => {
      const lesson = await Documentation.create({
        room: roomId,
        childName,
        domain,
        note,
        goals,
        createdAt,
      });
      return lesson;
    },
    updateRoom: async (_, { roomID, updatedData}) => {
      try {
        const room = await Room.findById(roomId);

        if (!room) {
          throw new Error("Room not found");
        }
        Object.assign(room, updatedData);

        const updatedRoom = await room.save();

        return updatedRoom;
      } catch (error) {
        throw new Error(`Error updating room: ${error.message}`);
      }
    },
    updateChild: async (_, { childId, updatedData }) => {
      try {
        const child = await Child.findById(childId);

        if (!child) {
          throw new Error("Child not found");
        }
        Object.assign(child, updatedData);

        const updatedChild = await child.save();

        return updatedChild;
      } catch (error) {
        throw new Error(`Error updating child: ${error.message}`);
      }
    },
    updateLesson: async (_, { _id, updatedData }) => {
      try {
        const lesson = await Lessons.findById(_id);

        if (!lesson) {
          throw new Error("Lesson not found");
        }

        Object.assign(lesson, updatedData);

        const updatedLesson = await lesson.save();

        return updatedLesson;
      } catch (error) {
        throw new Error(`Error updating lesson: ${error.message}`);
      }
    },
    updateDocumentation: async (_, { _id, updatedData }) => {
      try {
        const documentation = await Documentation.findById(_id);

        if (!documentation) {
          throw new Error("Document not found");
        }

        Object.assign(documentation, updatedData);

        const updatedDocumentation = await documentation.save();

        return updatedDocumentation;
      } catch (error) {
        throw new Error(`Error updating document: ${error.message}`);
      }
    },
    deleteChild: async (parent, { childId }) => {
      try {
        const deletedChild = await Child.findOneAndDelete({ childId });
        if (!deletedChild) {
          throw new Error("Child not found");
        }
        return deletedChild;
      } catch (error) {
        throw new Error(`Error deleting child: ${error.message}`);
      }
    },
    deleteLesson: async (parent, { _id }) => {
      try {
        const deletedLesson = await Lessons.findByIdAndDelete(_id);
        if (!deletedLesson) {
          throw new Error("Lesson not found");
        }
        return deletedLesson;
      } catch (error) {
        throw new Error(`Error deleting lesson: ${error.message}`);
      }
    },
    deleteDocumentation: async (parent, { _id }) => {
      try {
        const deletedDocumentation = await Documentation.findByIdAndDelete(_id);
        if (!deletedDocumentation) {
          throw new Error("Document not found");
        }
        return deletedDocumentation;
      } catch (error) {
        throw new Error(`Error deleting document: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
