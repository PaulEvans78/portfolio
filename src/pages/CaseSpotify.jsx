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
    margin: 1em 0em 2em 2em;
    white-space: pre-wrap;
    flex-wrap: wrap;
    text-align: center;
    font-family: 'Poppins';
    font-size: 28px;
    color: whitesmoke;
   
    @media screen and (max-width: 960px) {
        margin-left: 0em;
        margin-bottom: 0em;

    }
`;

const StyledP = styled.p`
    text-align: center;
    margin: 1em 1.5em 0em 1.5em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 16px;
    color: whitesmoke;
`;



// MAIN CONTAINER

const StyledCaseOneContainer = styled.div`
    grid-area: main;
    max-width: 100%;
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3em;

    @media screen and (max-width: 960px) {
        row-gap: 1em;
        margin-top: 0em;

    }
`;

// SPOTIFY LOGO

const StyledSpotifyImgContainer = styled.div`
    width: 100%;
    padding: 0em 0em 0em 2em;
`;


const StyledSpotifyImg = styled.img`
    align-self: flex-start;
    width: 50%;
    margin: 1em 0em 0em 0em;
`;

const StyledDesP = styled.p`
    align-self: flex-start;
    margin: 2em 0em 0em 2em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
    letter-spacing: 2px;
    color: whitesmoke;

    @media screen and (max-width: 767px) {
        margin-left: 1em;

    }
`;

const StyledTitleP = styled.p`
    align-self: flex-start;
    margin: 2em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    font-size: 20px;
    letter-spacing: 2px;
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

    @media screen and (max-width: 960px) {
        margin-bottom: 0em;
        padding-left: 2em;
        padding-right: 2em;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }

    
`;



// PBI PROBLEMS AND SOLUTIONS

const StyledPbih5 = styled.h5`
    font-family: 'Poppins';
    font-size: 28px;
    letter-spacing: 1px;
    color: whitesmoke;

    @media screen and (max-width: 960px) {
        margin-top: 0em;

    }
    
`;

const StyledPbiContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;

    @media screen and (max-width: 767px) {
        flex-direction: column;

    }
`;


const StyledLeftSideul = styled.ul`
    margin: 1em 0em 3em 0em;
`;


const Styledli = styled.li`
    margin: 1em 0em 0em 0em;
    white-space: pre-wrap;
    font-family: 'Poppins';
    letter-spacing: 2px;
    font-size: 16px;
    color: whitesmoke;
`;


const StyledRightSideul = styled.ul`
    margin: 1em 0em 0em 1.5em;
    
    @media screen and (max-width: 767px) {
        margin-left: 0em;

    }
`;





// DESIGN PROCESS


const StyledDesignProcessComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-between;  

    @media screen and (max-width: 767px) {
        flex-direction: column;

    }
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

    @media screen and (max-width: 960px) {
        margin-top: 0em;
        margin-bottom: 4em;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;



// RESEARCH

const StyledResearchCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 4em;
    white-space: pre-wrap;
    max-width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 0em;
    }
`;

const StyledresearchTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 2em;

    @media screen and (max-width: 767px) {
        padding-right: 0em;
    }
`;

const StyledResearchImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    row-gap: 4em;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 4em;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0em;
    }

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`;

const StyledResearchImg = styled.img`
    align-self: center;
    width: 75%;
    height: auto;
    margin: 2em 0em 0em 0em;
    border-radius: 10px;
`;

const StyledResearchLogoImg  = styled.img`
    width: 30%;
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 60%;
        margin: 1em 0em 0em 0em;
    }
`;

const StyledPersonaImg = styled.img`
    width: 45%;
    margin: 3em 0em 3em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 80%;
        margin: 1em 0em 0em 0em;
    }
`;

// LO / HIFI

const StyledLoHiFiContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    row-gap: 4em;
    align-items: center;
    max-width: 100%;
    margin-bottom: 3em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 0em;
    }
`;

const StyledLoHiFiImg = styled.img`
    width: 50%;
    align-self: center;
    margin: 3em 1em 2em 1em;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;


// PROTOYPE FRAMES

const StyledPrototypeFramesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3em;
    max-width: 100%;
    margin-bottom: 4em;
    margin-left: 1.5em;
    margin-right: 1.5em;
    padding-left: 2em;
    padding-right: 2em;

    @media screen and (max-width: 960px) {
        row-gap: 1em;
    }

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`;

const StyledPrototypeFramesImg = styled.img`
    width: 28%;
    margin: 3em 0em 0em 0em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;




// TESTING - A/B

const StyledABContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4em;
    max-width: 100%;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;

    @media screen and (max-width: 767px) {
        padding-left: 0em;
        padding-right: 0em;
    }
`;

const StyledABImg = styled.img`
    width: 50%;
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 90%;
        margin: 1em 0em 0em 0em;
    }

`;



// FINAL PROTOTYPE

const StyledFinalContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    max-width: 100%;
    margin-bottom: 4em;
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 10px;
`;

const StyledFinalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2em;
    padding-right: 2em;
    margin-bottom: 4em;
`;

const StyledPrototypeMov = styled.img`
    height: 500px;
    margin-left: 3em;
    margin-top: 4em;
    margin-bottom: 4em;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
        margin-left: 1em;
    }
`;








function CaseSpotify() {

    return (
        <StyledCaseOneContainer>

            <StyledSpotifyImgContainer>

                <StyledSpotifyImg src={spotifylogo} alt="Spotify Logo"/>

            </StyledSpotifyImgContainer>

            <StyledDesP>Improving Spotify's accessibility features for the visually and hearing impaired. </StyledDesP>


            <StyledProductCardsContainer>

                <Product />
                
            </StyledProductCardsContainer>


            <StyledPbiContainer>
                        
                            <StyledLeftSideul>

                                <StyledPbih5>Problem </StyledPbih5>

                                    <Styledli>Increase accessibility for visually impaired users.
                                                    We want to make our service available to all kinds of users. 
                                                    Creating a setting that increases the font size so that visually impaired users can more easily navigate the service.
                                    </Styledli>

                                    <Styledli>Enable captions in podcasts for people with hearing loss.
                                                    People with hearing loss may also be interested in listening to information provided in podcasts. 
                                                    It can therefore be good to enable captions "audio texts" when a podcast is played. 
                                    </Styledli>

                                    <Styledli>Improve Microcopy for features in the service
                                                    There are words and concepts in Settings that may not be understood by everyone. 
                                                    Review the microcopy and make suggestions for improvements.
                                    </Styledli>

                            </StyledLeftSideul>

                            
                            <StyledRightSideul>

                            <StyledPbih5>Solution </StyledPbih5>

                                <Styledli>Enhance accessibility for users with visual impairments by implementing features to increase font size within the app and 
                                                  develop functionalities that facilitate easy navigation for visually impaired users without negatively impacting the interface.
                                </Styledli>

                                <Styledli>Enable captions in podcasts for people with hearing impairments.
                                                  Initially, the audio transcripts may need to be manually inserted by the user, 
                                                  but there may be other solutions that can be implemented later on.
                                </Styledli>

                                <Styledli>Improve microcopy for features in the service.
                                                  Review the microcopy and provide suggestions for improvements.
                                </Styledli>

                            </StyledRightSideul>

            </StyledPbiContainer>


                <Styledh5>Design Process </Styledh5>

                    <StyledDesignProcessComponentContainer>

                        <Step />
                        
                    </StyledDesignProcessComponentContainer>



            <StyledTopCardsContainer>

                <Skills />

            </StyledTopCardsContainer>

    
            <Styledh5>Research </Styledh5>

                 <StyledResearchCardsContainer>

                    <StyledresearchTextContainer>

                            <StyledP>Qualitative and quantitive methods. The importance of this process is to gain better insight into the users wants and needs.
                                The returned data was then analysed. To better understand the user Personas were created.
                            </StyledP>

                            

                            <StyledLeftSideul>

                                <StyledTitleP>My Role </StyledTitleP>

                                    <Styledli>Compile interview questions and questionnaires</Styledli>
                                    <Styledli>Contact associations and organizations that work with accessibility, primarily for the visually impaired</Styledli>
                                    <Styledli>Conduct interviews</Styledli>
                                    <Styledli>Analyse incoming data</Styledli>
                                    <Styledli>Build personas</Styledli>

                            </StyledLeftSideul>


                    </StyledresearchTextContainer>

                        <StyledResearchImg src={researchImg} alt="Research"/>

                </StyledResearchCardsContainer>

                    <StyledResearchImgContainer>

                        <StyledResearchLogoImg src={krisch} alt="Krischel Kommunikation"/>
                        <StyledResearchLogoImg src={syn} alt="Synskadades Riksforbund"/>
                        <StyledResearchLogoImg  src={syn2} alt="Synskadades Stiftelse"/>
                        <StyledPersonaImg src={persona1} alt="Persona"/>
                        <StyledPersonaImg src={persona2} alt="Persona"/>
                        
                    </StyledResearchImgContainer>



                <Styledh5>LoFi and HiFi Sketches </Styledh5>

            

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


                        <StyledLeftSideul>

                        <StyledTitleP>My Role </StyledTitleP>

                            <Styledli>Developing the new accessibility menu & settings. </Styledli>
                            <Styledli>Implement an integrated functionality that allows for the enlargement of icons and fonts without causing any disruptions to the overall layout</Styledli>

                        </StyledLeftSideul>

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
            


            <Styledh5>Learnings </Styledh5>
            
            
            <StyledFinalContainer>
                
                    <StyledPrototypeMov src={SpotifyPrototype} alt="Prototype"/>
            

                <StyledFinalTextContainer>

                    

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