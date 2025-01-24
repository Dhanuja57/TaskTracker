import React from 'react';
import TaskItem from './Taskitem';

const Tasklist = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default Tasklist;

