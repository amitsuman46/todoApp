import React from 'react'
import {Displaytask } from '../../Common/CommonComponents';
import TaskItem from './TaskItem';

const DisplayTask = (props) => {
    {console.log(props.tasks)}
    return (
        <Displaytask style={{overflowY:'scroll'}}>
            <div style={{color:'white', fontSize:'30px',marginTop:'7px'}}>Tasks To Do</div>
            {props.tasks.map((task)=>{
                return(
                    <TaskItem task={{title:task.title.trim(),detail:task.detail.trim()}}/>
                )
            })}
            
        </Displaytask>
    );
}

export default DisplayTask;