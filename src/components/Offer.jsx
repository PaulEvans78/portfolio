import styled from "styled-components";

const StyledCaseMain = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-self: center; */
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const StyledContentsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  background-color: var(--main-hero-backgroundcolor);
  color: var(--main-font-color);
`;

const StyledCaseContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Styledp = styled.p`
  margin-top: 3em;
  font-family: "Gravitas One", serif;
  font-weight: 500;
  color: var(--main-button-color);
  cursor: pointer;

  &:hover {
    color: var(--main-button-hover-color);
  }
`;

const Offer = ({ cinemaCardRef }) => {
  const scrollToCinemaCard = () => {
    if (cinemaCardRef.current) {
      cinemaCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledCaseMain>
      <StyledContentsContainer>
        <StyledCaseContents>
          <h2>What I Bring to the Table </h2>

          <p>
            Whether you’re looking to generate leads, raise conversion rates, or
            increase brand awareness and loyalty, my diverse expertise offers
            efficiency, creativity, and a friendly, collaborative attitude. I
            excel in ideation, content production, UX, UI, and implementation.
            My process begins with brainstorming and extends all the way through
            to the completion of immersive experiences.
          </p>

          <Styledp onClick={scrollToCinemaCard}>See my work below</Styledp>
        </StyledCaseContents>
      </StyledContentsContainer>
    </StyledCaseMain>
  );
};

export default Offer;
