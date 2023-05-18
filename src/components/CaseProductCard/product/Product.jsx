import React from 'react';
import Spotify1 from '../../../assets/spotify1.png';
import Spotify2 from '../../../assets/spotify2.png';
import Spotify3 from '../../../assets/spotify3.png';
import Card from '../Card';



const Product = () => {
    const ProductData = [
        {
           
            mainPic: Spotify1,
        },
        {
            mainPic: Spotify2,
        },
        {
            mainPic: Spotify3,
        }
        
    ];

    return (
        <>
        {ProductData.map(product => <Card {...product} />)}
        </>
    )
}

export default Product;