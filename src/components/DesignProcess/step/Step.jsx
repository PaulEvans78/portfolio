import React from 'react';
import Card from '../../DesignProcess/Card';



const Step = () => {
    const StepData = [
        {
            id: "1",
            headline: "1",
            description: "Research",
        },
        {
            id: "2",
            headline: "2",
            description: "Personas",
        },
        {
            id: "3",
            headline: "3",
            description: "Wireframing",
        },
        {
            id: "4",
            headline: "4",
            description: "Prototyping",
        },
        {
            id: "5",
            headline: "5",
            description: "User & A/B test",
        }
        
    ];

    return (
        <>
        {StepData.map(step => <Card key={step.id} {...step} />)}
        </>
    )
}

export default Step;