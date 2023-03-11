import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProducts } from "../redux/reducers/AllPrudactRedusers";
import Swal from "sweetalert2";
import '../sass/ProductAdd.scss';
import { useEffect } from "react";
function PruductAdd() {
    const [data, setData] = useState({});
    const dispatch = useDispatch();
    const [categorys, setCategorys] = useState([]);
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    useEffect(() => {
        axios
            .get('http://localhost:5000/categorys', config)
            .then(res => setCategorys(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setData({ ...data, [name]: value });
    };
    dispatch(setProducts(data))
    const handlSubment = () => {
        axios
            .post("http://localhost:5000/products/add", data, config)
            .then(() => {
                setData({})
                Swal.fire(
                    'Yaxshi!',
                    "Mahsulot qo'shildi!",
                    'success'
                )
            })
            .catch(err => {
                console.log(err)
                Swal.fire(
                    'Xato...',
                    "Mahsulotni noto'g'ri kirildi!",
                    'error'
                )
            })
    }
    return (
        <div className='container mt-3'>
            <div className="row">
                <h1 className="text-center">Add Product</h1>
                <div className="col-xl-3"></div>
                <div className="col-xl-6">
                    <form >
                        <div className="input-group mb-3">
                            <span className="input-group-text col-4" id="inputGroup-sizing-default">Title</span>
                            <input
                                name="title"
                                onChange={(e) => handleChange(e)}
                                type="text"
                                className="form-control col-8"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text col-4" id="inputGroup-sizing-default">Category</span>
                            <select
                                onChange={(e) => handleChange(e)}
                                className="form-select"
                                name="category"
                                defaultValue={"Maxsulotni turini tanlang"}
                                id="category">
                                <option value="Maxsulotni turini tanlang" disabled hidden >Maxsulotni turini tanlang...</option>
                                {
                                    categorys.map(category => {
                                        return <option value={category.name} key={category._id}>{category.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text col-4" id="inputGroup-sizing-default">Description</span>
                            <input
                                name="description"
                                onChange={(e) => handleChange(e)}
                                type="text"
                                className="form-control col-8"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text col-4" id="inputGroup-sizing-default">Price</span>
                            <input
                                name="price"
                                onChange={(e) => handleChange(e)}
                                type="number"
                                className="form-control col-8"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text col-4" id="inputGroup-sizing-default">Upload image</span>
                            <input
                                name="image"
                                onChange={(e) => handleChange(e)}
                                type="text"
                                // accept="image/png, image/gif, image/jpg"
                                className="form-control col-8"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text col-4" id="inputGroup-sizing-default">Rating value</span>
                            <input
                                name="rating_value"
                                onChange={(e) => handleChange(e)}
                                type="number"
                                className="form-control col-8"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text col-4" id="inputGroup-sizing-default">Rating numberOfRates</span>
                            <input
                                name="rating_numberOfRates"
                                onChange={(e) => handleChange(e)}
                                type="number"
                                className="form-control col-8"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button onClick={handlSubment} type="button" className="btn btn-outline-secondary">
                                <Link to="/" className="btn">Add</Link>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default PruductAdd