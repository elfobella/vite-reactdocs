import { useState } from "react";
import AddTask from "./AddTask";
import AddTopics from "./AddTopics";
import "./App.css";
import TaskList from "./TaskList";
import Topics from "./Topics";

type TodoProp = {
  id?: number;
  name: string;
};

let nextID = 4;

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [pages, setPages] = useState([
    {
      topic: "Grocery",
      todos: [
        { name: "Test1", id: 1 },
        { name: "Test2", id: 2 },
      ],
      id: 1,
    },
    { topic: "Work", todos: [], id: 2 },
    { topic: "Personal", todos: [], id: 3 },
  ]);

  const [todos, setTodos] = useState<TodoProp[]>([]);
  const handleClick = (text: /*= asd*/ TodoProp) => {
    setTodos((prev: any) => {
      return [...prev, { id: nextID++, name: text }];
    });
  };

  const handleTopicAdd = (text: string, nxId: number) => {
    pages[activeIndex - 1].todos.push({ name: text, id: nxId });
  };

  const handleAddTopic = (text: string) => {
    setPages((prev) => [...prev, { topic: text, id: nextID++, todos: [] }]);
  };

  const handleChangeTask = (
    task: /*t.name = asd / task = asd + "what we add it" for example task = asdASD */ TodoProp
  ) => {
    setTodos(
      todos.map((t) => {
        if (t.id == task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleDeleteTask = (taskId: number) => {
    pages[activeIndex - 1].todos.filter((t) => t.id !== taskId);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask onAddTask={handleClick} />
      <TaskList
        tasks={todos}
        onDeleteTask={handleDeleteTask}
        onChangeTask={handleChangeTask}
      />
      <Topics
        pages={pages}
        activeIndex={activeIndex}
        handleTopicAdd={handleTopicAdd}
        setActiveIndex={setActiveIndex}
        onDelete={handleDeleteTask}
        setPages={setPages}
      />
      <AddTopics onAddTopic={handleAddTopic} />
    </div>
  );
}

export default App;
