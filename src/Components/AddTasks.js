import React from 'react'
import { H2, TaskContainer } from '../Common/CommonComponents';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddTasks = () => {
  return (
    <TaskContainer style={{height:'60%',background:'#D9D9D9',flexDirection:'column'}}>
        <TaskContainer style={{height:'70%',margin:'0',padding:'0',width:'100%',background:'#952323',flexDirection:'column'}}>
            <TaskContainer style={{height:'30%',margin:'0',padding:'0',width:'100%',background:'#952323',zIndex:'10'}}>
            {/* <H2 style={{color:'#D9D9D9',width:'100%',textAlign:'center'}}>ADD TASK</H2> */}
            <textarea placeholder='Add Task Title' 
            style={{width:'100%',textAlign:'center',fontSize:'24px',color:'#D9D9D9',opacity:'1',background:'rgba(0,0,0,0)',margin:'auto',border:'none',height:'100%',outline:'none',overflow:'wrap'}}/>
            </TaskContainer>
            <textarea placeholder='Add Task Detail' style={{textAlign:'center',fontSize:'16px',padding:'0px 5px 0px 5px',color:'#D9D9D9',opacity:'1',background:'rgba(0,0,0,0)',marginTop:'20px',border:'none',height:'50%',outline:'none',overflow:'wrap'}}/>
        </TaskContainer>
        <Fab sx={{background:'#952323',margin:'auto','&:hover': {
          backgroundColor: '#D9D9D9', // Custom hover color for Fab
          '& .MuiSvgIcon-root': {
            color: '#952323',
            background:'#D9D9D9',
            transition: 'background-color 0.3s' // Custom hover color for AddIcon
          }}}} aria-label="add" >
        <AddIcon sx={{transition: 'background-color 0.3s',background:'#952323',color:'#D9D9D9'}}/>
      </Fab>
    </TaskContainer>
  )
}

export default AddTasks