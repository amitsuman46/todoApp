import React from 'react'
import Navbar from './Navbar'
import {TaskContainer} from '../../Common/CommonComponents'
import Heading from './Heading';
import BasicDateCalendar from './Calendar';
import AddTasks from './AddTasks';
import DisplayTask from './DisplayTask';
const TaskPages = (props) => {
  return (
    <>
        <Navbar userName="John Doe" onLogOut={props.onLogOut} />
         <Heading/>
         <TaskContainer>
          <div className={"left"} style={{width:'50%',height:'100%'}}>
            <div className='calendar' style={{width:'100%',height:'57%',padding:"0px",margin:"0px"}}>
              <BasicDateCalendar/>
            </div>
            <div className='addTask' style={{width:'73%',height:'50%',margin:'auto'}}>
              <AddTasks/>
            </div>
          </div>
          <div className={"right"} style={{width:'50%',height:'100%'}}>
            <DisplayTask/>
          </div>
         </TaskContainer>
    </>
  )
}

export default TaskPages