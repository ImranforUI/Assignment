import Axios from 'axios';
import React, { useState, useEffect } from 'react';


let User = () => {

    let [user , setUser] = useState({
        users : [],
        errorMessage : ''
    });
    useEffect(() => {
        let dataURL = `https://reqres.in/api/users?page=2`;
        console.log('Feching data from server');
        Axios.get(dataURL).then((response) => {
            setUser({
               ...user,
               users: response.data.data
            });
        }).catch((err) => {
            setUser({
               ...user,
               errorMessage: err
            });
        });
    },[]);
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className='table table-primary table-hover table-stripped text-center'>
                            <thead className='bg-primary text-white'>
                                <th>ID</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Avatar</th>
                            </thead>
                            <tbody>
                                {
                                    user.users.length >  0 ? 
                                    <React.Fragment>
                                        {
                                            user.users.map((user) => {
                                                return(
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.first_name}</td>
                                                        <td>{user.last_name}</td>
                                                        <td>
                                                            <img src={user.avatar} alt="" className="rounded-circle" height='100' width='100' />
                                                        </td>
                                                       
                                                    </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            
        </React.Fragment>
    )
};
export default User;