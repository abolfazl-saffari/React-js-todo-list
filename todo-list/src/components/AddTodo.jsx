import { useContext } from "react";
import { Container, Form, Badge, Button } from "react-bootstrap";
import TodoContext from "./todoContext";
const AddTodo = ({ history }) => {
  const todoContext = useContext(TodoContext);
  const toHomepage = () => {
    history.replace("/");
  };
  const titleInput = (e) => {
    todoContext.setTitleInput(e.target.value);
  };
  const describeInput = (e) => {
    todoContext.setDescribeInput(e.target.value);
  };
  return (
    <Container>
      <h1 className="mt-2">
        <Badge bg="info">Add new todo</Badge>
      </h1>
      <div
        className="p-4 pt-2 pb-5 my-3 "
        style={{
          backgroundColor: "#0288D1",
          borderRadius: "1rem",
        }}
      >
        <Form
          className="py-2 mb-2"
          onSubmit={(e) => todoContext.addTodoHandler(e)}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>
                <Badge bg="info">Todo's title : </Badge>
              </h3>
            </Form.Label>
            <Form.Control
              onChange={titleInput}
              value={todoContext.titleInput}
              type="text"
              placeholder="do..."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <h3>
                <Badge bg="info">description : </Badge>
              </h3>
            </Form.Label>
            <Form.Control
              onChange={describeInput}
              value={todoContext.describeInput}
              as="textarea"
              rows={5}
              placeholder="describe it..."
            />
          </Form.Group>
          <Form.Group>
            <div
              style={{
                backgroundColor: "#fff",
                width: "15rem",
                cursor: "pointer",
              }}
              className="my-2 p-2 rounded"
            >
              <Form.Check className="m-0 " inline type="radio" />
              <span style={{ fontWeight: 700 }} className="ms-2">
                I want to add some items.
              </span>
            </div>
          </Form.Group>
          <Button
            onClick={toHomepage}
            className="my-2"
            style={{ float: "left", fontWeight: 700, color: "#fff" }}
            variant="danger"
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={
              todoContext.titleInput.trim() && todoContext.describeInput.trim()
                ? false
                : true
            }
            className="my-2"
            style={{ float: "right", fontWeight: 700, color: "#fff" }}
            variant="info"
          >
            Save
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default AddTodo;
