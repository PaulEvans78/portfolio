// import { useRef } from "react";
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
import DesignOneImg from "../assets/designOne.avif";
import DesignTwoImg from "../assets/designTwo.avif";
import WebflowImg from "../assets/webflow.avif";
import ReflectionImg from "../assets/reflection.avif";

const StyledCaseContainer = styled.section`
  max-width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-content: center;
  margin-top: 170px;
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
  height: 100%;
  /* width: 70%; */
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 60px;
  color: #2c2c2c;

  /* @media screen and (max-width: 767px) {
    padding-left: 60px;
  } */

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

const Stylednotation = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  font-size: 14px;
  z-index: 2;
  color: #cdcccc;
  /* margin-top: ; */
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
`;


const Case = () => {
  // const caseRef = useRef(null);

  // const scrollToEvent = () => {
  //   if (caseRef.current) {
  //     caseRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

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
            <li><span className="boldlarge">UX / UI Designer</span></li>
            <li><span className="boldlarge">Frontend Developer</span></li>
            <li><span className="boldlarge">Content Creator</span></li>
          </ul>
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Photo by Peder Rotkirch.</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={heroImg}
            alt="A hammarby handball player in green and white stripes holds a ball."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseOne>

      <StyledCaseTwo>
        <StyledCaseContents>
         

          <h5>Challenges</h5>

          <ul>
            <li>Understanding Elite Athletes and Physiotherapists everyday struggles.</li>
            <li>Minimal experience with webinars.</li>
            <li>Working with Webflow, which was new to me.</li>
          </ul>
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>From LipusPlus.com</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={challengesImg}
            alt="A hammarby handball player is lead of the court by the team physio."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseTwo>

      <StyledCaseThree>
        <StyledCaseContents>
         

          <h5>Brief</h5>

          <p>LipusPlus aims to attract physiotherapists and elite athletes to its webinars on the Return to Play concept. 
            An enticing and informative landing page is needed to generate leads for these webinars.</p>

            <h5>Goal</h5>

          <p>Create a user-friendly landing page. Connect with the target group. Convince the user to register for the event. 
            Provide a seamless experience for visitors from registration to processing. 
            Strive for a high conversion rate and satisfaction for both LipusPlus and the participants before, during and after the event. 
            Generate leads for sales processing.</p>
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Image from LipusPlus</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={BriefImg}
            alt="Hammarby fans encourgae their team."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseThree>

      <StyledCaseFour>
        <StyledCaseContents>
         

          <h5>Key Questions</h5>

<ul>
  <li>How can we make the message and the offer on the landing page clear and attractive to the target group?</li>
  <li>How can we optimise the landing page to increase the conversion rate and get more visitors to sign up for webinars?</li>
  <li>How can we stimulate people to spread the word about the webinar in their surroundings?</li>
</ul>
         
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Anne Hopfgarten. Image from LipusPlus</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={ResearchImg}
            alt="Anne Hopfgarten sitting for an interview."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseFour>

      <StyledCaseFive>
        <StyledCaseContents>
         

          <h5>Qualitative Research</h5>



<ul>
  <li><span className="bold">Seminar: </span> LipusPlus</li>
  <li><span className="bold">Observation: </span> LipusPlus Sales Member</li>
  <li><span className="bold">Observation: </span> LipusPlus Clinician </li>
  <li><span className="bold">Interview: </span> Physiotherapist</li>
  <li><span className="bold">Interview: </span> Elite athlete</li>
</ul>
         
        </StyledCaseContents>

        <StyledImageContainer>
          {/* <Stylednotation>Image from research.</Stylednotation> */}
          <StyledImg
            // ref={imgRef}
            src={MappingImg}
            alt="Mapping of the users needs."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseFive>

      <StyledCaseSix>
        <StyledCaseContents>
         

          <h5>Results</h5>

          <p><span className="bold">LipusPlus</span></p>

<p><span className="bold">Challenges: </span> Struggles with conversion rates due to a lack of evidence and information about the modality.</p>

<p><span className="bold">Needs: </span> A convenient platform to present and discuss current and ongoing studies and results.</p>
         
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Photo by Peder Rotkirch, Lipusplus.</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={LipusImg}
            alt="A hammarby handball player uses the LipusPlus modality.."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseSix>

      <StyledCaseSeven>
        <StyledCaseContents>
         

        <h5>Results</h5>

<p><span className="bold">Physiotherapist</span></p>

<p><span className="bold">Concerns: </span> Need evidence that LipusPlus is effective and safe. Rely on endorsements from prominent clubs and figures in their sport.</p>

<p><span className="bold">Priorities: </span> They aim to get their patients back to their sport quickly and safely. Their reputation and job are at stake. They question why they should choose LipusPlus over proven traditional methods.</p>
         
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Image from LipusPlus.</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={PhysioImg}
            alt="Anne Hopfgarten. Hammarby physio."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseSeven>

      <StyledCaseEight>
        <StyledCaseContents>
         

        <h5>Results</h5>

<p><span className="bold">Athlete</span></p>

<p><span className="bold">Concerns: </span> Need evidence that LipusPlus is effective and safe. They often rely on endorsements from prominent figures in their sport and trusted physiotherapists.</p>

<p><span className="bold">Goals: </span> Want to return to their sport as quickly as possible since their income and career goals depend on it.</p>
         
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Image from LipusPlus.</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={AthleteImg}
            alt="Ludvig Lindeberg celebrates winning."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseEight>

      <StyledCaseNine>
        <StyledCaseContents>
         

          <h5>Insights</h5>

<ul>
  <li>There is skepticism towards Medtech companies.</li>
  <li>Build trust not just through evidence but also an understanding of users everyday struggles and lifestyles.</li>
  <li>A shift towards a sports lifestyle focus, emphasising partnerships rather than just Medtech, would be more inspirational and trustworthy.</li>
  <li>It is essential for the user that the landing page works on all devices and is responsive. </li>
  <li>Our users lead busy lives, on the go. Headlines, clear and captivating. Copy, persuasive and engaging. We need to get their attention directly.</li>
  <li>Clearly show the offer and benefits of Return to Play.</li>
  <li>Clearly communicate the value and benefits of attending the 
  webinar, emphasising credible evidence and success stories.</li>
</ul>
         
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Photo unsplash.</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={InsightsImg}
            alt="An athlete is lying down on the track."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseNine>

      <StyledCaseTen>
        <StyledCaseContents>
         

          <h5>Webinar Requirements</h5>

<ul>
  <li>The webinar platform should be a stable and proven streaming  service. </li>
  <li>Data collection through the registration form is a must.</li>
  <li>Email Automation.</li>
  <li>Option to connect to Hubspot. </li>
  <li>Simple and easy to understand registration forms.</li>
  <li>Custom Registration forms.</li>
  </ul>
  
  <p>With approximately 260 million users, Vimeo met all our requirements. Since LipusPlus already hosted content on Vimeo, it streamlined our video showcasing process.</p>

         
        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Photo from Vimeo.</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={WebinarImg}
            alt="A vimeo webinar screen."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseTen>

      <StyledCaseEleven>
        <StyledCaseContents>
         

          <h5>Design</h5>

          <p>Building and improving upon an existing design system. We created </p>

<ul>
  <li>Through emotional content we highlighted partnerships for credibility. </li>
  <li>Clearly outlined the benefits and starting price of the Return to Play program. </li>
  <li>Assure the user that the webinar would discuss evidence from LipusPlus studies. </li>
  <li>Engaging Content. </li>
  <li>Showcase evidence and studies.</li>
  <li>Clear and Compelling Headlines and persuasive Copywriting. </li>
  <li>User-Friendly Registration Form with a prominent CTA button. </li>
  <li>Social Proofing. </li>
  <li>Follow-Up Communication. </li>
</ul>
  

         
        </StyledCaseContents>

        <StyledImageContainer>
          {/* <Stylednotation>Frames from Lipusplus HiFi Designs.</Stylednotation> */}
          <StyledImg
            // ref={imgRef}
            src={DesignOneImg}
            alt="Frames from LipusPlus HiFi Designs."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseEleven>

      <StyledCaseTwelve>
        <StyledCaseContents>
         

          <h5>Design</h5>

          <p>Building and improving upon an existing design system. We created </p>

<ul>
  <li>Through emotional content we highlighted partnerships for credibility. </li>
  <li>Clearly outlined the benefits and starting price of the Return to Play program. </li>
  <li>Assure the user that the webinar would discuss evidence from LipusPlus studies. </li>
  </ul>
  
  

         
        </StyledCaseContents>

        <StyledImageContainer>
          {/* <Stylednotation>Frames from Lipusplus HiFi Designs.</Stylednotation> */}
          <StyledImg
            // ref={imgRef}
            src={DesignTwoImg}
            alt="Frames from LipusPlus HiFi Designs."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseTwelve>

      <StyledCaseThirteen>
        <StyledCaseContents>
         

          <h5>Frontend</h5>

          <p>The existing LipusPlus homepage was initially created and is presently hosted via Webflow. A key stipulation for this project was to continue using Webflow. </p>
          <p>See the live page here.</p>
          <span className="bold"><a href="https://www.lipusplus.com/casestudies/hammarby">LipusPlus.com</a></span>


        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Screen shot from Webflow.</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={WebflowImg}
            alt="Webflow. Desktop ."
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseThirteen>

      <StyledCaseFourteen>
        <StyledCaseContents>
         

          <h5>Reflection</h5>

          <p>This project was incredibly exciting for me for several reasons. Firstly, 
            I had the opportunity to leverage my previous experience as a filmmaker, 
            from conceptualizing and planning to filming interviews and sports coverage. 
            Secondly, this project allowed me to align user needs with brand objectives, 
            chieving the cohesive brand feel that LipusPlus has been striving for. Finally, 
            I had the chance to work with Webflow, exploring a new platform and expanding my skills—an experience I thoroughly enjoyed.  </p>
          
<p>In conclusion, this project has not only met its goals but also provided a strong template for future case studies, 
  webinars and other promotions. However there is always room for improvement.
One area would be creating our own registration form instead of using the embedded Vimeo form. 
This change would give better design control and allow for a more cohesive user experience.</p>

<p>This project has been a valuable learning experience. It demonstrated the importance of thorough research, 
  user-centric design, and effective communication. The real-world application of our work and the positive feedback from 
  LipusPlus has been immensely rewarding. 
</p>

        </StyledCaseContents>

        <StyledImageContainer>
          <Stylednotation>Photo by Peder Rotkirch, LipusPlus.</Stylednotation>
          <StyledImg
            // ref={imgRef}
            src={ReflectionImg}
            alt="The lipusPlus modality"
            // isInView={isInView}
          />
        </StyledImageContainer>
      </StyledCaseFourteen>
      
    </StyledCaseContainer>
  );
};

export default Case;
