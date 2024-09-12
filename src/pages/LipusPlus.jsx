import styled from "styled-components";
import heroImg from "../assets/lipusHeroImg.avif";
import logoImg from "../assets/lipusPlusLogo.avif";
import challengesImg from "../assets/challenges.avif";
import BriefImg from "../assets/fans.avif";
import ResearchImg from "../assets/research.avif";
import MappingImg from "../assets/mapping.avif";
import LipusImg from "../assets/lipus.avif";
import PhysioImg from "../assets/physio.avif";
import AthleteImg from "../assets/athlete.avif";
import InsightsImg from "../assets/insights.avif";
import WebinarImg from "../assets/webinar.avif";
import mobileWebinarImg from "../assets/webinarMobile.avif";
import DesignOneImg from "../assets/designOne.avif";
import DesignTwoImg from "../assets/designTwo.avif";
import WebflowImg from "../assets/webflow.avif";
import ReflectionImg from "../assets/reflection.avif";
import Button from "../components/ButtonExternalSiteLipusPrimary";

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

const StyledCaseSix = styled.div`
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

const StyledCaseTwelve = styled.div`
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

const StyledCaseThirteen = styled.div`
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

const StyledCaseFourteen = styled.div`
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

const StyledCaseContents = styled.div`
  grid-area: Context;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  color: var(--secondary-font-color);

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

  @media (max-width: 478px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const StyledLogo = styled.img`
  width: 40%;
  height: auto;

  @media (max-width: 320px) {
    width: 50%;
  }
`;

const StyledNotationContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: var(--main-notation-background-color);
  padding-bottom: 10px;

  z-index: 2;

  @media screen and (max-width: 960px) {
    height: 40px;
  }

  @media screen and (max-width: 478px) {
    height: 60px;
  }
`;

