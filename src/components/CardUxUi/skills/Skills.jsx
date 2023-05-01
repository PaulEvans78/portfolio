import React from "react";
// import upperPic from '../../../assets/screens.jpg';
// import middlePic from '../../../assets/react.jpg'; 
import designPic from '../../../assets/ux.png'
import filmPic from '../../../assets/vikings.png'
import Card from '../../CardUxUi/Card';


const Skills = () => {
    const skillsData = [
        {
            mainPic: designPic,
            // upperPic: upperPic,
            // middlePic: middlePic,
            headline: "UX / UI & \n Frontend Design",
            description: "See my portfolio.",
            buttonText: "View More",
            buttonLink: "/"
        },
        {
            mainPic: filmPic,
            // upperPic: upperPic,
            // middlePic: middlePic,
            headline: "Film/ \n Cinematographer",
            description: "Directs you to an external site.",
            buttonText: "View More",
            buttonLink: "/"
        },
        
    ];

    return (
        <>
        {skillsData.map(skill => <Card {...skill} />)}
        </>
    )
}

export default Skills;