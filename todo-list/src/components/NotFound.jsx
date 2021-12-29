import { Badge, Button, Container } from "react-bootstrap";

const NotFound = ({ history }) => {
  const onClick = () => {
    history.replace("/");
  };
  return (
    <Container
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#0288D1",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <h1 className="display-1">
        <Badge bg="dark">404 - Not found</Badge>
      </h1>
      <Button
        style={{ position: "absolute", right: 1, top: 1 }}
        variant="danger"
        onClick={onClick}
      >
        Return to home page
      </Button>
    </Container>
  );
};
export default NotFound;
