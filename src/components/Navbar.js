import React from 'react';

import { Link } from 'react-router-dom';


let Navbar = () => {


   
    return (
        <React.Fragment>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className="container">
                    <Link to='/' className='navbar-brand'>Excellence TechnoSoft(Assignment)</Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to='/todo' className='nav-link'>Todo-App</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/users' className='nav-link'>Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
};

export default Navbar;