import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import TodoLists from "./components/TodoLists";
import "./Style.css";
import TodoContext from "./components/todoContext";
import data from "./data/todosData";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState(data);

  const handleCheckInput = (todoH, itemH) => {
    const todoEx = [...todo];
    const index = todoEx.indexOf(todoH);
    todoEx[index] = todoH;
    const indexOfItem = todoH.items.indexOf(itemH);
    todoH.items[indexOfItem].status = !todoH.items[indexOfItem].status;
    setTodo(todoEx);
  };

  const numericalOrder = (todoH) => {
    const index = todo.indexOf(todoH) + 1;
    return index;
  };

  const deleteHandler = (id) => {
    setTodo(todo.filter((todoH) => todoH.id !== id));
  };

  return (
    <Container
      style={{
        minHeight: "100vh",
        backgroundColor: "#0288D1",
        borderRadius: "2rem",
      }}
      className="p-4 my-3"
    >
      <TodoContext.Provider
        value={{
          todo,
          setTodo,
          handleCheckInput,
          numericalOrder,
          deleteHandler,
        }}
      >
        <TodoLists />
      </TodoContext.Provider>
    </Container>
  );
}

export default App;
