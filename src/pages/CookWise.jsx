import React from "react";
import styled from 'styled-components';
import CookWiseLogo from '../assets/cookwiseLogo.png';
import researchImg from '../assets/miro.png';
import personas from '../assets/personasCookWise.png';
import questions from '../assets/questions.png';
import LoHiFiImg from '../assets/CookWiselofi.png';
import testResults from '../assets/testResults.png';
import Skills from "../components/CookwiseTopCard/skills/Skills";
import Product from "../components/CaseCookWiseprotoCard/product/Product";
import Step from "../components/DesignProcess/step";
import colors from "../assets/colors.png";
import fonts from "../assets/CWfonts.png";
import signUp from "../assets/signup.png";
import safety from "../assets/safety.png";
import CookWisePrototype from '../assets/CookWise.gif';


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

// COOKWISE LOGO

const StyledCaseImgContainer = styled.div`
    width: 100%;
    padding: 0em 0em 0em 2em;
`;


const StyledCaseImg = styled.img`
    align-self: flex-start;
    width: 70%;
    margin: 1em 0em 0em 0em;
    border-radius: 10px;
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

    @media screen and (max-width: 767px) {
         width: 93%;
    }
`;

const StyledQuestionsImg  = styled.img`
    width: 75%;
    margin: 1em 0em 0em 1.5em;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 80%;
        margin: 1em 0em 0em 0em;
    }
`;

const StyledPersonaImg = styled.img`
    width: 75%;
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
    width: 75%;
    align-self: center;
    margin: 3em 1em 2em 1em;
    border-radius: 10px;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;


// PROTOYPE FRAMES

const StyledPrototypeFramesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    width: 75%;
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
    width: 75%;
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








function CookWise() {

    return (
        <StyledCaseOneContainer>

            <StyledCaseImgContainer>

                <StyledCaseImg src={CookWiseLogo} alt="Cooke Wise Logo"/>

            </StyledCaseImgContainer>

            <StyledDesP>Cookwise is a start-up company that is looking for a proposal for a complete design system for its brand and app.  </StyledDesP>


            <StyledProductCardsContainer>

                <Product />
                
            </StyledProductCardsContainer>


            <StyledPbiContainer>
                        
                            <StyledLeftSideul>

                                <StyledPbih5>The Task </StyledPbih5>

                                    <Styledli>Find people who fall within the framework of the target audience who can provide valuable input to the creation of your design system.</Styledli>

                                    <Styledli>Create a proposal for a design system in Figma that contains principles, guidelines and components based on what you think the users need and want.</Styledli>

                                    <Styledli>Create sketches, mockups and/or prototypes that show how the design system is used.</Styledli>

                                    <Styledli>Create a presentation where you pitch your design system. Imagine that you have to pitch this design system to the CEO of Cookwise.</Styledli>

                            </StyledLeftSideul>

                           
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

                            <StyledP>Qualitative interviews were used. The importance of this process is to gain better insight into the users.
                                The returned data was then analysed. To better understand the user Personas were created.
                            </StyledP>

                            

                            <StyledLeftSideul>

                                <StyledTitleP>My Role </StyledTitleP>

                                    <Styledli>Compile interview questions</Styledli>
                                    <Styledli>Contact individuals within the target group. Men and women 27-50 </Styledli>
                                    <Styledli>Conduct interviews</Styledli>
                                    <Styledli>Analyse the answers</Styledli>
                                    <Styledli>Build personas</Styledli>

                            </StyledLeftSideul>


                    </StyledresearchTextContainer>

                        <StyledResearchImg src={researchImg} alt="Research"/>

                </StyledResearchCardsContainer>

                    <StyledResearchImgContainer>

                        <StyledQuestionsImg src={questions} alt="Interview Questions"/>
                        <StyledPersonaImg src={personas} alt="Personas"/>
                        
                    </StyledResearchImgContainer>



                <Styledh5>LoFi and HiFi Sketches </Styledh5>

            

            <StyledLoHiFiContainer>

                <StyledLoHiFiImg src={LoHiFiImg} alt="Lofi and HiFi Frames"/>

                <StyledP>Before building prototypes, we created lofi sketches which provided us with the basic layout and structure for our hifi designs.</StyledP>

            </StyledLoHiFiContainer>


            
                <Styledh5>Prototype </Styledh5>

            

            <StyledPrototypeFramesContainer>


                <StyledP>Following our user research we implemented a design system and designed hifi frames for the cookwise app . 
                    The app should include all features a normal oven has. Features to monitor the cooking plus safety and cleaning features. 
                </StyledP>


                        <StyledLeftSideul>

                        <StyledTitleP>My Role </StyledTitleP>

                            <Styledli>Create a design System </Styledli>
                            <Styledli>Develope a Log in and Sign up page. </Styledli>
                            <Styledli>Create a safety menu and safety features.</Styledli>

                        </StyledLeftSideul>

                                <StyledResearchImgContainer>

                                    <StyledPrototypeFramesImg src={colors} alt="Design Colors"/>
                                    <StyledPrototypeFramesImg src={fonts} alt="Design Fonts"/>
                                    <StyledPrototypeFramesImg src={signUp} alt="Sign Up Frames"/>
                                    <StyledPrototypeFramesImg src={safety} alt="Safety Frames"/>

                                </StyledResearchImgContainer>

            </StyledPrototypeFramesContainer>

            


            <Styledh5>User Testing</Styledh5>

            <StyledABContainer>

                    <StyledP>User testing was conducted by sending out a prototype to the same people we interview in our User Research.
                    </StyledP>

                        <StyledABImg src={testResults} alt="Test Results"/>

            </StyledABContainer>
            


            <Styledh5>Conclusion </Styledh5>
            
            
            <StyledFinalContainer>
                
                    <StyledPrototypeMov src={CookWisePrototype} alt="Prototype"/>
            

                <StyledFinalTextContainer>

                    

                            <StyledP>
                            We came to the conclusion that our app is simple and very clear due to the icons and the layout.
                            If the app is to be used, there are some adjustments we need to work on.
                            We will improve the points we received feedback on.
                            Such as, the timer function and the temperature function which needs to be clearer and simpler.
                            </StyledP>

                             <StyledP>I also want to highlight that this page represents only a small portion of all the work that was done. </StyledP>

                            <StyledP>Thank you for reading my case study!</StyledP>
                                
                           

                </StyledFinalTextContainer>
                    
                    
            </StyledFinalContainer>

                


        </StyledCaseOneContainer>
    );
}

export default CookWise;