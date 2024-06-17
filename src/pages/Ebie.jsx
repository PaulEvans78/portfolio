import styled from "styled-components";
import ebieHeroImg from "../assets/ebieHeroImg.avif";
import logoImg from "../assets/ebieLogo.avif";
import challengesImg from "../assets/challengesEbie.avif";
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
import ReflectionImg from "../assets/city.avif";

const StyledCaseContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;

  @media screen and (max-width: 960px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 130px;
  }
`;

const StyledCaseOne = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseTwo = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseThree = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseFour = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseFive = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const StyledCaseSix = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseSeven = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseEight = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseNine = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const StyledCaseTen = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Image Context ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseEleven = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: Grid;
  grid-template-columns: 50% 50%;
  column-gap: 16px;
  grid-template-areas: "Context Image ";

  @media screen and (max-width: 960px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas:
      "Image"
      "Context";
  }
`;

const StyledCaseContents = styled.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  color: #333333;

  @media screen and (max-width: 478px) {
    padding-top: 30px;
    padding-left: 40px;
  }

  @media screen and (max-width: 360px) {
    width: 90%;
    padding-top: 15px;
    padding-left: 20px;
  }
`;

const StyledLogoContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
`;

const StyledLogo = styled.img`
  width: 40%;
  height: auto;
`;

const StyledNotationContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  bottom: 0;

  width: 100%;
  height: 40px;
  background-color: var(--main-notation-background-color);
  padding-bottom: 10px;

  z-index: 2;
  color: var(--main-font-color);
`;

const Stylednotation = styled.p`
  position: absolute;

  margin-right: 40px;
  font-size: 14px;

  color: var(--main-notation-font-color);
`;

const StyledImageContainer = styled.div`
  position: relative;
  grid-area: Image;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 800px;
  object-fit: cover;

  ${({ isInView }) =>
    isInView &&
    css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}

  @media screen and (max-width: 478px) {
    height: 700px;
  }
`;

const StyledScaledImg = styled.img`
  @media screen and (max-width: 478px) {
    display: flex;
  }
