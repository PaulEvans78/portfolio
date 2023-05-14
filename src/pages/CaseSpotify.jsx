import React from "react";
import styled from 'styled-components';
import spotifylogo from '../assets/spotifylogo.png';
import researchImg from '../assets/research.png';
import persona1 from '../assets/personas1.png';
import persona2 from '../assets/personas2.png';
import krisch from '../assets/krisch.png';
import syn from '../assets/syn.png';
import syn2 from '../assets/syn2.png';
import LoHiFiImg from '../assets/hifiLofiHifi.png';
import ABTestingImg from '../assets/ABTesting.png';
import Skills from "../components/CaseTopCard/skills/Skills";
import Product from "../components/CaseProductCard/product/Product";
import Step from "../components/DesignProcess/step";
import spotifyPrototypeImg1 from "../assets/spotifyprototype1.png";
import spotifyPrototypeImg2 from "../assets/spotifyprototype2.png";
import spotifyPrototypeImg3 from "../assets/spotifyprototype3.png";
import SpotifyPrototype from '../assets/ezgif.com-video-to-gif.gif';


// GENERAL STYLING

const Styledh5 = styled.h5`
    /* display: flex; */
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    margin: 1em 0em 2em 2em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 28px;
    color: whitesmoke;
`;

const StyledP = styled.p`
    /* display: flex; */
    /* text-align: left; */
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    /* margin-top: 1em; */
    margin: 1em 1.5em 0em 1.5em;
    /* margin-bottom: 0.25em; */
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    /* font-weight: 600; */
    color: whitesmoke;
`;


// const StyledSectionHeader = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     width: 100%;
//     padding-left: 2em;
//     padding-right: 2em;
// `;

// const StyledSectionh2 = styled.h2`
//     display: flex;
//     align-self: flex-start;
//     justify-items: flex-start;
//     margin: 1em 0em 0em 2em;
//     white-space: pre-wrap;
//     font-family: 'Poppins';
//     font-size: 26px;
//     color: whitesmoke;
// `;


// MAIN CONTAINER

const StyledCaseOneContainer = styled.div`
    grid-area: main;
    max-width: 100%;
`;

// SPOTIFY LOGO

const StyledSpotifyImgContainer = styled.div`
    max-width: 100%;
    display: flex;
    /* flex-direction: row; */
    /* justify-content: flex-start; */
    /* align-self: flex-start; */
`;


const StyledSpotifyImg = styled.img`
    width: 50%;
    margin: 1em 0em 0em 0em;

    /* @media screen and (max-width: 767px) {
        width: 40%;
        margin: 3em 0em 0em 0em;

    } */
`;

// SPOTIFY TITLE/PROJECT DESCRIPTION

// const StyledTitleContainer = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     width: 100%;
//     margin-bottom: 4em;
// `;

const StyledTitleP = styled.p`
    /* display: flex; */
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    margin: 2em 0em 0em 2em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
    color: whitesmoke;
`;


// PRODUCT CARDS / PROTOTYPE IMAGES - COMPONEMT CaseProductCard

const StyledProductCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;
`;



// PBI PROBLEMS AND SOLUTIONS

const StyledPbih5 = styled.h5`
    /* display: flex; */
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    /* margin: 1em 0em 2em 1em; */
    /* white-space: pre-wrap; */
    font-family: 'Poppins';
    font-size: 28px;
    color: whitesmoke;
`;

const StyledPbiContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;
`;


const StyledProblemul = styled.ul`
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    /* margin-top: 1em; */
    margin: 1em 0em 3em 0em;
    /* margin-bottom: 0.25em; */
    /* white-space: pre-wrap; */
    /* font-family: 'Poppins'; */
    /* font-size: 16px; */
    /* font-weight: 600; */
    /* color: whitesmoke; */
`;


const StyledProblemli = styled.li`
    /* display: list-item; */
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    margin: 1em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    color: whitesmoke;
`;


const StyledSolutionul = styled.ul`
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    /* margin-top: 1em; */
    margin: 1em 0em 0em 1.5em;
    /* margin-bottom: 0.25em; */
    /* white-space: pre-wrap; */
    /* font-family: 'Poppins'; */
    /* font-size: 16px; */
    /* font-weight: 600; */
    /* color: whitesmoke; */
`;


const StyledSolutionli = styled.li`
    /* display: list-item; */
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    margin: 1em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    color: whitesmoke;
`;


// DESIGN PROCESS

// const StyledDesignProcessContainer = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-items: flex-start;
//     padding-left: 2em;
//     padding-right: 2em;
// `;

const StyledDesignProcessComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
    /* max-width: 100%; */
`;



// TOP CARDS ROLE, TOOLS, METHOD - COMPONENT CaseTopCard

const StyledTopCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 3em;
    margin-bottom: 4em;
`;



