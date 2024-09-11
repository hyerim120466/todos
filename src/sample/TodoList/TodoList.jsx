import TodoItem from "./TodoItem";
import "./TodoList.scss";

const TodoList = ({ todos, onDel, onEdit, onMode, onSave }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDel={onDel}
          onEdit={onEdit}
          onMode={onMode}
          onSave={onSave}

        />
      ))}
    </div>
  );
};

export default TodoList;
