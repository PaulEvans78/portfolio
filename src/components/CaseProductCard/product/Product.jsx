// import React from "react";
import React from 'react';
// import axios from 'axios';
// import upperPic from '../../../assets/screens.jpg';
// import middlePic from '../../../assets/react.jpg'; 
import Spotify1 from '../../../assets/spotify1.png';
import Spotify2 from '../../../assets/spotify2.png';
import Spotify3 from '../../../assets/spotify3.png';
// import TeamPic from '../../../assets/margarida-afonso-F01g8NPdOdo-unsplash.jpg';
// import MethodPic from '../../../assets/kelly-sikkema-jr61kHaWKek-unsplash.jpg';
// import filmPic from '../../../assets/vikings.png'
import Card from '../Card';



const Product = () => {
    const ProductData = [
        {
           
            mainPic: Spotify1,
            // headline: "Tools",
            // description: "Figma, Photoshop, Google Forms ",
        },
        {
            mainPic: Spotify2,
            // headline: "Role",
            // description: "Scrum Master & UX Designer.",
        },
        {
            mainPic: Spotify3,
            // headline: "Method",
            // description: "Working in an team of four we used scrum",
        }
        
    ];

    return (
        <>
        {ProductData.map(product => <Card {...product} />)}
        </>
    )
}

export default Product;