const Stylednotation = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  text-align: right;
  z-index: 2;
  color: var(--main-notation-font-color);

  @media screen and (max-width: 960px) {
    margin: 0;
    margin-right: 20px;
    margin-bottom: 6px;
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

  ${({ isInView }) =>
    isInView &&
    css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}

  @media screen and (max-width: 960px) {
    height: 700px;
  }
`;

const StyledMobileImg = styled.img`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;

  object-fit: cover;
  z-index: 2;

  @media (max-width: 767px) {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;

    object-fit: cover;
    z-index: 2;
  }
`;

const Case = () => {
  return (
    <StyledCaseContainer>
      <StyledCaseOne>
        <StyledCaseContents>
          <h4>UX Case study</h4>
          <StyledLogoContainer>
            <StyledLogo src={logoImg} alt="The logo for LipuspLus" />
          </StyledLogoContainer>

          <h5>My role</h5>

          <ul>
            <li>
              <span className="boldlarge">UX / UI Designer</span>
            </li>
            <li>
              <span className="boldlarge">Frontend Developer</span>
            </li>
            <li>
              <span className="boldlarge">Content Creator</span>
            </li>
          </ul>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Photo by Peder Rotkirch, LipusPlus.</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={heroImg}
            alt="A hammarby handball player in green and white stripes holds a ball."
          />
        </StyledImageContainer>
      </StyledCaseOne>

      <StyledCaseTwo>
        <StyledCaseContents>
          <h5>Challenges</h5>

          <p>
            * Understanding Elite Athletes and Physiotherapists everyday
            struggles.
          </p>
          <p>* Minimal experience with webinars.</p>
          <p>* Working with Webflow, which was new to me.</p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Screenshot from partnership film, LipusPlus & Hammarby Handball
            </Stylednotation>
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
            LipusPlus aims to attract physiotherapists and elite athletes to its
            webinars on the Return to Play concept. An enticing and informative
            landing page is needed to generate leads for these webinars.
          </p>

          <h5>Goal</h5>

          <p>
            Create a user-friendly landing page. Connect with the target group.
            Convince the user to register for the event. Provide a seamless
            experience for visitors from registration to processing. Strive for
            a high conversion rate and satisfaction for both LipusPlus and the
            participants before, during and after the event. Generate leads for
            sales processing.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Screenshot from partnership film, LipusPlus & Hammarby Handball
            </Stylednotation>
          </StyledNotationContainer>
          <StyledImg src={BriefImg} alt="Hammarby fans encourgae their team." />
        </StyledImageContainer>
      </StyledCaseThree>

      <StyledCaseFour>
        <StyledCaseContents>
          <h5>Key Questions</h5>

          <p>
            1. How can we make the message and the offer on the landing page
            clear and attractive to the target group?
          </p>
          <p>
            2. How can we optimise the landing page to increase the conversion
            rate and get more visitors to sign up for webinars?
          </p>
          <p>
            3. How can we stimulate people to spread the word about the webinar
            in their surroundings?
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Screenshot of Anne Hopfgarten from partnership film, LipusPlus &
              Hammarby Handball
            </Stylednotation>
          </StyledNotationContainer>

          <StyledImg
            src={ResearchImg}
            alt="Anne Hopfgarten sitting for an interview."
          />
        </StyledImageContainer>
      </StyledCaseFour>

      <StyledCaseFive>
        <StyledCaseContents>
          <h5>Qualitative Research</h5>

          <p>
            <span className="bold">Seminar: </span> LipusPlus
          </p>
          <p>
            <span className="bold">Observation: </span> LipusPlus Sales Member
          </p>
          <p>
            <span className="bold">Observation: </span> LipusPlus Clinician{" "}
          </p>
          <p>
            <span className="bold">Interview: </span> Physiotherapist
          </p>
          <p>
            <span className="bold">Interview: </span> Elite athlete
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Image from research mapping, figma</Stylednotation>
          </StyledNotationContainer>

          <StyledImg src={MappingImg} alt="Mapping of the users needs." />
        </StyledImageContainer>
      </StyledCaseFive>

      <StyledCaseSix>
        <StyledCaseContents>
          <h5>Results</h5>

          <p>
            <span className="bold">LipusPlus</span>
          </p>

          <p>
            <span className="bold">Challenges: </span> Struggles with conversion
            rates due to a lack of evidence and information about the modality.
          </p>

          <p>
            <span className="bold">Needs: </span> A convenient platform to
            present and discuss current and ongoing studies and results.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Photo by Peder Rotkirch, Lipusplus.</Stylednotation>
          </StyledNotationContainer>

          <StyledImg
            src={LipusImg}
            alt="A hammarby handball player uses the LipusPlus modality.."
          />
        </StyledImageContainer>
      </StyledCaseSix>

      <StyledCaseSeven>
        <StyledCaseContents>
          <h5>Results</h5>

          <p>
            <span className="bold">Physiotherapist</span>
          </p>

          <p>
            <span className="bold">Concerns: </span> Need evidence that
            LipusPlus is effective and safe. Rely on endorsements from prominent
            clubs and figures in their sport.
          </p>

          <p>
            <span className="bold">Priorities: </span> They aim to get their
            patients back to their sport quickly and safely. Their reputation
            and job are at stake. They question why they should choose LipusPlus
            over proven traditional methods.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Screenshot of Anne Hopfgarten from partnership film, LipusPlus &
              Hammarby Handball
            </Stylednotation>
          </StyledNotationContainer>
          <StyledImg src={PhysioImg} alt="Anne Hopfgarten. Hammarby physio." />
        </StyledImageContainer>
      </StyledCaseSeven>

      <StyledCaseEight>
        <StyledCaseContents>
          <h5>Results</h5>

          <p>
            <span className="bold">Athlete</span>
          </p>

          <p>
            <span className="bold">Concerns: </span> Need evidence that
            LipusPlus is effective and safe. They often rely on endorsements
            from prominent figures in their sport and trusted physiotherapists.
          </p>

          <p>
            <span className="bold">Goals: </span> Want to return to their sport
            as quickly as possible since their income and career goals depend on
            it.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              Screenshot of Ludvig Lindeberg from partnership film, LipusPlus &
              Hammarby Handball
            </Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={AthleteImg}
            alt="Ludvig Lindeberg celebrates winning."
          />
        </StyledImageContainer>
      </StyledCaseEight>

      <StyledCaseNine>
        <StyledCaseContents>
          <h5>Insights</h5>

          <p>* There is skepticism towards Medtech companies.</p>
          <p>
            * Build trust not just through evidence but also an understanding of
            the users everyday struggles and lifestyles.
          </p>
          <p>
            * A shift towards a sports lifestyle focus, emphasising partnerships
            rather than solely Medtech, would be more inspirational and
            trustworthy.
          </p>
          <p>
            * It is essential for the user that the landing page works on all
            devices and is responsive.{" "}
          </p>
          <p>
            * Our users lead busy lives, on the go. Headlines, clear and
            captivating. Copy, persuasive and engaging. We need to get their
            attention directly.
          </p>
          <p>* Clearly show the offer and benefits of Return to Play.</p>
          <p>
            * Clearly communicate the value and benefits of attending the
            webinar, emphasising credible evidence and success stories.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Image from Unsplash.</Stylednotation>
          </StyledNotationContainer>

          <StyledImg
            src={InsightsImg}
            alt="An athlete is lying down on the track."
          />
        </StyledImageContainer>
      </StyledCaseNine>

      <StyledCaseTen>
        <StyledCaseContents>
          <h5>Webinar Requirements</h5>

          <p>
            * The webinar platform should be a stable and proven streaming
            service.{" "}
          </p>
          <p>* Data collection through the registration form is a must.</p>
          <p>* Email Automation.</p>
          <p>* Option to connect to Hubspot. </p>
          <p>* Simple and easy to understand registration forms.</p>
          <p>* Custom Registration forms.</p>

          <p>
            With approximately 260 million users, Vimeo met all our
            requirements. Since LipusPlus already hosted content on Vimeo, it
            streamlined our video showcasing process.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Image from Vimeo.</Stylednotation>
          </StyledNotationContainer>
          <StyledImg src={WebinarImg} alt="A vimeo webinar screen." />

          <StyledMobileImg
            src={mobileWebinarImg}
            alt="Promtional text from vimeo about their webinars."
          />
        </StyledImageContainer>
      </StyledCaseTen>

      <StyledCaseEleven>
        <StyledCaseContents>
          <h5>Design</h5>

          <p>Building and improving upon an existing design system. </p>

          <p>
            * Through emotional content we highlighted partnerships for
            credibility.{" "}
          </p>
          <p>
            * Clearly outlined the benefits and starting price of the Return to
            Play program.{" "}
          </p>
          <p>
            * Assure the user that the webinar would discuss evidence from
            LipusPlus studies.{" "}
          </p>
          <p>
            * Engaging Content. Through still images, videos and testimonials.{" "}
          </p>
          <p>* Showcase evidence and studies.</p>
          <p>
            * Clear and Compelling Headlines alongside persuasive Copywriting.{" "}
          </p>
          <p>
            * A user-friendly registration form with a prominent CTA button.{" "}
          </p>
          <p>* Social Proofing. </p>
          <p>* Follow-Up Communication. </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Design frames from figma.</Stylednotation>
          </StyledNotationContainer>

          <StyledImg
            src={DesignOneImg}
            alt="Frames from LipusPlus HiFi Designs."
          />
        </StyledImageContainer>
      </StyledCaseEleven>

      <StyledCaseTwelve>
        <StyledCaseContents>
          <h5>Design</h5>

          <p>
            * Through emotional content we highlighted partnerships for
            credibility.{" "}
          </p>
          <p>
            * Clearly outlined the benefits and starting price of the Return to
            Play program.{" "}
          </p>
          <p>
            * Assured the user that the webinar would discuss evidence from
            LipusPlus studies.{" "}
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Design frames from figma.</Stylednotation>
          </StyledNotationContainer>
          <StyledImg
            src={DesignTwoImg}
            alt="Frames from LipusPlus HiFi Designs."
          />
        </StyledImageContainer>
      </StyledCaseTwelve>

      <StyledCaseThirteen>
        <StyledCaseContents>
          <h5>Frontend</h5>

          <p>
            The existing LipusPlus homepage was initially created and is
            presently hosted via Webflow. A key stipulation for this project was
            to continue using Webflow.{" "}
          </p>

          <Button />
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>Screen shot from Webflow.</Stylednotation>
          </StyledNotationContainer>

          <StyledImg src={WebflowImg} alt="Webflow. Desktop ." />
        </StyledImageContainer>
      </StyledCaseThirteen>

      <StyledCaseFourteen>
        <StyledCaseContents>
          <h5>Reflection</h5>

          <p>
            This project was incredibly exciting for me for several reasons.
            Firstly, I had the opportunity to leverage my previous experience as
            a filmmaker, from conceptualizing and working with the brand to
            planning and filming interviews and sports coverage. Secondly, this
            project allowed me to align user needs with brand objectives,
            achieving a cohesive brand feel that LipusPlus has been striving
            for. Finally, I had the chance to work with Webflow, exploring a new
            platform and expanding my skills—an experience I thoroughly enjoyed.{" "}
          </p>

          <p>
            In conclusion, this project has not only met its goals but also
            provided a strong template for future case studies, webinars and
            other promotions. However there is always room for improvement. One
            area would be creating our own registration form instead of using
            the embedded Vimeo form. This change would give better design
            control and allow for a more cohesive user experience.
          </p>

          <p>
            This project has been a valuable learning experience. It
            demonstrated the importance of thorough research, user-centric
            design, and effective communication. The real-world application of
            our work and the positive feedback from LipusPlus has been immensely
            rewarding.
          </p>
        </StyledCaseContents>

        <StyledImageContainer>
          <StyledNotationContainer>
            <Stylednotation>
              The LipusPlus modality. Photo by Peder Rotkirch, LipusPlus.
            </Stylednotation>
          </StyledNotationContainer>

          <StyledImg src={ReflectionImg} alt="The lipusPlus modality" />
        </StyledImageContainer>
      </StyledCaseFourteen>
    </StyledCaseContainer>
  );
};

export default Case;
