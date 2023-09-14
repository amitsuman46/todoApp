import React from 'react'
import {Displaytask } from '../Common/CommonComponents';
import TaskItem from './TaskItem';

const DisplayTask = (props) => {
    return (
        <Displaytask>
            <div style={{color:'white', fontSize:'30px',marginTop:'7px', marginBottom:'7px'}}>Tasks To Do</div>
            <TaskItem/>
        </Displaytask>
    );
}

export default DisplayTask;