import React, {useState} from 'react'

function Todo({data, subTodos, onDelete, onToggleTodo, onSubTodoSubmit, handleSubTodoDelete,handleToggleSubTodo}) {
  const handleDelete = () => {
    onDelete(data);
  }

  const toggleTodo = (todoId) => {
    onToggleTodo(todoId);
  }

  const onSubTodoDelete = () => {

  }
  const toggleSubTodo = (todoId) => {
  }

  const handleSubTodoSubmit = (subTodoTitle, parent) => {
    onSubTodoSubmit(subTodoTitle, parent);
  }

  return (
    <div>
      <div onDoubleClick={() => toggleTodo(data.id)}
        className={`todo ${data.completed ? 'completed': ''}`}
      >{data.title}</div>
      <button type="button" onClick={handleDelete}>X</button>

      <h4>SubTodos:</h4>
      <TodoForm parent={data} onSubmit = {handleSubTodoSubmit} />
      <TodoList data={subTodos} onDelete={handleDelete} onSubTodoDelete={handleSubTodoDelete} onToggleTodo={toggleSubTodo}  />

    </div>
  )
}


function TodoList({data, onDelete, onToggleTodo, onSubTodoSubmit}) {
  return (
    <div className="container">
      {
        data?.map(todo => {
          return (
            <Todo key={todo.id} data={todo} onDelete={onDelete} onToggleTodo={onToggleTodo} onSubTodoSubmit={onSubTodoSubmit} />
          )
        })
      }
    </div>
  )
}

function TodoForm({parent, onSubmit}) {
  const [newTodo, setTodo] = useState("");


  const handleChange = (e) => {
    setTodo(prevState => {
      return e.target.value;
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newTodo, parent);
  }

  const handleCancel = (e) => {
    setTodo("");
  }

  return (
    <div className="form">
      <form onSubmit = {handleSubmit}>
        <input type="text"
          onChange = {handleChange}
          value = {newTodo}
          placeholder="What do you want to do today?"
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default function TodoApp() {
  // {id: 1, title: "Some todos", completed: true, parent_id: null}
  const [todos, setTodos] = useState ([]);
  const [subTodos, setSubTodos] = useState([]);

  const handleSubmit = (title) => {
    let newTodo = {
      id: +new Date(),
      title: title,
      completed: false,
    };

    setTodos(prevState => {
      return [
        newTodo,
        ...todos,
      ]
    })
  }

  const handleDelete = (todo) => {
    //alert(JSON.stringify(todo));
    let remainingTodos = todos.filter(t => t.id !== todo.id);
    setTodos(remainingTodos);
  }

  const handleToggleTodo = (todoId) => {
    //alert(`Toggling todo with id ${todoId}`);
    let _todos = todos.map(t => {
      if (t.id == todoId) {
        t.completed = !t.completed;
      }
      return t;
    });

    setTodos(_todos);
  }

  const handleSubTodoDelete = (subTodo) => {
    alert(`Deleting subtodos with ID: ${subTodo.id}`)
  }

  const handleToggleSubTodo = (subTodoId) => {
    alert(`Toggling subtodos with ID: ${subTodoId}`)
  }

  const handleSubTodoSubmit = (title, parent) => {
    alert(`Adding subtodo with title ${title} for parent ${parent.title}`);
  }

  return (
    <div className="container app">
      <h2 className="text-primary app-title">Todoer Apps</h2>
      <span className="text-muted">
        (double-click on todo to mark as completed)
      </span>
      <br/>
      <hr/>
      <TodoForm onSubmit = {handleSubmit}  />
      <TodoList  data={todos} onSubTodoSubmit={handleSubTodoSubmit}  onDelete={handleDelete} onToggleTodo={handleToggleTodo} />
      
    </div>
  )
}
