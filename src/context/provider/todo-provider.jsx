import {useState} from "react";
import TodoContext from "../todo-context";

export default function TodoProvider({children}) {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(prevTodos => [todo, ...prevTodos]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

  const value = {todos, addTodo, removeTodo};

  return (
    <TodoContext.Provider value = {value}>
      {children}
    </TodoContext.Provider>
  )
}