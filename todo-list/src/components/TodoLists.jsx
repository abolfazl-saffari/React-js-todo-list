import TodoList from "./TodoList";
import { Badge, Button } from "react-bootstrap";
import { useContext } from "react";
import TodoContext from "./todoContext";
import { Link } from "react-router-dom";
const TodoLists = () => {
  const todoContext = useContext(TodoContext);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-3">
        <h1
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          }}
        >
          <Badge
            style={{ cursor: "pointer" }}
            onClick={() => window.location.reload(false)}
            bg="info"
          >
            Todo-list
          </Badge>
        </h1>
        <Link to="/add-todo">
          <Button
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              color: "#fff",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
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
