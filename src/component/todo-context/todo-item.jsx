import {useState, useContext} from "react";
import TodoContext from "../../context/todo-context";

export default function TodoItem  ({ todo }) {
  const { removeTodo } = useContext(TodoContext); // Access the removeTodo function

  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};