// design process
// h1
// text
// spacing

// cards
// Homepage
// H0

// About
// Cookwise
// colors

import React from "react";
import styled from 'styled-components';
// import PlayerComponent from "../components/VideoPlayer/PlayerComponent";
// import ReactPlayer from 'react-player'
import spotifylogo from '../assets/spotifylogo.png';
import researchImg from '../assets/research.png';
import persona1 from '../assets/personas1.png';
import persona2 from '../assets/personas2.png';
import krisch from '../assets/krisch.png';
import syn from '../assets/syn.png';
import syn2 from '../assets/syn2.png';
// import backgroundPrototype from '../assets/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg';
// import SpotifyPrototype from '../assets/SpotifyPrototype'
import SpotifyPrototype from '../assets/ezgif.com-video-to-gif.gif';
import LoHiFiImg from '../assets/hifiLofiHifi.png'
import ABTestingImg from '../assets/ABTesting.png'
import Skills from "../components/CaseTopCard/skills/Skills";
import Product from "../components/CaseProductCard/product/Product";
// import Research from "../components/CaseResearchCard/research/Research";


const StyledMyImgContainer = styled.div`
/* grid-area: photo; */
width: 100vw;
display: flex;
/* padding: 1em; */
flex-direction: row;
justify-content: flex-start;
align-self: flex-start;
/* align-items: flex-start; */
/* font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
font-weight: bold;
color: whitesmoke; */
`;


const StyledMyImg = styled.img`
/* grid-area: photo; */
width: 50%;
margin: 2em 0em 0em 0em;

/* @media screen and (max-width: 767px) {
    width: 40%;
    margin: 3em 0em 0em 0em;

  } */
`;

const StyledTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100vw;
`;

const Styledh2 = styled.h2`
    display: flex;
    /* text-align: left; */
    align-self: flex-start;
    justify-items: flex-start;
    /* margin-top: 1em; */
    margin: 1em 0em 0em 1em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 26px;
    /* font-weight: 600; */
    color: whitesmoke;
`;

const Styledh3 = styled.h3`
    display: flex;
    /* text-align: left; */
    align-self: flex-start;
    justify-items: flex-start;
    /* margin-top: 1em; */
    margin: 2em 0em 0em 1em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
    /* font-weight: 600; */
    color: whitesmoke;
`;

const StyledMyRoleul = styled.ul`
    
    /* display: flex; */
    
    /* text-align: left; */
    align-self: flex-start;
    justify-items: flex-start;
    /* margin-top: 1em; */
    margin: 1em 1.5em 0em 1.5em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    /* font-weight: 600; */
    color: #ffffff;
`;


const StyledMyRoleli = styled.li`
    display: list-item;
    /* display: flex; */
    align-self: flex-start;
    justify-items: flex-start;
    margin: 1em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    color: #ffffff;
`;

const StyledTopCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 3em;
`;

const StyledProductCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledAboutContainer = styled.div`
    display: flex;
    /* justify-self: center; */
    justify-content: center;
    width: 85vw;
    /* margin: 0em 2em 0em 3em; */
    margin-top: 6em;
    padding: 2em;
    /* padding-left: 2em; */
    /* padding-right: 2em; */
    /* background-color: white; */
    border-radius: 10px;
`;

const StyledP = styled.p`
    display: flex;
    /* text-align: left; */
    align-self: flex-start;
    justify-items: flex-start;
    /* margin-top: 1em; */
    margin: 1em 1.5em 0em 1.5em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    /* font-weight: 600; */
    color: #ffffff;
`;

const StyledResearchCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 100vw;
    margin-top: 6em;
    margin-bottom: 3em;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledresearchTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    padding-left: 2em;
    padding-right: 2em;
`;
const StyledResearchImg = styled.img`
    align-self: flex-end;
    width: 45%;
    height: auto;
    margin: 2em 0em 0em 0em;
    border-radius: 10px;
`;

const StyledResearchImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100vw;
    margin-top: 4em;
    margin-bottom: 3em;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledResearchLogoImg  = styled.img`
    width: 30%;
    /* height: 550px; */
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;
`;

const StyledSectionHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100vw;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 6em;
`;

const StyledPersonaImg = styled.img`
    width: 45%;
    /* height: 550px; */
    margin: 3em 0em 0em 1.5em;
    border-radius: 10px;
`;

const StyledLoFih2 = styled.h2`
    display: flex;
    /* text-align: left; */
    align-self: flex-start;
    justify-items: flex-start;
    /* justify-self: flex-start; */
    /* margin-top: 1em; */
    margin: 1em 0em 0em 2em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 26px;
    /* font-weight: 600; */
    color: whitesmoke;
`;

const StyledLoHiFiContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-bottom: 3em;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledLoHiFiImg = styled.img`
    width: 95%;
    /* display: flex; */
    /* justify-content: space-between; */
    margin-top: 4em;
`;

const StyledABContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 4em;
`;

const StyledABTestingContainer = styled.div `
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-content: center;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledABImg = styled.img`
    width: 50%;
    /* height: 550px; */
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;
`;

const StyledFinalContainer = styled.div`
    /* background-color: black; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 100vw;
    margin-top: 6em;
    margin-bottom: 3em;
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 10px;
`;

const StyledFinalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-end;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 3em;
`;

// const StyledPrototypeContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: flex-start;
//     width: 100%;
//     border-radius: 10px;
//     margin-left: 2em;
// `;

const StyledPrototypeMov = styled.img`
/* background-color: black; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 600px;
    /* width:1000px; */
    margin-top: 4em;
    margin-bottom: 3em;
    /* padding-left: 2em; */
    /* padding-right: 2em; */
    border-radius: 10px;
`;


// const StyledPersonaSecondImg = styled.img`
//     width: 45%;
//     /* height: 550px; */
//     margin: 2em 0em 0em 0em;
//     border-radius: 10px;
// `;








function CaseSpotify() {

    return (
        <>
            <StyledMyImgContainer>
             <StyledMyImg src={spotifylogo} alt="Spotify Logo"/>
            </StyledMyImgContainer>

            <StyledTitleContainer>
                <Styledh2>Improving Spotify's accessibility features for the visually and hearing impaired. </Styledh2>
            </StyledTitleContainer>

            <StyledProductCardsContainer>
                <Product />
            </StyledProductCardsContainer>

            <StyledTopCardsContainer>
                <Skills />
            </StyledTopCardsContainer>

            <StyledAboutContainer>
                <StyledP>I was awarded the role of Scrum Master. An extremely rewarding experience which played to my strengths well planned, calm, and 
approachable. Effective communication, respect, and patience for each other's work processes are essential elements for any 
successful team project. It's also important to stay focused on the project's priorities and not get sidetracked by new ideas or add-ons
that may distract from the main goal. Keeping to a clear project plan and regularly reassessing priorities can help ensure that the 
project stays on track and meets its goals.

Regarding accessibility, it's crucial to consider the needs of all users, including those with disabilities, when developing software or 
digital products. Following WCAG guidelines is an excellent way to ensure that the product is accessible to as many people as 
possible. However, accessibility is not just about following guidelines. It's also about considering the user experience and how users 
with disabilities will interact with the product. This includes thinking about how to integrate accessibility features into the product's 
design and ensuring that these features are intuitive and easy to use.

Below you can read ore about the process.
                </StyledP>
            </StyledAboutContainer>

            <StyledResearchCardsContainer>

                <StyledresearchTextContainer>
                    <Styledh2>Research </Styledh2>
                    <StyledP>Used qualitative and quantitive methods. I particiapted in creating questions for both interviews and questionnaires.  
                        I then conducted user interviews with individuals with visual and hearing impairments to gain better insights into their every day hindrances.
                        The returned data was then analysed and used to created Personas.</StyledP>
                        <Styledh3>My Role </Styledh3>
                        <StyledMyRoleul>
                        <StyledMyRoleli>Compile interview questions and questionnaires</StyledMyRoleli>
                        <StyledMyRoleli>Contact associations and organizations that work with accessibility, primarily for the visually impaired</StyledMyRoleli>
                        <StyledMyRoleli>Conduct interviews</StyledMyRoleli>
                        <StyledMyRoleli>Analyse incoming data</StyledMyRoleli>
                        <StyledMyRoleli>Build personas</StyledMyRoleli>
                        </StyledMyRoleul>


                </StyledresearchTextContainer>

                    <StyledResearchImg src={researchImg} alt="Personas"/>

            </StyledResearchCardsContainer>

                <StyledResearchImgContainer>
                    <StyledResearchLogoImg src={krisch} alt="Krischel Kommunikation"/>
                    <StyledResearchLogoImg src={syn} alt="Synskadades Riksforbund"/>
                    <StyledResearchLogoImg  src={syn2} alt="Synskadades Stiftelse"/>
                    <StyledPersonaImg src={persona1} alt="Persona"/>
                    <StyledPersonaImg src={persona2} alt="Persona"/>
                    
                </StyledResearchImgContainer>

            <StyledSectionHeader>
                <StyledLoFih2>LoFi and HiFi Sketches </StyledLoFih2>
            </StyledSectionHeader>


            <StyledLoHiFiContainer>
                <StyledLoHiFiImg src={LoHiFiImg} alt="Lofi and HiFi Frames"/>
            </StyledLoHiFiContainer>

            
            <StyledABContainer>
                <StyledABTestingContainer>
                    <Styledh2>User Testing and A/B Testing </Styledh2>
                    <StyledP>A prototype was created and sent out for testing. Along with this certain aspects were tested with A/B testing.</StyledP>
                </StyledABTestingContainer>

                    <StyledABImg src={ABTestingImg} alt="AB Testing"/>

            </StyledABContainer>
            

            <StyledFinalContainer>
                {/* <StyledPrototypeContainer> */}
                    <StyledPrototypeMov src={SpotifyPrototype} alt="Prototype"/>
                {/* </StyledPrototypeContainer> */}

                <StyledFinalTextContainer>
                    <Styledh2>Learnings </Styledh2>
                    <StyledP>Used qualitative and quantitive metods. Particiapted in interviews and aided in creating and sending out questionnaire. Reviewed and results and created Personas.</StyledP>
                </StyledFinalTextContainer>
                    
                    
                   
                {/* <StyledPrototype>
                    <StyledPrototypeMov src={SpotifyPrototype} alt="Prototype"/>
                </StyledPrototype> */}
            </StyledFinalContainer>

                


        </>
    );
}

export default CaseSpotify;