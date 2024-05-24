const db = require('../config/connection');
const { Room, Child, Lessons, Documentation } = require('../models');
const cleanDB = require('./cleanDB');
const rooms = require('./room.json');
const children = require('./child.json');
const lessons = require('./lessons.json');
const documents = require('./documentation.json');

const seedDatabase = async () => {
  try {
    await cleanDB('Room', 'rooms');
    await Room.insertMany(rooms);
    console.log('Rooms seeded!');

    await cleanDB('Child', 'children');
    await Child.insertMany(children);
    console.log('Children seeded!');

    await cleanDB('Lessons', 'lessons');
    await Lessons.insertMany(lessons);
    console.log('Lessons seeded!');

    await cleanDB('Documentation', 'documents');
    await Documentation.insertMany(documents);
    console.log('Documents seeded!');

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

db.once('open', seedDatabase);
