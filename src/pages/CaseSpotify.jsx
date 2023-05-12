// Animation
// case text
// Homepage text
// click to external link
// About
// colors
// responsive

// Cookwise


import React from "react";
import styled from 'styled-components';
import spotifylogo from '../assets/spotifylogo.png';
import researchImg from '../assets/research.png';
import persona1 from '../assets/personas1.png';
import persona2 from '../assets/personas2.png';
import krisch from '../assets/krisch.png';
import syn from '../assets/syn.png';
import syn2 from '../assets/syn2.png';
import SpotifyPrototype from '../assets/ezgif.com-video-to-gif.gif';
import LoHiFiImg from '../assets/hifiLofiHifi.png'
import ABTestingImg from '../assets/ABTesting.png'
import Skills from "../components/CaseTopCard/skills/Skills";
import Product from "../components/CaseProductCard/product/Product";
import Step from "../components/DesignProcess/step";


const StyledMyImgContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-self: flex-start;
/* margin-bottom: em; */
`;


const StyledMyImg = styled.img`
width: 50%;
margin: 1em 0em 0em 0em;

/* @media screen and (max-width: 767px) {
    width: 40%;
    margin: 3em 0em 0em 0em;

  } */
`;

const StyledTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    margin-bottom: 4em;
`;

const Styledh5 = styled.h5`
    display: flex;
    /* text-align: left; */
    align-self: flex-start;
    justify-items: flex-start;
    /* margin-top: 1em; */
    margin: 1em 0em 0em 1em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 28px;
    /* font-weight: 600; */
    color: whitesmoke;
`;

const StyledPbih5 = styled.h5`
    display: flex;
    align-self: flex-start;
    justify-items: flex-start;
    margin: 0;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 28px;
    color: whitesmoke;
`;

const StyledTitleP = styled.p`
display: flex;
    /* text-align: left; */
    align-self: flex-start;
    justify-items: flex-start;
    /* margin-top: 1em; */
    margin: 1em 0em 0em 2em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
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
    margin-bottom: 4em;
`;

const StyledPbiContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;
`;


const StyledProblemul = styled.ul`
    align-self: flex-start;
    justify-items: flex-start;
    /* margin-top: 1em; */
    margin: 1em 1.5em 3em 1.5em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    /* font-weight: 600; */
    color: #ffffff;
`;


const StyledProblemli = styled.li`
    display: list-item;
    align-self: flex-start;
    justify-items: flex-start;
    margin: 1em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    color: #ffffff;
`;


const StyledSolutionul = styled.ul`
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


const StyledSolutionli = styled.li`
    display: list-item;
    align-self: flex-start;
    justify-items: flex-start;
    margin: 1em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    color: #ffffff;
`;


const StyledDesignProcessContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    /* align-self: flex-start;  */
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledDesignProcessComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-self: space-between; */
    justify-content: space-between;  
    /* justify-items: space-between; */
    /* align-self: flex-end; */
    /* padding-left: 2em;
    padding-right: 2em; */
`;

const StyledAboutContainer = styled.div`
    display: flex;
    /* justify-self: center; */
    justify-content: center;
    width: 85vw;
    /* margin: 0em 2em 0em 3em; */
    margin-top: 6em;
    /* margin-bottom: 4em; */
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
    margin-bottom: 4em;
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
    row-gap: 3em;
    flex-wrap: wrap;
    width: 100vw;
    margin-top: 4em;
    margin-bottom: 4em;
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
    margin-bottom: 4em;
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
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 4em;
    margin-bottom: 4em;
`;

const StyledABTestingContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-self: flex-end;
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
    margin-bottom: 4em;
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
    margin-bottom: 4em;
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
    margin-bottom: 4em;
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
                <StyledTitleP>Improving Spotify's accessibility features for the visually and hearing impaired. </StyledTitleP>
            </StyledTitleContainer>

            <StyledProductCardsContainer>
                <Product />
            </StyledProductCardsContainer>


            <StyledPbiContainer>
                        
                            <StyledProblemul>
                            <StyledPbih5>Problem </StyledPbih5>
                                <StyledProblemli>Increase accessibility for visually impaired users.
We want to make our service available to all kinds of users. Creating a setting that increases the font size so that visually impaired users can more easily navigate the service.</StyledProblemli>
                                <StyledProblemli>Enable captions in podcasts for people with hearing loss.
People with hearing loss may also be interested in listening to information provided in podcasts. It can therefore be good to enable captions "audio texts" when a podcast is played. </StyledProblemli>
                                <StyledProblemli>Improve Microcopy for features in the service
There are words and concepts in Settings that may not be understood by everyone. Review the microcopy and make suggestions for improvements.</StyledProblemli>
                            </StyledProblemul>

                            
                            <StyledSolutionul>
                            <StyledPbih5>Solution </StyledPbih5>
                                <StyledSolutionli>Enhance accessibility for users with visual impairments by implementing features to increase font size within the app and develop functionalities that facilitate easy navigation for visually impaired users without negatively impacting the interface.</StyledSolutionli>
                                <StyledSolutionli>Enable captions in podcasts for people with hearing impairments.
Initially, the audio transcripts may need to be manually inserted by the user, but there may be other solutions that can be implemented later on.</StyledSolutionli>
                                <StyledSolutionli>Improve microcopy for features in the service.
Review the microcopy and provide suggestions for improvements.</StyledSolutionli>
                            </StyledSolutionul>

            </StyledPbiContainer>

            <StyledDesignProcessContainer>
                <Styledh5>Design Process </Styledh5>

                    <StyledDesignProcessComponentContainer>
                        <Step />
                    </StyledDesignProcessComponentContainer>

            </StyledDesignProcessContainer>

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
                    <Styledh5>Research </Styledh5>
                        <StyledP>Used qualitative and quantitive methods. I particiapted in creating questions for both interviews and questionnaires.  
                            I then conducted user interviews with individuals with visual and hearing impairments to gain better insights into their every day hindrances.
                            The returned data was then analysed and to better understand the user Personas were created.
                        </StyledP>

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
                    <Styledh5>User Testing and A/B Testing </Styledh5>
                    <StyledP>A prototype was created and sent out for testing. Along with this certain aspects were tested with A/B testing.</StyledP>
                </StyledABTestingContainer>

                    <StyledABImg src={ABTestingImg} alt="AB Testing"/>

            </StyledABContainer>
            

            <StyledFinalContainer>
                {/* <StyledPrototypeContainer> */}
                    <StyledPrototypeMov src={SpotifyPrototype} alt="Prototype"/>
                {/* </StyledPrototypeContainer> */}

                <StyledFinalTextContainer>
                    <Styledh5>Learnings </Styledh5>
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