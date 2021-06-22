import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const ProductList = () => {
    const products = useSelector(state => state.product.inventory)
    return products.map(product => {
        return <ProductItem key={product._id} {...product} />
    })
}

export default ProductList
