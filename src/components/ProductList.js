import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/finds/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            <h1>All Products:</h1>
            {props.product.map((product, idx)=>{
               return <p key={idx}>
               <Link to={"/" + "product"+"/"+product._id}>
                   {product.title}
               </Link>
                                    |
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                    </p>
            })}
        </div>
    )
}