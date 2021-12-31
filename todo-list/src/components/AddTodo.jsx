import { useContext } from "react";
import { Container, Form, Badge, Button, Image } from "react-bootstrap";
import TodoContext from "./todoContext";
import headImage from "../img/251.png";
const AddTodo = ({ history }) => {
  const todoContext = useContext(TodoContext);
  const toHomepage = () => {
    history.replace("/");
    todoContext.inputResetHandler();
  };
  const titleInput = (e) => {
    todoContext.setTitleInput(e.target.value);
  };
  const describeInput = (e) => {
    todoContext.setDescribeInput(e.target.value);
  };
  return (
    <Container
      className="p-4 pt-2 pb-5 my-3 "
      style={{
        backgroundColor: "#0288D1",
        borderRadius: "1rem",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      }}
    >
      <h1 className="mt-2">
        <Badge
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          }}
          bg="info"
        >
          Add new todo
        </Badge>
      </h1>
      <div className="d-flex justify-content-center my-5">
        <Image
          className="p-5"
          src={headImage}
          style={{
            width: "700px",
            backgroundColor: "#fff",
            borderRadius: "52% 48% 50% 50% / 63% 70% 30% 37%   ",
          }}
        />
      </div>
      <div>
        <Form
          className="py-2 mb-2"
          onSubmit={(e) => todoContext.addTodoHandler(e)}
        >
          <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>
                <Badge
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                  }}
                  bg="info"
                >
                  Todo's title :{" "}
                </Badge>
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
                <Badge
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                  }}
                  bg="info"
                >
                  description :{" "}
                </Badge>
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
            style={{
              float: "left",
              fontWeight: 700,
              color: "#fff",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
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
            style={{
              float: "right",
              fontWeight: 700,
              color: "#fff",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
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
