import React, {useState, useEffect} from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/taks.class';
import TaskComponent from '../pure/taskComponent';

const TaskListComponent=() => {
    //Estado del componente:
    const defaultTask= new Task('Example','Default description',false,Levels.NORMAL);
    const [tasks, setTasks]=useState(defaultTask);
    const [loading, setLoading]=useState(true);

    //COntrol del ciclo de vida del componente:
    useEffect(() => {
        console.log("Tasks state has been modified");
        setLoading(false);
        return () => {
            console.log("Task list component is going to unmount");
        };
    }, [tasks]);



    const changeCompleted=(id)=>{
        console.log("TODO: Cambiar estado de una tarea");
    }

    return (
        <div>
            <h1>
                Your tasks:
            </h1>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}

export default TaskListComponent;