import React from 'react';
import { Levels } from '../../models/levels.enum';
import { Task } from '../../models/taks.class';
import TaskComponent from '../pure/taskComponent';

const TaskListComponent=() => {
    const defaultTask= new Task('Example','Default description',false,Levels.NORMAL);
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