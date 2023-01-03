import React, { useState } from "react";
import AddTask from "./AddTask";

const Topics = ({
  pages,
  handleTopicAdd,
  setPages,
  activeIndex,
  setActiveIndex,
  onDelete,
}: any) => {
  return (
    <div>
      {pages.map((page: any) => (
        <Topic
          page={page}
          isActive={activeIndex}
          onShow={() => setActiveIndex(page.id)}
        />
      ))}
      {pages.map((page: any) => (
        <Content
          onDelete={onDelete}
          key={page.id}
          handleTopicAdd={handleTopicAdd}
          setPages={setPages}
          page={page}
          isActive={activeIndex === page.id}
        />
      ))}
    </div>
  );
};

function Topic({ page, isActive, onShow }: any) {
  console.log(isActive);

  return (
    <div>
      <button className={page.id === isActive ? "active" : ""} onClick={onShow}>
        {page.topic}
      </button>
    </div>
  );
}

let neId = 0;

function Content({ page, isActive, onDelete, setPages, handleTopicAdd }: any) {
  const [text, setText] = useState("");
  const [nxId, setNxId] = useState(1);

  return (
    <>
      {isActive && (
        <div key={page.id}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              setText("");
              setNxId((n) => n + 1);
              handleTopicAdd(text, nxId);
            }}
          >
            Add Topic Todo {page.id}
          </button>
          <ul>
            {page.todos.map((t: any) => (
              <Todos onDelete={onDelete} todo={t} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function Todos({ todo, onDelete }: any) {
  return (
    <div>
      <li key={todo.id}>
        {todo.name} {todo.id}
      </li>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
export default Topics;
