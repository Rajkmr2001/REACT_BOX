import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2025",
    },
    {
      name: "Go to College",
      dueDate: "4/11/2025",
    },
    {
      name: "Watch Movie",
      dueDate: "4/12/2025",
    },
  ];
  return (
    <center className="todo-container">
      <div>
        <AppName />
        <AddTodo />
        <div className="items-container">
          <TodoItems todoItems={todoItems} />
        </div>
      </div>
    </center>
  );
}

export default App;
