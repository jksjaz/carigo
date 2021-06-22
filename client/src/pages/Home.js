import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/ProductSlice'

import Header from '../components/Header'
import ProductList from '../components/productList'

const Home = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.product.loading)

    useEffect(() => {
        dispatch(fetchProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="mb-4">
            <Header/>
            <div className="container-fluid">
                {
                    loading ? 
                    <div className="d-flex mt-5 justify-content-center align-items-center">
                        <div className="spinner-grow text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                    <div className="row">
                        <ProductList/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Home
