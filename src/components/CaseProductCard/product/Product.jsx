import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';


const Product = () => {
    const [productData, setProductData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setProductData(result.data.casespotify);
        };
        fetchData();

       }, []);


    return (
        <>
            {productData.map(product => <Card {...product} />)}
        </>

    )
}

export default Product;