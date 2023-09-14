import React from 'react'
import {TaskContainer } from '../Common/CommonComponents';
const TaskItem = () => {
  return (
    <TaskContainer style={{height:'30%',margin:'0',padding:'0',width:'60%',background:'#F5EBEB',flexDirection:'column'}}>
            <TaskContainer style={{height:'30%',margin:'0',padding:'0',width:'100%',background:'#F5EBEB',zIndex:'10'}}>
              <div style={{width:'100%',textAlign:'left',fontSize:'16px',color:'#952323',opacity:'1',background:'rgba(0,0,0,0)',marginTop:'8px',border:'none',height:'100%',outline:'none',overflow:'wrap'}}>
            <span>'Add Task Title' </span>
            <img src="src\Assets\Completed.png" alt="Delete" />
            </div>
            </TaskContainer>
            <p style={{color:'#952323',textAlign:'center',
            fontSize:'16px',padding:'0px 5px 0px 5px',opacity:'1',background:'rgba(0,0,0,0)',marginTop:'20px',border:'none',height:'50%',outline:'none',overflow:'wrap'}}>
              Add Task Detail 
              </p>
        </TaskContainer>
  )
}

export default TaskItem