import React, { useContext } from 'react';
import { DataContext } from "../context/DataContext";
import { useForm } from 'react-hook-form'

const Formulario = () => {
    const {register, errors, handleSubmit} = useForm();
    const { addTask, task, setTask, taskId } = useContext(DataContext)

    const onSubmit = (data, e) => {
        addTask(data);
        e.target.reset();
    }
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: value
        })
    }
    
    return ( 
        <div className="col-md-4">
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <div className="col-12">
                    <label className="form-label">Titulo</label>
                    <input type="text" 
                        className="form-control"
                        name='title'
                        value={task.title}
                        onChange={handleChange}
                        ref={register({
                            required: {
                                value: true, 
                                message: 'Nombre es requerido'
                            },
                        })}
                    />  
                {
                    errors.title && <span className="text-danger text-small d-block mb-2">{errors.title.message}</span>
                }
                </div>
                <div className="col-12">
                    <label className="form-label">Descripcion</label>
                    <input type="text" 
                        className="form-control"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        ref={register({
                            required: {
                                value: true, 
                                message: 'Descripcion es requerido'
                            },
                        })}
                    />
                {
                    errors.description && <span className="text-danger text-small d-block mb-2">{errors.description.message}</span>
                }
                </div>
                <div className="col-12">
                    <label className="form-label">Tutor</label>
                    <input type="text" 
                        className="form-control"
                        name="tutor"
                        value={task.tutor}
                        onChange={handleChange}
                        ref={register({
                            required: {
                                value: true, 
                                message: 'Tutor es requerido'
                            },
                        })}
                    />
                {
                    errors.tutor && <span className="text-danger text-small d-block mb-2">{errors.tutor.message}</span>
                }
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                       { (taskId !== '') ? 'Editar' : 'Crear'} 
                    </button>
                </div>

            </form>
        </div>
     );
}
 
export default Formulario;