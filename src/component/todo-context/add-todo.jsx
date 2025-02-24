import {useState, useContext} from "react";
import TodoContext from "../../context/todo-context";
import ThemeContext from "../../context/theme-context";

export default function AddTodo () {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext); // Access the addTodo function
  const theme = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newTodo = { id: Date.now(), text };
      addTodo(newTodo);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={theme}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};