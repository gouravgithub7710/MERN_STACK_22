import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';

function App() {

  const [text,setText]=useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem = ()=>{
   const newTodoItem ={
        id:uuidv4(),
        item:text,
        done:false,
    }
    setTodoList([...todoList, newTodoItem]);
   setText('');
  }

  const handleToggle = (itemID)=>{
   const newTodoList= todoList.map((listItem)=>{
      if(listItem.id === itemID){
        return {...listItem,done:!listItem.done}
      }
       return listItem;
    })

    setTodoList(newTodoList);
  }
 
const handleDelete = (itemID)=>{
const newTodoList = todoList.filter((listItem)=>listItem.id!==itemID);
setTodoList(newTodoList);
}

  return (
 <div className='App'>
 
  <h1>TO DO LIST</h1>
  <div className='adder'>
    <input 
    type='text' 
    placeholder='Add Task to your List' 
    value={text} 
    onChange={(e)=>setText(e.target.value)}/>
    
    <span 
    onClick={addItem}>+</span>
  </div>
  <List  todoList={todoList} handleToggle={handleToggle} handleDelete={handleDelete} />
  </div>

  );
}

export default App;
