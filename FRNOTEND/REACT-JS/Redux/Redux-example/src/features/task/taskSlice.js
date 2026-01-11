import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


// reducer and actions yaha slice ke ander hote hai

//reducer - ye ek fn hai jaha hum logic lkhte hai.means ex count ko increment karo ya decrement karo 

//reducers - is collection of reducer
// reducer - iske do parameter hote hai (state,action)

const taskSlice = createSlice({
  name:'tasks',
  initialState:{
    items:[],
    filters:'all'
  },
  reducers:{
    addTask:{
      reducer: (state,action) =>{
          state.items.push(action.payload)
      },//payload ko customise karne ke liye payload ka use hota hai.
      prepare:(text)=>{
        return{
          payload:{
            id:uuidv4(),
            text,
            completed:false
          }
        }
      }
    },
    toggleTask:(state,action)=>{
        const task = state.items.find(t=>t.id===action.payload)
        if(task) task.completed=!task.completed
    },
    deleteTask:(state,action)=>{
      state.items=state.items.filter(t=>t.id!==action.payload);
    },
    setFilter:(state,action)=>{
      state.filters= action.payload; 
    }
  }
})

export const {addTask,deleteTask,toggleTask,setFilter}=taskSlice.actions;

export default taskSlice.reducer;