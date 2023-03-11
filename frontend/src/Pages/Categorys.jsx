import React, { useEffect, useState } from 'react'
import axios from 'axios'

import CategoryCard from '../components/CategoryCard'
function Categorys() {
    // const products = useSelector(state => state.products.array)
    // const desputch = useDispatch()
    const [categorys, setCategorys] = useState([])
    const [isLodet, setIsLodet] = useState(false);
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    useEffect(() => {
        axios
            .get('http://localhost:5000/categorys', config)
            .then(res => {
                setCategorys(res.data)
                setIsLodet(true)
            })
        return () => {
            setIsLodet(false)
        }
    }, [])
  return (
  
     <>{isLodet ?
            (< div className="container" >
                <div className="text-center h1">Category</div>
                <div className="row">
                    {
                        categorys.map(catgory => <CategoryCard key={catgory._id} product={catgory} />)
                    }
                </div>
            </div >) :
            (<h1 style={{ height: "80vh" }} className='w-100'>
                <i style={{ position: "fixed", top: "45vh", left: "50vw", zIndex: 12, fontSize: "100px" }} className='bx bx-loader bx-spin bx-flip-horizontal' ></i>
            </h1>)
        }
        </>

  )
}

export default Categorys