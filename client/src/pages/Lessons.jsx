import React, { useState } from "react";
//import createLesson mutation and query for grabbing lessons
//useQuery and useMutations
const Lessons = () => {
//grab current lessons and render
//implement createLesson mutation
  const [newLesson, setNewLesson] = useState({
    title: "",
    note: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newLesson.title}
          onChange={(e) =>
            setNewLesson((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <input
          type="text"
          placeholder="Note"
          value={newLesson.note}
          onChange={(e) =>
            setNewLesson((prev) => {
              return { ...prev, note: e.target.value };
            })
          }
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Lessons;
