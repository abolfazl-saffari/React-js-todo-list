import { Container, Form, Badge, Button } from "react-bootstrap";
const AddTodo = ({ history }) => {
  const toHomepage = () => {
    history.replace("/");
  };
  return (
    <Container
      className="p-4 pb-5 my-3 "
      style={{
        backgroundColor: "#0288D1",
        borderRadius: "2rem",
      }}
    >
      <div>
        <h1 className="mb-5">
          <Badge bg="info">Add new todo</Badge>
        </h1>
        <Form className="py-2 mb-2">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>
                <Badge bg="info">Todo's title : </Badge>
              </h3>
            </Form.Label>
            <Form.Control type="text" placeholder="do..." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <h3>
                <Badge bg="info">description : </Badge>
              </h3>
            </Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="describe it..." />
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
            type="submit"
            className="my-2"
            style={{ float: "left", fontWeight: 700, color: "#fff" }}
            variant="danger"
          >
            Back
          </Button>
          <Button
            onClick={toHomepage}
            type="submit"
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
