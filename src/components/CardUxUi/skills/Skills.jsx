// import React from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import upperPic from '../../../assets/screens.jpg';
// import middlePic from '../../../assets/react.jpg'; 
// import designPic from '../../../assets/ux.png'
// import filmPic from '../../../assets/vikings.png'
import Card from '../../CardUxUi/Card';

const Skills = () => {
    const [skillsData, setSkillsData] = useState([])
    const [githubData, setGithubData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'skills.json',
            );
            setSkillsData(result.data);
        };
        fetchData();

            const fetchGithubData = async () => {
                const result = await axios(
                    'https://api.github.com/users/PaulEvans78/repos',
                );
                setGithubData(result.data);
            };
            fetchGithubData();

    }, []);

    //Function to collect github url
    function getURL (repoId) {
        let repo = githubData.find(item => item.id === repoId)
        return  repo ? repo.html_url : undefined
    }

    //Function to collect github description
    function getGitRepoDescription (repoId) {
        let repo = githubData.find(item => item.id === repoId)
        return  repo ? repo.description : undefined
    }


    return (
        <>
            {skillsData.map(skill => <Card {...skill} url={getURL(skill.id)} githubdescription={getGitRepoDescription(skill.id)} />)}
        </>

    )
}

// const Skills = () => {
//     const skillsData = [
//         {
           
//             mainPic: designPic,
//             headline: "UX / UI & \n Frontend Design",
//             description: "See my portfolio.",
//             buttonText: "View More",
//             buttonLink: "/"
//         },
//         {
//             mainPic: filmPic,
//             headline: "Film/ \n Cinematographer",
//             description: "Directs you to an external site.",
//             buttonText: "View More",
//             buttonLink: "/"
//         },
        
//     ];

//     return (
//         <>
//         {skillsData.map(skill => <Card {...skill} />)}
//         </>
//     )
// }

export default Skills;