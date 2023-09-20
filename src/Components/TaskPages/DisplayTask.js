import React from 'react'
import {Displaytask } from '../../Common/CommonComponents';
import TaskItem from './TaskItem';

const DisplayTask = (props) => {
    return (
        <Displaytask style={{overflowY:'scroll'}}>
            <div style={{color:'white', fontSize:'30px',marginTop:'7px'}}>Tasks To Do</div>
            {props.tasks.map((task)=>{
                return(
                    <TaskItem task={{title:task.title,detail:task.detail}}/>
                )
            })}
            
        </Displaytask>
    );
}

export default DisplayTask;