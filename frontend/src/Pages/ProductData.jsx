import React, { useEffect, useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../sass/Cards.scss'

function ProductData() {
   const { id } = useParams()
   const [product, setProduct] = useState()
   const [isLodet, setIsLodet] = useState(false)
   const [display, setDisplay] = useState(false)
   const [data, setData] = useState();
   const [categorys, setCategorys] = useState([]);

   const config = {
      headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
   };
   useEffect(() => {
      axios.get(`http://localhost:5000/products/${id}`, config)
         .then(res => {
            setProduct(res.data)
            setIsLodet(true)
         })
         .catch(err => { console.log(err) })
      return () => {
         setIsLodet(false)
      }
   }, [])
   useEffect(() => {
      axios
         .get('http://localhost:5000/categorys', config)
         .then(res => setCategorys(res.data))
         .catch(err => console.log(err));
   }, [])
   const handleDelete = (e) => {
      e.preventDefault()
      axios.delete(`http://localhost:5000/products/${id}`, config)
         .then(res => {
            console.log(res)
            Swal.fire(
               'Yaxshi!',
               'Malumot muvaffaqiyatli uchirdinggiz',
               'success'
            )
         })
         .catch(err => {
            console.log(err)
            Swal.fire(
               'Xato...',
               'Afsuski malumot uchmadi',
               'error'
            )
         })
   }
   const handleChange = (e) => {
      let value = e.target.value;
      let name = e.target.name;
      setData({ ...data, [name]: value });
   };

   const handlSubment = () => {
      axios
         .put(`http://localhost:5000/products/${id}`, data, config)
         .then((res) => {
            console.log(res)
            Swal.fire(
               'Yaxshi!',
               'Malumot muvaffaqiyatli Tahrirlandi',
               'success'
            )
         })
         .catch(err => {
            console.log(err)
            Swal.fire(
               'Xato...',
               'Afsuski malumot Tahrirlanmadi',
               'error'
            )
         })
   }
   return (
      <>
         {isLodet ?
            <div className="container mt-5">
               <div className="row border">
                  <div className="col-xl-6 cardImage border">
               <img className='w-100 img' style={{height:"450px",objectFit:'contain'}} src={product.image} alt="" /> 
                  </div>
                  <div className="col-xl-6 border p-5">
                     <div className="row">
                        <h5 className='text-center'> {product.title}</h5>
                        <p className='h6 fw-lg'>
                           <span className='h5 fw-xl'>Description: <br /></span>
                           {product.description}</p>
                        <p className='h6 fw-lg'>
                           <span className='h5 fw-xl'>Price: <br /></span>
                           {product.price}</p>
                        <h5> <span className='fw-lg'>Category : <br /></span> {product.category} </h5>
                        <h6>Created time: <br /> {product.createdAt}</h6>
                        <h6>Updated time: <br /> {product.updatedAt}</h6>
                        <h6>Updated counter:    {product.__v}</h6>
                        <div className="d-flex justify-content-around align-text-bottom">
                           <button type="button" className="btn btn-outline-primary">
                              <Link onClick={() => setDisplay(!display)} className="btn fw-bold w-100" >Ubdate</Link>
                           </button>
                           <button onClick={(e) => handleDelete(e, '/')} type="button" className="btn btn-outline-danger" >
                              <Link className="btn fw-bold w-100" to='/'>Delete</Link>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            :
            (<h1 style={{ height: "80vh" }} className='w-100'>
               <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
            </h1>)
         }
         {display &&
            <div className="container w-100"  >

               <div style={{ position: "fixed", top: "0", left: "0", zIndex: 1121, backgroundColor: 'rgb(200,200,200,0.8)' }} className="row w-100 h-100">
                  <div className="col-xl-3"></div>
                  <div className="col-xl-6 border " style={{ backgroundColor: '#376FBD' }}>
                     <div className="d-flex justify-content-end">
                        <i style={{ cursor: 'pointer' }} onClick={() => setDisplay(!display)} className=' fs-3 bx bxs-x-circle'></i>
                     </div>
                     <h1 className='text-center my-4'>Ubdate Product</h1>
                     <form >
                        <div className="input-group mb-3">
                           <span className="input-group-text col-4" id="inputGroup-sizing-default">title</span>
                           <input
                              name="title"
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control col-8"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                           <span className="input-group-text col-4" id="inputGroup-sizing-default">category</span>
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
                           <span className="input-group-text col-4" id="inputGroup-sizing-default">description</span>
                           <input
                              name="description"
                              onChange={(e) => handleChange(e)}
                              type="text"
                              className="form-control col-8"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                           <span className="input-group-text col-4" id="inputGroup-sizing-default">price</span>
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
                              accept="image/png, image/gif, image/jpg"
                              className="form-control col-8"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                           <span className="input-group-text col-4" id="inputGroup-sizing-default">rating value</span>
                           <input
                              name="rating_value"
                              onChange={(e) => handleChange(e)}
                              type="number"
                              className="form-control col-8"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                           <span className="input-group-text col-4" id="inputGroup-sizing-default">rating numberOfRates</span>
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
                              <Link className="btn fw-bold" to='/'>Ubdate</Link>
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         }
      </>
   )
}

export default ProductData