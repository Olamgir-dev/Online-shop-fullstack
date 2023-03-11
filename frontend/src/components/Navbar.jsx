import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setGlasses } from '../redux/reducers/glasses';
import '../sass/navbar.scss'
function Navbar() {
 const dispatch = useDispatch();
 const selector = useSelector(state=>state.glasses.isGlases);

    return (
        <>
            <nav className="container-fluid navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand nav-link" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="add">Add Pruduct</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="categorys">Category</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav gap-2 me-0 mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <div className='nav-link' style={{cursor:"pointer"}} onClick={()=>dispatch(setGlasses(!selector))}>
                                <i className='fs-4 bx bx-glasses'></i>
                            </div>
                        </li>
                        <li className='nav-item'>
                           <Link className='nav-link' to='login'>Log in</Link>
                        </li>
                        <li className='nav-item'>
                           <Link className='nav-link' to='signup'>Sign up</Link>
                        </li>
                    </ul>
                    </div>
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar