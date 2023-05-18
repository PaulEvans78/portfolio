import React from 'react';
import ToolsPic from '../../../assets/sigmund-_dJCBtdUu74-unsplash.jpg';
import TeamPic from '../../../assets/margarida-afonso-F01g8NPdOdo-unsplash.jpg';
import MethodPic from '../../../assets/kelly-sikkema-jr61kHaWKek-unsplash.jpg';
import Card from '../../CaseTopCard/Card';



const Skills = () => {
    const skillsData = [
        {
           
            mainPic: ToolsPic,
            headline: "Tools",
            description: "Figma, Photoshop, Google Forms ",
        },
        {
            mainPic: TeamPic,
            headline: "Role",
            description: "Scrum Master & UX Designer.",
        },
        {
            mainPic: MethodPic,
            headline: "Method",
            description: "Scrum",
        }
        
    ];

    return (
        <>
        {skillsData.map(skill => <Card {...skill} />)}
        </>
    )
}

export default Skills;