import axios from 'axios'
import React ,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProducts, selectedProduct } from '../redux/actions'

function ProductDetail(props) {
const singleProduct = useSelector(state=>state.product.singleProduct)    
const { title, image,category, description, price} = singleProduct
const dispatch = useDispatch()
const productId= props.match.params.productId
 console.log(productId)
    const fetchSingleProduct = async ()=>{
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>console.log('error',err))

        dispatch(selectedProduct(res.data))
        console.log(res);
    }
    useEffect(()=>{
       if(productId && productId !=='')  fetchSingleProduct()
       return ()=>{
           dispatch(clearProducts())
       }
    }, [productId])
    return (
        <>
        {Object.keys(singleProduct).length>0 ? (<div>
           <div className="ui placeholder segment">
               <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="middle aligned row">
                    <div className="column lp">
                        <img src={image} alt="" className="ui fluid image" />
                    </div>
                    <div className="column rp">
                        <h1>{title}</h1>
                        <h2 className="ui teal tag label">{price}</h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>
                        <div className="ui vertical animated button" tabIndex='0'>
                            <div className="hidden content">
                                <i className="shop icon"></i>
                            </div>   
                            <div className="visible content">Add to Cart</div>                     
                        </div>
                    </div>
                </div>
               </div>
           </div>
        </div>):'Loading...' }
        </>
    )
}

export default ProductDetail
