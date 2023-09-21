import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'
import {TaskContainer} from '../../Common/CommonComponents'
import Heading from './Heading';
import BasicDateCalendar from './Calendar';
import AddTasks from './AddTasks';
import DisplayTask from './DisplayTask';
import { getTasks } from '../../Services/Services';



const TaskPages = (props) => {

  const [tasks, setTasks] = useState([]);
  const [userName,setUserName] = useState("John Doe");

  useEffect(()=>{
     getTasks((data)=>{
      setTasks(data.tasks);
      setUserName(data.userName);
      console.log(data.tasks);
    });
    
  },[]);



  return (
    <>
        <Navbar userName={userName} onLogOut={props.onLogOut} />
         <Heading name={userName}/>
         <TaskContainer>
          <div className={"left"} style={{width:'50%',height:'100%'}}>
            <div className='calendar' style={{width:'100%',height:'57%',padding:"0px",margin:"0px"}}>
              <BasicDateCalendar/>
            </div>
            <div className='addTask' style={{width:'73%',height:'50%',margin:'auto'}}>
              <AddTasks addToTasks={(tasks)=>{setTasks(tasks)}}/>
            </div>
          </div>
          <div className={"right"} style={{width:'50%',height:'100%'}}>
            <DisplayTask onDeleteTask={(tasks)=>{setTasks(tasks)}} tasks={tasks}/>
          </div>
         </TaskContainer>
    </>
  )
}

export default TaskPages