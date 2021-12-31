import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import TodoLists from "./components/TodoLists";
import "./Style.css";
import TodoContext from "./components/todoContext";
import data from "./data/todosData";
import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import NotFound from "./components/NotFound";
function App() {
  const [todo, setTodo] = useState(data);
  const [titleInput, setTitleInput] = useState("");
  const [describeInput, setDescribeInput] = useState("");

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

  const itemAddHandler = (e, todoH, items, itemInputs, setItemInput) => {
    e.preventDefault();
    const todoEx = [...todo];
    const index = todoEx.indexOf(todoH);
    const randomId = Math.floor(Math.random() * 1000);
    if (itemInputs.trim() !== "") {
      const newItem = { id: randomId, title: itemInputs, status: false };
      todoEx[index] = todoH;
      todoEx[index].items.push(newItem);
      setTodo(todoEx);
    }
    setItemInput("");
  };
  const addTodoHandler = (e) => {
    e.preventDefault();
    const todoEx = [...todo];
    const randomId = Math.floor(Math.random() * 1000);
    if (titleInput.trim() && describeInput.trim() !== "") {
      const newItem = {
        id: randomId,
        name: titleInput,
        description: describeInput,
        items: [],
      };
      todoEx.unshift(newItem);
      setTodo(todoEx);
      setTitleInput("");
      setDescribeInput("");
    }
  };
  const inputResetHandler = () => {
    setTitleInput("");
    setDescribeInput("");
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        handleCheckInput,
        numericalOrder,
        deleteHandler,
        itemAddHandler,
        addTodoHandler,
        titleInput,
        setTitleInput,
        describeInput,
        setDescribeInput,
        inputResetHandler,
      }}
    >
      <Switch>
        <Route exact path="/">
          <Container
            style={{
              minHeight: "100vh",
              backgroundColor: "#0288D1",
              borderRadius: "2rem",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              //
            }}
            className="p-4 my-3"
          >
            <TodoLists />
          </Container>
        </Route>
        <Route exact path="/add-todo" component={AddTodo} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </TodoContext.Provider>
  );
}

export default App;
