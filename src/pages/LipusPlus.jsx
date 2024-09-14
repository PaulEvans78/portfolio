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
import DesignOneImg from "../assets/designOne.avif";
import DesignTwoImg from "../assets/designTwo.avif";
import WebflowImg from "../assets/webflow.avif";
import Button from "../components/ButtonExternalSiteLipusPrimary";

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

const StyledBoxEmpty = styled.div`
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  aspect-ratio: 4 / 3;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: none;
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
          <h5>My role</h5>

          <Styledp>UX / UI Designer</Styledp>
          <Styledp>Frontend Developer</Styledp>
          <Styledp>Content Creator</Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledCaseContents>
          <StyledLogoContainer>
            <StyledLogo src={logoImg} alt="The logo for LipuspLus" />
          </StyledLogoContainer>
        </StyledCaseContents>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Challenges</h5>

          <Styledp>
            * Understanding Elite Athletes and Physiotherapists everyday
            struggles.
          </Styledp>
          <Styledp>* Minimal experience with webinars & Webflow.</Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={challengesImg}
            alt="A hammarby handball player is lead of the court by the team physio."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Brief</h5>

          <Styledp>
            LipusPlus aims to attract physiotherapists and elite athletes to its
            webinars on the Return to Play concept. An enticing and informative
            landing page is needed to generate leads for these webinars.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={heroImg}
            alt="A hammarby handball player is lead of the court by the team physio."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Goal</h5>

          <Styledp>
            Create a user-friendly landing page. Connect with the target group.
            Convince the user to register for the event. Provide a seamless
            experience for visitors from registration to processing. Strive for
            a high conversion rate and satisfaction for both LipusPlus and the
            participants.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg src={BriefImg} alt="Hammarby fans encourgae their team." />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Key Questions</h5>

          <Styledp>
            1. How can we make the message and the offer clear and attractive to
            the target group?
          </Styledp>
          <Styledp>
            2. How can we optimise the landing page to increase the conversion
            rate?
          </Styledp>
          <Styledp>3. How can we stimulate people to spread the word?</Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={ResearchImg}
            alt="Anne Hopfgarten sitting for an interview."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Qualitative Research</h5>

          <Styledp>
            <span className="bold">Seminar: </span> LipusPlus
          </Styledp>
          <Styledp>
            <span className="bold">Observation: </span> LipusPlus Sales Member
          </Styledp>
          <Styledp>
            <span className="bold">Observation: </span> LipusPlus Clinician{" "}
          </Styledp>
          <Styledp>
            <span className="bold">Interview: </span> Physiotherapist
          </Styledp>
          <Styledp>
            <span className="bold">Interview: </span> Elite athlete
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg src={MappingImg} alt="Mapping of the users needs." />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Results</h5>

          <Styledp>
            <span className="bold">LipusPlus</span>
          </Styledp>

          <Styledp>
            <span className="bold">Challenges: </span> Struggles with conversion
            rates due to a lack of evidence and information about the modality.
          </Styledp>

          <Styledp>
            <span className="bold">Needs: </span> A convenient platform to
            present and discuss current and ongoing studies and results.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBox>
        <StyledCaseContents>
          <h5>Results</h5>

          <Styledp>
            <span className="bold">Physiotherapist</span>
          </Styledp>

          <Styledp>
            <span className="bold">Concerns: </span> Need evidence that
            LipusPlus is effective and safe. Rely on endorsements from prominent
            clubs and figures in their sport.
          </Styledp>

          <Styledp>
            <span className="bold">Priorities: </span> They aim to get their
            patients back to their sport quickly and safely.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBox>
        <StyledCaseContents>
          <h5>Results</h5>

          <Styledp>
            <span className="bold">Athlete</span>
          </Styledp>

          <Styledp>
            <span className="bold">Concerns: </span> Need evidence that
            LipusPlus is effective and safe. Rely on endorsements and trusted
            physiotherapists.
          </Styledp>

          <Styledp>
            <span className="bold">Goals: </span> Want to return to their sport
            as quickly as possible since their income and career goals depend on
            it.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg src={PhysioImg} alt="Anne Hopfgarten. Hammarby physio." />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Insights</h5>

          <Styledp>* There is skepticism towards Medtech companies.</Styledp>
          <Styledp>* Build trust, understanding the users struggles.</Styledp>
          <Styledp>
            * Emphasising partnerships would be more inspirational and
            trustworthy.
          </Styledp>
          <Styledp>
            * Clear & captivating headlines, persuasive & engaging copy.
          </Styledp>
          <Styledp>
            * Clearly show offer and benefits of the webinar & Return to Play.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={LipusImg}
            alt="A hammarby handball player uses the LipusPlus modality.."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Webinar Requirements</h5>

          <Styledp>
            * The webinar platform should be a stable and proven streaming
            service.{" "}
          </Styledp>
          <Styledp>* Data collection through a registration form.</Styledp>
          <Styledp>* Email Automation.</Styledp>
          <Styledp>* Option to connect to Hubspot. </Styledp>

          <Styledp>
            With approximately 260 million users, Vimeo met all our
            requirements. Since LipusPlus already hosted content on Vimeo, it
            streamlined our video showcasing process.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={AthleteImg}
            alt="Ludvig Lindeberg celebrates winning."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBoxEmpty></StyledBoxEmpty>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={DesignTwoImg}
            alt="Frames from LipusPlus HiFi Designs."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Design</h5>

          <Styledp>Build and improve upon an existing design system. </Styledp>
          <Styledp>
            * Through emotional content we highlighted partnerships for
            credibility.{" "}
          </Styledp>
          <Styledp>
            * Clearly outlined the benefits and starting price of the Return to
            Play program.{" "}
          </Styledp>
          <Styledp>
            * Assured the user that the webinar would discuss evidence from
            LipusPlus studies.{" "}
          </Styledp>
          <Styledp>
            * A user-friendly registration form with a prominent CTA button.{" "}
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg
            src={DesignOneImg}
            alt="Frames from LipusPlus HiFi Designs."
          />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBox>
        <StyledCaseContents>
          <h5>Frontend</h5>

          <Styledp>
            A key stipulation for this project was to continue using Webflow.{" "}
          </Styledp>

          <Button />
        </StyledCaseContents>
      </StyledBox>

      <StyledBoxImg>
        <StyledImageContainer>
          <StyledImg src={WebflowImg} alt="Webflow. Desktop ." />
        </StyledImageContainer>
      </StyledBoxImg>

      <StyledBoxEmpty></StyledBoxEmpty>

      <StyledBox>
        <StyledCaseContents>
          <h5>Reflection</h5>

          <Styledp>
            This project was incredibly exciting for me for several reasons.
            Firstly, I had the opportunity to leverage my previous experience as
            a filmmaker, from conceptualizing and working with the brand to
            planning and filming interviews and sports coverage. Secondly, this
            project allowed me to align user needs with brand objectives,
            achieving a cohesive brand feel that LipusPlus has been striving
            for. Finally, I had the chance to work with Webflow, exploring a new
            platform and expanding my skills—an experience I thoroughly enjoyed.{" "}
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBox>
        <StyledCaseContents>
          <h5>Reflection</h5>

          <Styledp>
            In conclusion, this project has not only met its goals but also
            provided a strong template for future case studies, webinars and
            other promotions. However there is always room for improvement. One
            area would be creating our own registration form instead of using
            the embedded Vimeo form. This change would give better design
            control and allow for a more cohesive user experience.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>

      <StyledBox>
        <StyledCaseContents>
          <h5>Reflection</h5>

          <Styledp>
            This project has been a valuable learning experience. It
            demonstrated the importance of thorough research, user-centric
            design, and effective communication. The real-world application of
            our work and the positive feedback from LipusPlus has been immensely
            rewarding.
          </Styledp>
        </StyledCaseContents>
      </StyledBox>
    </StyledCaseContainer>
  );
};

export default Case;
