import React, { useState } from "react";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }: any) => {
  return (
    <ul>
      {tasks.map((task: any) => (
        <li key={task.id}>
          <Task task={task} onDelete={onDeleteTask} onChange={onChangeTask} />
        </li>
      ))}
    </ul>
  );
};

function Task({ task, onChange, onDelete }: any) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <form onSubmit={() => setIsEditing(false)}>
          <input
            type="text"
            value={task.name}
            onChange={(e) => onChange({ ...task, name: e.target.value })}
          />
          <button type="submit">Done</button>
        </form>
      </>
    );
  } else {
    taskContent = (
      <>
        <div>{task.name}</div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </>
    );
  }

  return <div>{taskContent} </div>;
}

export default TaskList;
