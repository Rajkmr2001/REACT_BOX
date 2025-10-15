import TodoItem from "./TodoItem";
import Styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={Styles.itemsContainer}>
      {todoItems.map((items, idx) => (
        <TodoItem
          key={`${items.name}-${items.dueDate}-${idx}`}
          todoName={items.name}
          todoDate={items.dueDate}
        />
      ))}
    </div>
  );
};
export default TodoItems;
