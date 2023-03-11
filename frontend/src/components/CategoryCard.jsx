import React from 'react'
import {Link} from 'react-router-dom'
function CategoryCard(props) {
    const data = props.product
  return (
    <>
    <div className=" col-ms-12 col-md-6 col-lg-4 col-xl-3 mt-3 px-2" >
        <div className="card" style={{ height: "400px" }}>
            <img className='img' style={{ height: "50%" }} src={data.image} alt="404" />
            <div className="card-body">
                <h5 className='card-title'>{data.name}</h5>
                <div className="d-flex justify-content-end">
                    <Link to={`${data.name}`} className='btn btn-outline-secondary'>More</Link>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default CategoryCard