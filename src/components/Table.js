import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Table = () => {
    const { data, setData, setTask, setTaskId } = useContext(DataContext);

    const deleteTask = id =>{
        setData(data.filter(d => d.id !== id))
    }
    const editTask = (task) => {
        // console.log(task)
        setTaskId(task.id);
        setTask(task);
    }

    return ( 
        <div className="col-md-8">

            <table className="table">
                <thead>
                    <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Title</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Tutor</th>
                    <th scope="col">Opcion</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.length > 0 ?
                    data.map(d => (
                        <tr key={d.id}>
                            {/* <td >{d.id}</td> */}
                            <td >{d.title}</td>
                            <td>{d.description}</td>
                            <td>{d.tutor}</td>
                            <td>
                                <button className="btn btn-warning"
                                    onClick={() => editTask(d)}
                                >
                                    editar</button>
                                <button className="btn btn-danger"
                                    onClick={() => deleteTask(d.id)}
                                >borrar</button>
                            </td>
                        </tr>
                        ))
                    : (
                        <tr>
                            <td>No hay Datos</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            
        </div>
     );
}
 
export default Table;