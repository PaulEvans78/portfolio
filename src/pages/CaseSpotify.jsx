import React from "react";
import styled from 'styled-components';
import spotifylogo from '../assets/spotifylogo.png';
import researchImg from '../assets/research.png';
import persona1 from '../assets/personas1.png';
import persona2 from '../assets/personas2.png';
import Skills from "../components/CaseTopCard/skills/Skills";
import Product from "../components/CaseProductCard/product/Product";
import Research from "../components/CaseResearchCard/research/Research";


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
    margin: 1em 0em 0em 1.5em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 1.25rem;
    /* font-weight: 600; */
    color: whitesmoke;
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
    background-color: white;
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
    font-size: 1.25rem;
    /* font-weight: 600; */
    color: #000000;
`;

const StyledResearchCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    margin-top: 6em;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledResearchImg = styled.img`
    width: auto;
    height: 550px;
    margin: 2em 0em 0em 0em;
    border-radius: 10px;
`;

const StyledPersonasContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    margin-top: 6em;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledPersonaFirstImg = styled.img`
    width: 45%;
    /* height: 550px; */
    margin: 2em 0em 0em 0em;
    border-radius: 10px;
`;

const StyledPersonaSecondImg = styled.img`
    width: 45%;
    /* height: 550px; */
    margin: 2em 0em 0em 0em;
    border-radius: 10px;
`;

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
                <Research />
                <StyledResearchImg src={researchImg} alt="Research"/>
            </StyledResearchCardsContainer>

            <StyledPersonasContainer>
                <StyledPersonaFirstImg src={persona1} alt="Personas"/>
                <StyledPersonaSecondImg src={persona2} alt="Personas"/>
            </StyledPersonasContainer>

           

            

        </>
    );
}

export default CaseSpotify;