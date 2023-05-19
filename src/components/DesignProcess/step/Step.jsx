import React from 'react';
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