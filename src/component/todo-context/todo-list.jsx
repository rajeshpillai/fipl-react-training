import {useState, useContext} from "react";
import TodoContext from "../../context/todo-context";
import TodoItem from "./todo-item";

export default function TodoList () {
  const { todos } = useContext(TodoContext); // Access the todos array

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};