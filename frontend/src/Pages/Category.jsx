import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Cards from '../components/Cards'
function Category() {
  const { categoryName } = useParams()
  const [isLodet, setIsLodet] = useState()
  const [categorys, setCategorys] = useState()

  // console.log(categoryName);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/categorys/${categoryName}`, config)
      .then(res => {
        setCategorys(res.data)
        setIsLodet(true)
      })
    return () => {
      setIsLodet(false)
    }
  }, [])
  return (
    <>

      <div className="container">
        <div className="row">
          {
            isLodet ? (
              categorys.map(category => {
                return <Cards product={category} key={category._id} />
              })
            ) : (<h1 style={{ height: "80vh" }} className='w-100'>
              <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
            </h1>)
          }
        </div>
      </div>

    </>
  )
}

export default Category