import React, { ChangeEvent, useState } from "react";

const AddTopics = ({ onAddTopic }: any) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTopic(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTopics;
