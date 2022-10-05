import React,{useEffect} from 'react';
import PropTypes from 'prop-types'
import { Task } from '../../models/taks.class';
import '../../styles/task.scss'


const TaskComponent=({task})=>{

    useEffect(() => {
        console.log("Created task");
        return () => {
            console.log("Task ${task.name} is going to unmount");
        };
    }, [task]);
    return(
        <div>
            <h2 className='task-name'>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripción:{task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                This task is: {task.completed ? 'COMPLETED':'PENDING'}
            </h5>
        </div>
    )
};

TaskComponent.prototype={
    task:PropTypes.instanceOf(Task)
}

export default TaskComponent

