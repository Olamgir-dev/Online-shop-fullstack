import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/Cards.scss'
function Cards(props) {
    const data = props.product;
    return (
        <>
            <div className=" col-ms-12 col-md-6 col-lg-4 col-xl-3 mt-3 px-2" >
                <div className="card" style={{ height: "400px" }}>
                    <img className='img w-100' style={{ height: "60%" }} src={data.image} alt="404" />
                    <div className="card-body">
                        <h5 className='card-title'>{data.title}</h5>
                        <p className='cart-text'>{data.price} $</p>
                        <div className="d-flex justify-content-end">
                            <Link to={`/${data._id}`} className='btn btn-outline-secondary'>More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards