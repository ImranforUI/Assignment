import React from 'react';
import { useState } from 'react';


let Todo = () => {

    let [task , setTask] = useState({
        notes : [],
    });

    // handleInput
    let handleInput = (e) => {
        setTask({
            notes : e.target.value
        })

    };
    let [list , setList] = useState([]);

    let display = () => {
        let list = JSON.parse(localStorage.getItem('tasks'));
        list == null ? setTask([]) : setTask(list)
    };

    let insertTask = () => {
        list.unshift(task.notes);
        localStorage.setItem('tasks' ,  JSON.stringify(list));
        display();
    }

    // deleteItem
    let deleteItem = (index) => {
        list.splice(index , 1);
        localStorage.setItem('tasks' , JSON.stringify(list));
        display();
    }
 

    // submitTask
    let submitTask = (e) => {
        e.preventDefault()
      insertTask();
      setTask({ notes : ''});
      console.log(task.n)
    }

   
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(task)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h3">Task List</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitTask}>
                                    <div className="form-group">
                                        <input required
                                            onChange={handleInput}
                                            value={task.notes}
                                            type="text" className="form-control" placeholder='Task Name' />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className='btn btn-secondary btn-sm' value='Add Task' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-8">
                        <ul className='list-group'>
                           {
                               list.length > 0 ? 
                               <React.Fragment>
                                   {
                                       list.map((item , index) => {
                                           return (
                                            <li key={index} className='list-group-item list-group-item-action list-group-item-dark'>
                                            <span className='font-weight-bold'>{item}</span>
                                            <button className='close'>
                                                <i className='fa fa-times-circle' onClick={deleteItem.bind(this , index)}></i>
                                            </button>
                                        </li>
                                           )
                                       })
                                   }
                               </React.Fragment> : null
                           }
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Todo;