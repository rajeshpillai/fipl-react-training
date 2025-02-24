import AddTodo from "../component/todo-context/add-todo";
import TodoList from "../component/todo-context/todo-list";
import ThemeProvider from "../context/provider/theme-provider";
import TodoProvider from "../context/provider/todo-provider";
import "./todo.css";

export default function TodoContextApp() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <h1>My Todo (with Context)</h1>
        <AddTodo/>
        <TodoList/>
      </TodoProvider>
    </ThemeProvider>
  )
}