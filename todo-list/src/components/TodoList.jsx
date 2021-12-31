import { useContext, useState } from "react";
import { Badge, Button, Card, Form } from "react-bootstrap";
import TodoContext from "./todoContext";
import { AiOutlineDelete } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
const TodoList = ({ todo }) => {
  const todoContext = useContext(TodoContext);
  const [itemInput, setItemInput] = useState("");
  const [showClear, setShowClear] = useState(false);
  const addItemInput = (e) => {
    setItemInput(e.target.value);
  };
  // const show = () => {
  //   setShowClear(true);
  // };
  // const hide = () => {
  //   setShowClear(false);
  // };
  return (
    <Card
      style={{
        userSelect: "none",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      }}
      className="my-5"
      border="info"
    >
      <Card.Header className="cardTitle" bg="info">
        <div className="d-flex justify-content-between align-items-center">
          <h2
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
          >
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
                  type="checkbox"
                  checked={item.status}
                  onChange={() => null}
                />
                {item.status ? (
                  <del
                    style={{
                      textTransform: "capitalize",
                      color: "#9E9E9E",
                    }}
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
                {showClear && <MdClear />}
              </div>
            </Form>
          ))}
          <Form
            onSubmit={(e) =>
              todoContext.itemAddHandler(
                e,
                todo,
                todo.items,
                itemInput,
                setItemInput
              )
            }
          >
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Add your new item"
                value={itemInput}
                onChange={addItemInput}
              />
              <Button
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                }}
                className="mt-4"
                type="submit"
                variant="info"
              >
                <BiPlus style={{ fontSize: "1rem", color: "#fff" }} />
              </Button>
            </Form.Group>
          </Form>
          {todo.items.every((item) => item.status === true) && (
            <Button
              style={{
                fontWeight: "700",
                float: "right",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
              }}
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