// RESEARCH

const StyledResearchCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    align-items: flex-start;
    white-space: pre-wrap;
    max-width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledresearchTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-content: center; */
    /* padding-left: 2em; */
    padding-right: 2em;
`;

const StyledMyRoleul = styled.ul`
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    /* margin-top: 1em; */
    margin: em 1.5em 0em 1.5em;
    /* margin-bottom: 0.25em; */
    /* font-family: 'Poppins'; */
    /* font-size: 16px; */
    /* font-weight: 600; */
    /* color: whitesmoke; */
`;

const StyledMyRoleli = styled.li`
    /* display: list-item; */
    /* display: flex; */
    /* align-self: flex-start; */
    /* justify-items: flex-start; */
    margin: 1em 0em 0em 0em;
    /* white-space: pre-wrap; */
    font-family: 'Poppins';
    font-size: 16px;
    color: whitesmoke;
`;

const StyledResearchImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    row-gap: 3em;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
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

const StyledResearchLogoImg  = styled.img`
    width: 30%;
    /* height: 550px; */
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;
`;

const StyledPersonaImg = styled.img`
    width: 45%;
    /* height: 550px; */
    margin: 3em 0em 3em 1.5em;
    border-radius: 10px;
`;

// LO / HIFI

const StyledLoHiFiContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    max-width: 100%;
    margin-bottom: 3em;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledLoHiFiImg = styled.img`
    width: 50%;
    /* display: flex; */
    /* justify-content: space-between; */
    align-self: flex-end;
    margin: 3em 1em 0em 2.5em;
`;


// PROTOYPE FRAMES

const StyledPrototypeFramesContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    /* justify-items: flex-start; */
    /* align-items: flex-start; */
    max-width: 100%;
    margin-bottom: 4em;
    margin-left: 1.5em;
    margin-right: 1.5em;
    padding-left: 2em;
    padding-right: 2em;
`;

const StyledPrototypeFramesImg = styled.img`
    width: 28%;
    margin: 3em 0em 0em 0em;
    border-radius: 10px;
`;




// TESTING - A/B

const StyledABContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 4em;
    margin-bottom: 4em;
`;

// const StyledABTestingContainer = styled.div `
//     display: flex;
//     flex-direction: column;
//     align-self: flex-end;
//     padding-left: 2em;
//     padding-right: 2em;
// `;

const StyledABImg = styled.img`
    width: 50%;
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;
`;



// FINAL PROTOTYPE

const StyledFinalContainer = styled.div`
    /* background-color: black; */
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: flex-end;
    max-width: 100%;
    margin-top: 6em;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 10px;
`;

const StyledFinalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-self: flex-end;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;
`;

const StyledPrototypeMov = styled.img`
/* background-color: black; */
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: space-around; */
    /* align-items: flex-start; */
    /* flex-wrap: wrap; */
    height: 500px;
    /* width:1000px; */
    margin-left: 3em;
    margin-top: 4em;
    margin-bottom: 4em;
    /* padding-left: 2em; */
    /* padding-right: 2em; */
    border-radius: 10px;
