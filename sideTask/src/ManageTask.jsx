
import {useEffect, useState} from "react";
import List from '@mui/material/List';
import {Box,Typography} from "@mui/material"
import TaskItem from "./Task";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from 'uuid';
const getInitialTasks = () =>{
  const data = JSON.parse(localStorage.getItem("Task"));
  if(!data) return [];
  return data;
}
export default function ManageTask() {
  const [Task,setTask] = useState(getInitialTasks);
  const remove = (id)=>{
    setTask((prev) =>{
      return prev.filter((t) => t.id !== id);
    })
  }

  useEffect(() => {
    localStorage.setItem(Task,JSON.stringify(Task));
  },[Task]);

  const toggle = (idx) =>{
    setTask((currData) =>{
      return currData.map((t) =>{
          if(t.id === idx){
            return {...t, accomplished:!t.accomplished};
          }else{
            return t;
          }
      });
    });
  };
  const Add = (mission) =>{
    setTask((currData) =>{
      return [...currData,{id:uuidv4(), mission:mission, accomplished:false}];
    })
  }
  return (
    <Box sx={{display:"flex" ,
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
    m:3
    }}>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            TASKS
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {Task.map((tasks) =>{
        return <TaskItem tasks={tasks} 
        removeTask={() => remove(tasks.id)} 
        key={tasks.id} 
        check={() => toggle(tasks.id)}/>
      })}
      <TaskForm Add={Add}/>
    </List>
    </Box>
  );
  
}
