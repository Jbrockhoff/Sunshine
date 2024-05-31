import React, { useState } from "react";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("all");

  const handleComplete = (id) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === id ? { ...lesson, completed: !lesson.completed } : lesson
      )
    );
  };

  const filteredLessons = lessons
    .filter((lesson) => {
      if (filter === "completed") return lesson.completed;
      if (filter === "uncompleted") return !lesson.completed;
      return true;
    })
    .filter((lesson) =>
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <div>
      <h1>Lessons for Kids</h1>
      <input
        type="text"
        placeholder="Search lessons"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Sort by title (A-Z)</option>
        <option value="desc">Sort by title (Z-A)</option>
      </select>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Show all lessons</option>
        <option value="completed">Show completed lessons</option>
        <option value="uncompleted">Show uncompleted lessons</option>
      </select>
      {filteredLessons.map((lesson) => (
        <div key={lesson.id}>
          <h2>{lesson.title}</h2>
          <p>{lesson.description}</p>
          <video src={lesson.videoUrl} controls />
          <button onClick={() => handleComplete(lesson.id)}>
            {lesson.completed ? "Mark as uncompleted" : "Mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Lessons;
