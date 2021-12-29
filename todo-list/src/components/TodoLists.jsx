import TodoList from "./TodoList";
import { Badge, Button } from "react-bootstrap";
import { useContext } from "react";
import TodoContext from "./todoContext";
import { Link } from "react-router-dom";
const TodoLists = () => {
  const todoContext = useContext(TodoContext);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>
          <Badge bg="info">Todo-list</Badge>
        </h1>
        <Link to="/add-todo">
          <Button
            style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}
            variant="info"
          >
            Create a new todo
          </Button>
        </Link>
      </div>

      {todoContext.todo.map((todo) => (
        <TodoList key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
export default TodoLists;
