import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
import { setProducts } from '../redux/reducers/AllPrudactRedusers'
import { useSelector, useDispatch } from 'react-redux'
function ProductList() {
    const products = useSelector(state => state.products.array)
    const desputch = useDispatch()
    const [isLodet, setIsLodet] = useState(false);
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    useEffect(() => {
        axios
            .get('http://localhost:5000/products', config)
            .then(res => {
                desputch(setProducts(res.data))
                setIsLodet(true)
            })
        return () => {
            setIsLodet(false)
        }
    }, [])
    return (
        <>{isLodet ?
            (< div className="container" >
                <h1 className='text-center'>Product List</h1>
                <div className="row">
                    {
                        products.map(product => <Cards key={product._id} product={product} />)
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

export default ProductList