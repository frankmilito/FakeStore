import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductComponent() {
    const {product} = useSelector(state=>state.product)

    const renderList = product.map(item=>{
        const {id, title, price,image, category}= item
        return(
            <div key = {id} className="four colomn wide">
            <Link to ={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        )
    })
    return (
       <>
        {!product.length?'Loading':renderList }
       </>
    )
}

export default ProductComponent