`;

const Case = () => {
  return (
    <StyledCaseContainer>
      <StyledCaseOne>
        <StyledCaseContents>
          <h4>UX Case study</h4>
          <StyledLogoContainer>
            <StyledLogo src={logoImg} alt="The logo for Ebie" />
          </StyledLogoContainer>

          <h5>
            My role: <span className="boldxlarge">UX / UI Designer </span>
          </h5>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Photo from www.Ebie.se</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={ebieHeroImg}
            alt="A street view on the corner of Sveavägen, Sergelstorg."
          />
        </StyledImageContainer>
      </StyledCaseOne>

      <StyledCaseTwo>
        <StyledCaseContents>
          <h5>Challenges</h5>

          <p>
            * Lack of prior knowledge of the real estate industry which
            prevented us from clearly understanding the specific design task.
          </p>
          <p>
            * Understanding user expectations, especially when they are already
            accustomed to existing solutions and industry standards.
          </p>
          <p>
            * Access to Ebies clients for user research, Ebie is a start up with
            a limited number of customers, and those they do have are extremely
            busy.{" "}
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Image from Unsplash</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={challengesImg}
            alt="A hammarby handball player is lead of the court by the team physio."
          />
        </StyledImageContainer>
      </StyledCaseTwo>

      <StyledCaseThree>
        <StyledCaseContents>
          <h5>Brief</h5>

          <p>
            Develop a user-friendly feature for group insurance. Increase the
            conversion rate of group insurance.
          </p>

          <h5>Goal</h5>

          <p>
            {" "}
            Create and implement a completely new and user-friendly function
            within the platform that makes it easy for property owners to apply
            for and manage group insurance.
          </p>
          <p>
            Increase the use of group insurance by increasing the number of
            property owners applying for it. This is to be achieved by
            simplifying and improving the entire application process.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Image from figma design system</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={BriefImg}
            alt="A deisgn idea for an online application"
          />
        </StyledImageContainer>
      </StyledCaseThree>

      <StyledCaseFour>
        <StyledCaseContents>
          <h5>Target Group</h5>

          <ul>
            <li>Lessor</li>
            <li>Property Owner</li>
          </ul>

          <h5>Research</h5>

          <p>
            Carrying out research with Ebies clients proved challenging due to
            busy schedules, Ebie provided user backgrounds and their
            preferences, and based on that information, we created personas.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Data collected by Ebie.</Stylednotation>
          </StyledNotationContainer>
          <StyledImg src={ResearchImg} alt="Research collected by Ebie" />
        </StyledImageContainer>
      </StyledCaseFour>

      <StyledCaseFive>
        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Personas created from research.</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={Persona1Img}
            alt="Personas built from user research."
          />
        </StyledImageContainer>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Personas created from research.</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={Persona2Img}
            alt="Personas built from user research."
          />
        </StyledImageContainer>
      </StyledCaseFive>

      <StyledCaseSix>
        <StyledCaseContents>
          <h5>Improvement Areas</h5>

          <p>
            <span className="bold">The application process </span> posed our
            biggest challenge. Applying for insurance requires a significant
            amount of information. Our goal was to consolidate this into a
            single form without overwhelming or confusing the user.
          </p>
          <p>
            Our initial design mirrored a traditional application form. While it
            was clearer and easier to navigate than previous versions, user
            testing revealed that there was still room for improvement.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Our initial application design from figma.
            </Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={Application1Img}
            alt="A traditional application form"
          />
        </StyledImageContainer>
      </StyledCaseSix>

      <StyledCaseSeven>
        <StyledCaseContents>
          <h5>Improvement Areas</h5>

          <p>
            <span className="bold">The new design</span> received a much more
            positive response from Ebie and performed better during user
            testing.
          </p>

          <p>
            <span className="bold">Focus areas. </span>{" "}
          </p>

          <p>
            * We organized the input fields into a column form to enhance
            readability.
          </p>
          <p>
            * To make the form less overwhelming, we implemented fold-out and
            collapsible sections.
          </p>
          <p>* Colours to signal when a section is complete. </p>
          <p>
            * A progress bar at the top keeps users informed about their
            position in the process.{" "}
          </p>
          <p>
            * Additionally, we included navigation on the left to allow users to
            view other applications or add new ones.{" "}
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Our re-design from figma.</Stylednotation>
          </StyledNotationContainer>

          <StyledScaledImg
            src={Application2Img}
            alt="An online application form."
          />
        </StyledImageContainer>
      </StyledCaseSeven>

      <StyledCaseEight>
        <StyledCaseContents>
          <h5>Improvement Areas</h5>

          <p>
            <span className="bold">Sort Function: </span> Property owners and
            lessors often manage numerous properties with various tenants coming
            and going. To facilitate quick sorting between different insurance
            statuses, we implemented a robust sorting function. Where the user
            can sort between different status stages. New colours wee added ot
            the design system to help clearly label the different statuses.{" "}
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Proposed sorting buttons, figma.</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={SortingImg}
            alt="Proposed sorting buttons from figma."
          />
        </StyledImageContainer>
      </StyledCaseEight>

      <StyledCaseNine>
        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Design proposal for insurance status, figma.
            </Stylednotation>
          </StyledNotationContainer>
          <StyledScaledImg
            src={Status1Img}
            alt="Design for insurance status from figma."
          />
        </StyledImageContainer>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Design proposal for renewing status, figma.
            </Stylednotation>
          </StyledNotationContainer>
          <StyledScaledImg
            src={Status2Img}
            alt="Design for insurance status from figma."
          />
        </StyledImageContainer>
      </StyledCaseNine>

      <StyledCaseTen>
        <StyledCaseContents>
          <h5>Improvement Areas</h5>

          <p>
            <span className="bold">Overview: </span>
          </p>

          <p>
            Within the insurance overview, we added a warning icon to indicate
            when an action is required, such as when a report has been filed or
            an invoice needs payment.{" "}
          </p>
          <p>
            We also incorporated the same status symbols from the search
            function for clearer status visibility.
          </p>
          <p>
            The screening report is displayed directly, eliminating the need to
            search through other documents.
          </p>
          <p>
            Additionally, we introduced a sorting function that allows users to
            organise all insurance entries in numeric, alphabetic, or reverse
            order.{" "}
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Design proposal for insurance overview, figma.
            </Stylednotation>
          </StyledNotationContainer>
          <StyledScaledImg
            src={OverviewImg}
            alt="Design proposal for insurance overview."
          />
        </StyledImageContainer>
      </StyledCaseTen>

      <StyledCaseEleven>
        <StyledCaseContents>
          <h5>Reflection</h5>

          <p>
            The biggest challenge was understanding the intricacies of the real
            estate industry and the complexities of the application process.
            This took time and slowed us down in the beginning but it was also
            one of the most intresting sides of the project as we learned
            something new.{" "}
          </p>

          <p>
            What I enjoyed most about this project was developing the sorting
            function and the logic behind it. While sorting and filters are not
            always considered the most visually striking aspect of design,
            ensuring that the sorting function is clear and intuitive is
            crucial. It plays a vital role in enhancing user experience by
            making it easier for users to organise and access information
            efficiently. The satisfaction came from creating a system that
            seamlessly integrates into the overall design, making it functional
            and user-friendly.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Image from Unsplash.</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={ReflectionImg}
            alt="Street view of Stockholm city with NK in the distance."
          />
        </StyledImageContainer>
      </StyledCaseEleven>
    </StyledCaseContainer>
  );
};

export default Case;
