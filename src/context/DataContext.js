import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const dataFixed = [
        { id: uuidv4(), title: 'ReactJs', description: 'React Hook', tutor: 'Ret' },
        { id: uuidv4(), title: 'VueJs', description: 'Vue-Vuex', tutor: 'Vel' },
        { id: uuidv4(), title: 'AngularJs', description: 'Angular-Router', tutor: 'Angee' },
    ]

    const initTask = {
        id: '',
        title: '',
        description: '',
        tutor: ''
    };

    const [task, setTask] = useState(initTask);
    const [data, setData] = useState(dataFixed);
    const [taskId, setTaskId] = useState('');

    const addTask = t => {
        if(taskId !== ''){
            const newData = data.map((e, i) =>{
                if(taskId === e.id){
                    return data.splice(i,1,task)[0]
                }
                return e;
            })
            setData(newData);
            setTask(initTask);
            setTaskId('')
        }else{
            t.id = uuidv4();
            setData([
                ...data,
                t
            ])
            setTask(initTask);
        }
    } 
    return (
        <DataContext.Provider
            value={{data, setData, addTask, initTask, task, setTask, setTaskId, taskId}}
        >
            { children }
        </DataContext.Provider>

    );
}
 