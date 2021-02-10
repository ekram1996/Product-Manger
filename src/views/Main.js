import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }
    return (
        <div>
            <ProductForm/>
            <hr/>
           {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}