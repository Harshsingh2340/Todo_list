import React, { useState } from "react";
import "./App.css";
// const App = () => {
  // const arr = [1,2,3,4,5];
  // return <div className = "App">{arr.filter((num) => (num !== 3))}</div>
  // };

{/*   
  // return(
//     <div className = "App">
//     {arr.map((num) =>(
//       <div>{num} , </div>
//     ))}
//     </div>
//   ); */}
{/*   
// }; */}



const App = () => {
const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);
const [editId, setEditedId] = useState(0);

const handleSubmit = (e) =>{
  e.preventDefault();

  if(editId) {
    const editTodo=todos.find((i) => i.id === editId);
    const updatedTodos=todos.map((t) =>
      t.id===editTodo.id
        ? (t = { id : t.id, todo})
        : { id : t.id, todo: t.todo }
  );
  setTodos(updatedTodos);
  setEditedId(0);
  setTodo("");
  return;


}
  

  if(todo !== ""){
    setTodos([{id: `${todo}-${Date.now()}` ,todo}, ...todos]);
    setTodo("");
  }
};

const handleDelete = (id) =>{
  const delTodo=todos.filter((to)=> to.id !== id);
  setTodos([...delTodo]);
}

const handleEdit = (id)  =>{
   const editTodo = todos.find((i) => i.id === id);
   setTodo(editTodo.todo);
   setEditedId(id);
}


return <div classNmae ="App"> 
<div className="container">
  <h1>Todo List App</h1>
  <form className="todoForm" onSubmit={handleSubmit}>
    <input type = "text" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button type="submit"> {editId ? "Edit" : "Go"} </button>
  </form>

  <ul  className="allTools">
    {
      todos.map((t) => (
      <li className="singleTodo">
     <span className="todoText" key={t.id}>{t.todo}</span>
     <button onClick={() => handleEdit(t.id)}>Edit</button>
     <button onClick={() => handleDelete(t.id)}>Delete</button>
</li>
))}
   
</ul>

</div>
  
</div>;

};
    
export default App; 