`;








function CaseSpotify() {

    return (
        <StyledCaseOneContainer>

            <StyledSpotifyImgContainer>

                <StyledSpotifyImg src={spotifylogo} alt="Spotify Logo"/>

            </StyledSpotifyImgContainer>

            <StyledTitleP>Improving Spotify's accessibility features for the visually and hearing impaired. </StyledTitleP>


            <StyledProductCardsContainer>

                <Product />
                
            </StyledProductCardsContainer>


            <StyledPbiContainer>
                        
                            <StyledProblemul>

                                <StyledPbih5>Problem </StyledPbih5>

                                    <StyledProblemli>Increase accessibility for visually impaired users.
                                                    We want to make our service available to all kinds of users. 
                                                    Creating a setting that increases the font size so that visually impaired users can more easily navigate the service.
                                    </StyledProblemli>

                                    <StyledProblemli>Enable captions in podcasts for people with hearing loss.
                                                    People with hearing loss may also be interested in listening to information provided in podcasts. 
                                                    It can therefore be good to enable captions "audio texts" when a podcast is played. 
                                    </StyledProblemli>

                                    <StyledProblemli>Improve Microcopy for features in the service
                                                    There are words and concepts in Settings that may not be understood by everyone. 
                                                    Review the microcopy and make suggestions for improvements.
                                    </StyledProblemli>

                            </StyledProblemul>

                            
                            <StyledSolutionul>

                            <StyledPbih5>Solution </StyledPbih5>

                                <StyledSolutionli>Enhance accessibility for users with visual impairments by implementing features to increase font size within the app and 
                                                  develop functionalities that facilitate easy navigation for visually impaired users without negatively impacting the interface.
                                </StyledSolutionli>

                                <StyledSolutionli>Enable captions in podcasts for people with hearing impairments.
                                                  Initially, the audio transcripts may need to be manually inserted by the user, 
                                                  but there may be other solutions that can be implemented later on.
                                </StyledSolutionli>

                                <StyledSolutionli>Improve microcopy for features in the service.
                                                  Review the microcopy and provide suggestions for improvements.
                                </StyledSolutionli>

                            </StyledSolutionul>

            </StyledPbiContainer>


            {/* <StyledDesignProcessContainer> */}

                <Styledh5>Design Process </Styledh5>

                    <StyledDesignProcessComponentContainer>

                        <Step />
                        
                    </StyledDesignProcessComponentContainer>

            {/* </StyledDesignProcessContainer> */}


            <StyledTopCardsContainer>

                <Skills />

            </StyledTopCardsContainer>

    
            <Styledh5>Research </Styledh5>

                 <StyledResearchCardsContainer>

                    <StyledresearchTextContainer>

                            <StyledP>Qualitative and quantitive methods. I particiapted in creating questions for both interviews and questionnaires.  
                                I then conducted user interviews with individuals with visual and hearing impairments to gain better insights into their every day hindrances.
                                The returned data was then analysed and to better understand the user Personas were created.
                            </StyledP>

                            <StyledTitleP>My Role </StyledTitleP>

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



            {/* <StyledSectionHeader> */}

                <Styledh5>LoFi and HiFi Sketches </Styledh5>

            {/* </StyledSectionHeader> */}




            <StyledLoHiFiContainer>

                <StyledLoHiFiImg src={LoHiFiImg} alt="Lofi and HiFi Frames"/>

                <StyledP>Before building prototypes, we created lofi sketches which provided us with the basic layout and structure for our hifi designs.</StyledP>

            </StyledLoHiFiContainer>


            
                <Styledh5>Prototype </Styledh5>

            

            <StyledPrototypeFramesContainer>


                <StyledP>Following Spotify's existing design style guide we implemented our solutions to our three PBI’s. 
                    Added a feature to increase the size of icons and fonts without compromising the layout for the visually impaired. Clarified microcopy to make it easier to understand. 
                    And, finally we developed captions for podcasts, similar to the lyrics feature for music, for the hearing impaired.
                </StyledP>

                <StyledTitleP>My Role </StyledTitleP>

                        <StyledMyRoleul>

                            <StyledMyRoleli>Developing the new accessibility menu & settings. </StyledMyRoleli>
                            <StyledMyRoleli>Implement an integrated functionality that allows for the enlargement of icons and fonts without causing any disruptions to the overall layout</StyledMyRoleli>

                        </StyledMyRoleul>

                                <StyledResearchImgContainer>

                                    <StyledPrototypeFramesImg src={spotifyPrototypeImg1} alt="Prototype Frames"/>
                                    <StyledPrototypeFramesImg src={spotifyPrototypeImg2} alt="Prototype Frames"/>
                                    <StyledPrototypeFramesImg src={spotifyPrototypeImg3} alt="Prototype Frames"/>

                                </StyledResearchImgContainer>

            </StyledPrototypeFramesContainer>

            


            <Styledh5>User Testing and A/B Testing </Styledh5>

            <StyledABContainer>

                    <StyledP>At the same time as we tested our prototype we also conducted A/B tests of certain features. 
                             For example placement of the accessibility icon and different page layouts. 
                             Final design choices were made based on the feedback we received. 
                    </StyledP>

                        <StyledABImg src={ABTestingImg} alt="AB Testing"/>

            </StyledABContainer>
            



            <StyledFinalContainer>
                
                    <StyledPrototypeMov src={SpotifyPrototype} alt="Prototype"/>
            

                <StyledFinalTextContainer>

                    <Styledh5>Learnings </Styledh5>

                            <StyledP>
                                As Scrum master I learned that effective communication, respect, and patience for each other's work processes are essential 
                                elements for any successful team project. Keeping to a clear project plan and regularly reassessing priorities can help ensure 
                                that the project stays on track and meets its goals. Regarding accessibility, it's crucial to consider the needs of all users, 
                                including those with disabilities, when developing software or digital products. Following WCAG guidelines is an excellent way 
                                to ensure that the product is accessible to as many people as possible. 
                            </StyledP>

                             <StyledP>I also want to highlight that this page represents only a small portion of all the work that was done. </StyledP>

                            <StyledP>Thank you for reading my case study!</StyledP>
                                
                           

                </StyledFinalTextContainer>
                    
                    
            </StyledFinalContainer>

                


        </StyledCaseOneContainer>
    );
}

export default CaseSpotify;