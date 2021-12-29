import { useContext } from "react";
import { Badge, Button, Card, Form } from "react-bootstrap";
import TodoContext from "./todoContext";
import { AiOutlineDelete } from "react-icons/ai";
const TodoList = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  return (
    <Card style={{ userSelect: "none" }} className="my-4" border="info">
      <Card.Header className="cardTitle" bg="info">
        <div class="d-flex justify-content-between align-items-center">
          <h2>
            <Badge bg="dark"># {todoContext.numericalOrder(todo)}</Badge>
          </h2>
          <AiOutlineDelete
            style={{ cursor: "pointer", fontSize: "1.5rem", color: "#fff" }}
            onClick={() => todoContext.deleteHandler(todo.id)}
          />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title style={{ textTransform: "capitalize" }}>
          <span className="h1">-{todo.name}</span>
        </Card.Title>
        <Card.Text className="pb-4">{todo.description}</Card.Text>
        <div>
          {todo.items.map((item) => (
            <Form
              style={{ cursor: "pointer" }}
              key={item.id}
              onClick={() => todoContext.handleCheckInput(todo, item)}
            >
              <div className="my-2 p-2 rounded border border-info">
                <Form.Check
                  className="m-0 "
                  inline
                  type="radio"
                  checked={item.status}
                  onChange={() => null}
                />
                {item.status ? (
                  <del
                    style={{ textTransform: "capitalize" }}
                    className="ms-2 h5"
                  >
                    {item.title}
                  </del>
                ) : (
                  <span
                    style={{ textTransform: "capitalize" }}
                    className="ms-2 h5"
                  >
                    {item.title}
                  </span>
                )}
              </div>
            </Form>
          ))}
          {todo.items.every((item) => item.status === true) && (
            <Button
              style={{ fontWeight: "700" }}
              className="mt-4"
              variant="danger"
              onClick={() => todoContext.deleteHandler(todo.id)}
            >
              Remove this todo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
export default TodoList;
