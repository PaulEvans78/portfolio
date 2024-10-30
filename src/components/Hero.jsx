import styled from "styled-components";

const StyledContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  padding: 8em 1em 0.5em 1em;

  @media (max-width: 960px) {
    align-items: center;
    text-align: center;
  }
  @media (max-width: 767px) {
    padding: 8em 0em 0.5em 0em;
  }

 
  

  /* transform: translateY(46%); //Intial state
  transition: transform 0.5s ease-in-out;

  @media (max-width: 960px) {
    transform: translateY(42%);
  }

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  } */
`;

const StyledIntro = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  min-height: 550px;
  font-size: 1.2rem;
  overflow: hidden;
  /* padding: 0em 2em 0em 0em; */

  @media (max-width: 960px) {
    width: 90%;
    align-items: center;
    min-height: 400px;
    padding: 0em 0em 1em 0em;
  }
`;

const StyledTitle =styled.div`
width: 100%;
  `;

const Styledp =styled.p`
color: var(--main-p-color);
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 2em;

  @media (max-width: 960px) {
    font-size: 16px;
  }

  /* @media (max-width: 960px) {
    font-size: 14px;
  } */
  `;

const StyledBorderBox =styled.div`
  width: 98%;
  border-bottom: 1px solid #1e1e1ee6;
  `;


const Hero = () => {

  return (
  <StyledContentsContainer>
            <StyledIntro>
              
            <StyledTitle>
              <h1>Paul Evans</h1>
              <Styledp>Experience Designer</Styledp>
              </StyledTitle>

              <Styledp>Hi!</Styledp>
            
              <Styledp>
              I am a passionate creative with over 20 years of experience in branding, storytelling, 
              and content creation, blending my background in film with UX/UI design and web development. 
              My passion for storytelling continues to inform my approach, allowing me to create compelling narratives 
              and experiences that connect with audiences across digital and physical platforms.  
              </Styledp>

              </StyledIntro>
              {/* <StyledBorderBox></StyledBorderBox> */}
            </StyledContentsContainer>
         
  );
}

export default Hero;
