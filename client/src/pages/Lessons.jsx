import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_LESSONS } from "../utils/queries";
import { CREATE_LESSON, DELETE_LESSON } from "../utils/mutations";

const Lessons = () => {
  const { data, loading } = useQuery(QUERY_LESSONS);
  const [createLesson] = useMutation(CREATE_LESSON);
  const [deleteLesson] = useMutation(DELETE_LESSON);
  const [newLesson, setNewLesson] = useState({
    title: "",
    note: "",
    goals: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newLesson.title || !newLesson.note || !newLesson.goals) {
      alert("All fields are required");
      return;
    }
    await createLesson({
      variables: {
        title: newLesson.title,
        note: newLesson.note,
        goals: newLesson.goals,
      },
      refetchQueries: [QUERY_LESSONS, "lessons"],
    });
    setNewLesson({ title: "", note: "", goals: "" });
  };
  const handleDelete = async (id) => {
    console.log(id);
    await deleteLesson({
      variables: { id: id },
      refetchQueries: [QUERY_LESSONS, "lessons"],
    });
  };
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
        <input
          type="text"
          placeholder="Goals"
          value={newLesson.goals}
          onChange={(e) =>
            setNewLesson((prev) => {
              return { ...prev, goals: e.target.value };
            })
          }
        />

        <button type="submit">Submit</button>
      </form>
      <div className="bg-white">
        {data?.lessons.map((lesson) => (
          <div>
            <p> Lesson: {lesson.title}</p>
            <p> {lesson.note}</p>
            <p> {lesson.goals}</p>
            <button onClick={() => handleDelete(lesson._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Lessons;
