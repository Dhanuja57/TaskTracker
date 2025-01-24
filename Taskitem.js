import React from 'react';

const Taskitem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <li style={{ margin: '10px 0', listStyle: 'none' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.task} - {task.date}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Taskitem;
