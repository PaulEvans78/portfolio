// import React from "react";
import React from 'react';
// import axios from 'axios';
// import upperPic from '../../../assets/screens.jpg';
// import middlePic from '../../../assets/react.jpg'; 
// import ToolsPic from '../../../assets/sigmund-_dJCBtdUu74-unsplash.jpg';
// import TeamPic from '../../../assets/margarida-afonso-F01g8NPdOdo-unsplash.jpg';
// import MethodPic from '../../../assets/kelly-sikkema-jr61kHaWKek-unsplash.jpg';
// import filmPic from '../../../assets/vikings.png'
import Card from '../../DesignProcess/Card';



const Step = () => {
    const StepData = [
        {
            headline: "1",
            description: "Research",
        },
        {
            headline: "2",
            description: "Personas",
        },
        {
            headline: "3",
            description: "Wireframing",
        },
        {
            headline: "4",
            description: "Prototyping",
        },
        {
            headline: "5",
            description: "User & A/B test",
        }
        
    ];

    return (
        <>
        {StepData.map(step => <Card {...step} />)}
        </>
    )
}

export default Step;