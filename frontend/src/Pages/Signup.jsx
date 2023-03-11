import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
function Signup() {
    const [data, setData] = useState({});
    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setData({ ...data, [name]: value });
    };
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    const handlSubment = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/users/signup', data, config)
            .then(res => {
                Swal.fire(
                    'Yaxshi!',
                    `${res.data.firstname} Siz mvofaqiyatli ruyxatdan utdinggiz!`,
                    'success'
                ).then((result) => {
                    result.onClick = () => {
                        window.href = '/';
                    }
                })
            })
            .catch(err => {
                console.log(err)
                Swal.fire(
                    'Xatolik!',
                    "Oldin ruyxatdan utilgan!",
                    'error'
                )
            })
    }
    return (
        <div className='container'>
            <div className="row">
                <h1 className='text-center'>Sign Up</h1>
                <div className="col-xl-3"></div>
                <div className="col-xl-6">
                    <form >
                        <div className="form-group my-2">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                placeholder="First Name" />
                        </div>
                        <div className="form-group my-2">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                placeholder="Last Name" />
                        </div>
                        <div className="form-group my-2">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                placeholder="Email" />
                        </div>
                        <div className="form-group my-2">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                placeholder="Password" />
                        </div>
                        <div className="form-group my-2">
                            <label>Phone number</label>
                            <input
                                type="number"
                                name="phone"
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                placeholder="99 999 99 99" />
                        </div>
                        <div className='d-flex justify-content-end mt-2'>
                            <Link onClick={(e) => handlSubment(e)} type="submit" className="mt-4 btn btn-outline-secondary" to='/'>
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup