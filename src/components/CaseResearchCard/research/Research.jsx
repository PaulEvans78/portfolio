// import React from "react";
import React from 'react';
import QuestionMark from '../../../assets/research.png';
// import filmPic from '../../../assets/vikings.png'
import Card from '../Card';



const Research = () => {
    const researchData = [
        {
           
            // mainPic: ,
            headline: "Research",
            description: "Used qualitative and quantitive metods. Particiapted in interviews and aided in creating a questionnaire. Created Personas. ",
        }
        
    ];

    return (
        <>
        {researchData.map(research => <Card {...research} />)}
        </>
    )
}

export default Research;