import React from 'react';
// import axios from 'axios';
// import upperPic from '../../../assets/screens.jpg';
// import middlePic from '../../../assets/react.jpg'; 
import designPic from '../../../assets/ux.png'
import filmPic from '../../../assets/vikings.png'
import Card from '../Card';



const Skills = () => {
    const skillsData = [
        {
           
            mainPic: designPic,
            headline: "UX / UI & \n Frontend Design",
            description: "See my portfolio.",
            buttonText: "View More",
            buttonLink: "/"
        },
        {
            mainPic: filmPic,
            headline: "Film/ \n Cinematographer",
            description: "Directs you to an external site.",
            buttonText: "View More",
            buttonLink: "/https://www.paulevans-dop.com"
        },
        
    ];

    return (
        <>
        {skillsData.map(skill => <Card {...skill} />)}
        </>
    )
}

export default Skills;