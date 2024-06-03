const db = require("../config/connection");
const { Room, Child, Lessons, Documentation } = require("../models");
const cleanDB = require("./cleanDB");
const rooms = require("./room.json");

const lessons = require("./lessons.json");

const children = [
  {
    name: "Joe Smith",
    birthday: "01/08/2019",
    primaryContact: "Jane Smith",
  },
  {
    name: "Sophia Jones",
    birthday: "03/31/2020",
    primaryContact: "Frank Jones",
  },
  {
    name: "Taylor Brown",
    birthday: "06/20/2020",
    primaryContact: "Sarah Brown",
  },
  {
    name: "George Wilson",
    birthday: "10/31/2019",
    primaryContact: "Patty Wilson",
  },
];

const documentations = [
  {
    domain: "Fine Motor",
    note: "Joe was using a pen. He held the pen with a tripod grasp and made small circles and told me that spelled his name",
    goals: "Joe will start to draw letter-like symbols with varying structure",
  },
  {
    domain: "Language and Communication",
    note: "Sophia was talking about her weekend and said 'I went to the beach with Mommy and Daddy'. I asked what they did there, and she said, 'We sat on a towel!",
    goals: "Sophia will expand her stories with additional details",
  },
  {
    domain: "Problem solving",
    note: "Taylor turned a puzzle piece around and placed it in several locations before finding where it fit",
    goals: "Taylor will begin to use the picture of the puzzle as a reference",
  },
  {
    domain: "Gross Motor",
    note: "George pushed himself around the playground on a tricycle with his feet on the ground",
    goals: "George will start to use the pedals to move the tricycle",
  },
];
const seedDatabase = async () => {
  try {
    await cleanDB("Room", "rooms");
    let roomData = await Room.insertMany(rooms);
    console.log(roomData);
    console.log("Rooms seeded!");

    await cleanDB("Child", "children");

    const seededChildren = await Child.insertMany(children);
    console.log("Children seeded!");

    await cleanDB("Lessons", "lessons");
    await Lessons.insertMany(lessons);
    console.log("Lessons seeded!");

    await cleanDB("Documentation", "documentations");
    for (let i = 0; i < documentations.length; i++) {
      documentations[i].child =
        seededChildren[Math.floor(Math.random() * seededChildren.length)]._id;
    }
    await Documentation.insertMany(documentations);
    console.log("Documents seeded!");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

db.once("open", seedDatabase);
