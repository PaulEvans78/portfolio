// import React from "react";
import React from 'react';
import QuestionMark from '../../../assets/questionmark.png';
// import filmPic from '../../../assets/vikings.png'
import Card from '../Card';



const Research = () => {
    const researchData = [
        {
           
            mainPic: QuestionMark,
            headline: "Research",
            description: "Used qualitative and quantitive metods. Particiapted in interviews and aided in creating a questionnaire.  ",
        }
        
    ];

    return (
        <>
        {researchData.map(research => <Card {...research} />)}
        </>
    )
}

export default Research;