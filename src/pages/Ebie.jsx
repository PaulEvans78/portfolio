import styled from "styled-components";
import ebieHeroImg from "../assets/ebieHeroImg.avif";
import logoImg from "../assets/ebieLogo.avif";
import BriefImg from "../assets/briefEbie.avif";
import ResearchImg from "../assets/researchEbie.avif";
import Persona1Img from "../assets/persona1.avif";
import Persona2Img from "../assets/persona2.avif";
import Application1Img from "../assets/application1.avif";
import Application2Img from "../assets/application2.avif";
import SortingImg from "../assets/sorting.avif";
import Status1Img from "../assets/status1.avif";
import Status2Img from "../assets/status2.avif";
import OverviewImg from "../assets/overview.avif";

const StyledCaseContainer = styled.section`
  max-width: 93.5%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-rows: auto;
  row-gap: 28px;
  column-gap: 2%;
  padding-left: 2%;
  padding-right: 2%;
  align-content: center;
  margin-top: 170px;
  margin-bottom: 28px;

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    margin-top: 150px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 130px;
  }
`;

const StyledBox = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
  background-color: #6d6e71;
  border: 1px solid black;
`;

const StyledBoxImg = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  aspect-ratio: 4 / 3;
  text-align: center;

  @media screen and (max-width: 1233px) {
    aspect-ratio: 4 / 8;
  }

  @media screen and (max-width: 960px) {
    aspect-ratio: 4 / 3;
  }
`;

const StyledCaseContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;

  @media screen and (max-width: 478px) {
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-left: 20px;
  }
`;

const StyledLogoContainer = styled.div`
  padding-top: 0px;
  padding-bottom: 80px;
  display: flex;

  @media (max-width: 478px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const StyledLogo = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 320px) {
    width: 50%;
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  @media screen and (max-width: 960px) {
    height: 700px;
  }
`;

const Styledp = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-top: 0;
`;

const Case = () => {
  return (
    <StyledCaseContainer>
      <StyledBox>
        <StyledCaseContents>
          <h2>My role</h2>

          <Styledp>UX Designer</Styledp>
          <Styledp>UI Designer</Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledCaseContents>
          <StyledLogoContainer>
            <StyledLogo src={logoImg} alt="The logo for Ebie" />
          </StyledLogoContainer>
        </StyledCaseContents>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Challenges</h2>

          <Styledp>
            * Lack of indepth knowledge of the real estate industry.
          </Styledp>
          <Styledp>
            * Understanding user expectations, especially when they are already
            accustomed to existing solutions and industry standards.
          </Styledp>
          <Styledp>
            * Access to Ebies clients for user research, Ebie is a start up with
            a limited number of customers, and those they do have are extremely
            busy.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={ebieHeroImg}
            alt="A street view on the corner of Sveavägen, Sergelstorg."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Brief</h2>

          <Styledp>
            Create and implement a completely new and user-friendly function
            that simplifies applying and managing of group insurance.
          </Styledp>
          <Styledp>
            Increase the use of group insurance by increasing the number of
            property owners applying for it. This is to be achieved by
            simplifying and improving the entire application process.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={BriefImg}
            alt="A deisgn idea for an online application"
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Target Group</h2>

          <Styledp>Lessor</Styledp>
          <Styledp>Property Owner</Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg src={ResearchImg} alt="Research collected by Ebie" />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Research</h2>

          <Styledp>
            Carrying out research with Ebies clients proved challenging due to
            busy schedules, Ebie provided user client backgrounds and
            preferences, based on that information, we created personas.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={Persona1Img}
            alt="Personas built from user research."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={Persona2Img}
            alt="Personas built from user research."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Improvement Areas</h2>

          <Styledp>
            <span className="bold">The application process </span> posed our
            biggest challenge. Applying for insurance requires a significant
            amount of information. Our goal was to consolidate this into a
            single form without overwhelming or confusing the user.
          </Styledp>
          <Styledp>
            Our initial design mirrored a traditional application form. While it
            was clearer and easier to navigate than previous versions,
            user-testing revealed that there was still room for improvement.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={Application1Img}
            alt="A traditional application form."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Improvement Areas</h2>

          <Styledp>
            <span className="bold">The new design</span> received a more
            positive response, performing better during user testing.
          </Styledp>

          <Styledp>
            <span className="bold">Focus areas. </span>
          </Styledp>

          <Styledp>
            * Organized input fields into a column form to enhance readability.
          </Styledp>
          <Styledp>
            * To make the form less overwhelming, we implemented fold-out and
            collapsible sections.
          </Styledp>
          <Styledp>* Colours to signal when a section is complete.</Styledp>
          <Styledp>
            * A progress bar at the top keeps users informed about their
            position in the process.
          </Styledp>
          <Styledp>
            * Additionally, we included navigation on the left to allow users to
            view other applications or add new ones.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg src={Application2Img} alt="An online application form." />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Improvement Areas</h2>

          <Styledp>
            <span className="bold">Sort Function: </span> Property owners and
            lessors often manage numerous properties with various tenants coming
            and going. To facilitate quick sorting between different insurance
            statuses, we implemented a robust sorting function. Where the user
            can sort between different status stages.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={SortingImg}
            alt="Proposed sorting buttons from figma."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Improvement Areas</h2>

          <Styledp>
            <span className="bold">Overview: </span>
          </Styledp>

          <Styledp>
            Added a warning icon to indicate when an action is required.
          </Styledp>

          <Styledp>
            Incorporated the same status symbols from the search function for
            clearer status visibility.
          </Styledp>
          <Styledp>
            The screening report is displayed directly, eliminating the need to
            search through other documents.
          </Styledp>
          <Styledp>
            Introduced a sorting function that allows users to organise all
            insurance entries in numeric, alphabetic, or reverse order.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={Status1Img}
            alt="Design for insurance status from figma."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={Status2Img}
            alt="Design for insurance status from figma."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={OverviewImg}
            alt="Design proposal for insurance overview."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h2>Reflection</h2>

          <Styledp>
            The biggest challenge was understanding the intricacies of the real
            estate industry and the complexities of the application process.
            This took time and slowed us down in the beginning but it was also
            one of the most intresting sides of the project.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBox>
        <StyledCaseContents>
          <h2>Reflection</h2>

          <Styledp>
            What I enjoyed most about this project was developing the sorting
            function and the logic behind it. While sorting and filters are not
            always considered the most visually striking aspect of design,
            ensuring that the sorting function is clear and intuitive is
            crucial. It plays a vital role in enhancing user experience.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>
    </StyledCaseContainer>
  );
};

export default Case;
