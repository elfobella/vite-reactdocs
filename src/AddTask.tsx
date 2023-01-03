import React, { FormEvent, useState } from "react";

const AddTask = ({ onAddTask }: any) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setText("");
    onAddTask(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
