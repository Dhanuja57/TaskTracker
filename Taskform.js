import React, { useState } from 'react';

const Taskform = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && date) {
      addTask({ id: Date.now(), task, date, completed: false });
      setTask('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default Taskform