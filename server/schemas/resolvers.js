const { Room, Child, Lessons, Documentation } = require("../models");

const resolvers = {
  Query: {
    rooms: async ()  => {
      return await Room.find().populate("children");
    },
    childrenByRoom: async (parent, { roomId }) => {
      return await Child.find({ room: roomId }).populate("documentations");
    },
    children: async () => {
      return await Child.find().populate("documentations");
    },
    lessons: async () => {
      return await Lessons.find();
    },
    documentation: async (parent, { _id }) => {
      return await Documentation.find({ _id }).populate("child");
    },
    documentations: async () => {
      return await Documentation.find().populate({path: "child"})
    }
  },

  Mutation: {

    roomLogin: async (parent, { roomId, password }) => {
      const room = await Room.findOne({ _id: roomId });
      
      if (!room) {
        return false
      
      };

      const isCorrectPassword = await room.isCorrectPassword(password)

      if (!isCorrectPassword) {
        console.log("Password not valid")
        return false
    //why is password not valid- model, seeds, and this
      };

      return true
    },
    createRoom: async (parent, args) => {
      const room = await Room.create(args);
      return room;
    },
    addChildToRoom: async (parent, {roomId, childId}) => {
      const room = await Room.findOneAndUpdate(
        {
          _id: roomId
        },
        {
          $addToSet: {
            children: childId
          }
        },
        {
          new: true
        }
      )
      return room
    },
    createChild: async (parent, { roomId, name, birthday, primaryContact }) => {
      const child = await Child.create({
        room: roomId,
        name,
        birthday,
        primaryContact,
      });
      await Room.updateOne({_id: roomId}, {$push: {children: child._id}})
      return child;
    },
    createLesson: async (
      parent,
      { title, note, goals }
    ) => {
      const newLesson = await Lessons.create({
        title,
        note,
        goals,
      });
      return newLesson;
    },
    createDocumentation: async (
      parent,
      { childId, domain, note, goals }
    ) => {
      const newDocumentation = await Documentation.create({
        child: childId,
        domain,
        note,
        goals,
      });
      await Child.findOneAndUpdate(
        {
          _id: childId
        },
        {$addToSet: {documentations: newDocumentation._id}}
      )
      return newDocumentation;
    },
    updateRoom: async (_, { roomId, updatedData }) => {
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

    updateChild: async (parent, { _id, updateChildInput}) => {
      try {
        const child = await Child.findByIdAndUpdate(_id, {...updateChildInput}, {new: true});
        if (!child) {
          throw new Error("Child not found");
        }

        return child;
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
        const updatedDocumentation = await Documentation.findByIdAndUpdate(_id, {...updatedData}, {new: true});

        if (!updatedDocumentation) {
          throw new Error("Document not found");
        }

        return updatedDocumentation;
      } catch (error) {
        throw new Error(`Error updating document: ${error.message}`);
      }
    },
    deleteChild: async (parent, { childId }) => {
      try {
        const deletedChild = await Child.findOneAndDelete({ _id: childId });
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
    }
  },
};

module.exports = resolvers;
