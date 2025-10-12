import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css"


function App() {

  return (
    <center className="todo-cointainer">
      <div>
        <AppName />
        <AddTodo />
        <div classsName="items-cointainer">
          <TodoItem />
          <TodoItem2 />
        </div>
        

      </div>
    </center >
  )
}

export default App;
