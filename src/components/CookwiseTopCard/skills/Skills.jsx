import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../CaseTopCard/Card';



const Skills = () => {
    const [skillsData, setSkillsData] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setSkillsData(result.data.cookwisetopcards);
        };
        fetchData();

       }, []);


    return (
        <>
            {skillsData.map(skill => <Card key={skill.id} {...skill} />)}
        </>

    )
}

export default Skills;