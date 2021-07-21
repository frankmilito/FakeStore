import React, {useEffect} from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
function ProductListing() {
    const product = useSelector(state=>state.product)
    console.log(product)
    const dispatch = useDispatch()
    const getProducts = async() => {
        const res = await axios.get('https://fakestoreapi.com/products').catch(err=>console.log('error', err))
        dispatch(setProducts(res.data))
    }
    useEffect(()=>{
        getProducts()
    },[])
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
