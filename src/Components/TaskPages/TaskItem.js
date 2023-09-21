import React from 'react'
import {TaskContainer } from '../../Common/CommonComponents';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { deleteTask } from '../../Services/Services';
import { markCompleted } from '../../Services/Services';
const TaskItem = (props) => {

  const deleteATask = ()=>{

    deleteTask(props.id,(receivedTasks)=>{
      props.onDeleteTask(receivedTasks);
      console.log("Delete successful");
    })
  }

  const markCompletedTask = () => {
    if(!props.task.status){
    markCompleted(props.id,(receivedTasks)=>{
      props.onDeleteTask(receivedTasks);
    }
    );
  }
  }

  return (
    <>
    <TaskContainer style={{minHeight:'30%',height:'30%',margin:'0',padding:'0',width:'60%',background:'#F5EBEB',flexDirection:'column', marginTop:'20px'}}>
            <TaskContainer style={{height:'30%',margin:'0',padding:'0',width:'100%',background:'#F5EBEB',zIndex:'10'}}>
              <div style={{width:'100%',textAlign:'center',fontSize:'16px',color:'#952323',opacity:'1',background:'rgba(0,0,0,0)',marginTop:'8px',border:'none',height:'100%',outline:'none',overflow:'wrap'}}>
            <span style={{fontWeight:'600'}}>{props.task.title}</span>
            <DeleteIcon onClick={deleteATask} sx={{float:'right' , marginRight:'5px' , cursor:'pointer',':hover':{opacity:'0.5'}}}/>
            <AddTaskIcon onClick={markCompletedTask} disabled={true} sx={{float:'right' , marginRight:'5px' , cursor:'pointer',':hover':{opacity:'0.5'}, color:`${props.task.status && 'green'}`, disabled:'true'}}/>
            </div>
            </TaskContainer>
            <p style={{color:'#952323',textAlign:'left',
            fontSize:'16px',padding:'0px 5px 0px 5px',opacity:'1',background:'rgba(0,0,0,0)',marginTop:'20px',border:'none',height:'50%',outline:'none',overflow:'wrap'}}>
              {props.task.detail} 
              </p>
              <span style={{color:"gray", fontStyle:"italic", fontSize:"15px"}}>
                Complete by: {props.task.date}
              </span>
        </TaskContainer>
          
              </>
  )
}

export default TaskItem