import React, {useState, useCallback, useEffect} from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

const App = () => {

  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const onNewTodoChange = useCallback((event) => {
    setNewTodo(event.target.value);
    console.log(event.target.value);
  }, []); 

  const formSubmitted = useCallback((event) => {
    console.log("Form Submitted");
    setTodos(
      [...todos , {
        id: todos.length + 1,
        content : newTodo,
        done: false
      }]
    );
    setNewTodo("");
    event.preventDefault();
  }, [newTodo, todos] );

  useEffect( () => {
    console.log('todos', todos);
  }, [todos]);
  return (
    <div>
      <form onSubmit= {formSubmitted}>
        <lable htmlFor="todo"> Enter Data </lable>
        <input id="todo" name="todo" value={newTodo}  onChange = {onNewTodoChange}/>

        <button> Add Todo</button>
      </form>
      <h1>My Todo List</h1>
      <ul>
        {
          todos.map((e) => (
            
            <li  key={e.id}> <input type="checkbox" /> {e.content} </li>
          ))
        }
      </ul>
  </div>
  );
}

export default App;
