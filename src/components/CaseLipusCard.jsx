import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import heroImg from "../assets/lipus.avif";
import { Link } from "react-router-dom";

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  display: inline-block;
`;

const StyledCaseContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 0em 2em 0.5em 2em;

  transform: translateY(60%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 1200px) {
    transform: translateY(60%);
  }

  @media (max-width: 1160px) {
    transform: translateY(68%);
  }

  @media (max-width: 960px) {
    transform: translateY(55%);
  }

  @media (max-width: 767px) {
    transform: translateY(58%);
  }

  @media (max-width: 600px) {
    transform: translateY(66%);
  }

  @media (max-width: 478px) {
    transform: translateY(78%);
  }

  @media (max-width: 360px) {
    transform: translateY(94%);
  }
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 5 / 4;
  font-size: 1.2rem;
  overflow: hidden;

  &:hover ${StyledCaseContents} {
    transform: translateY(0%); /* Slide up into view */
    background-color: #060606ac;
    justify-content: center;
  }

  @media (max-width: 960px) {
    &:hover {
      transform: none;
      color: inherit;
    }
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 478px) {
    height: 500px;
  }

  ${({ isInView }) =>
    isInView &&
    css`
      animation: ${slideInFromRight} 1s ease-out forwards;
    `}
`;

const StyledOpacity = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000056;
`;

const Styledp = styled.p`
  font-size: 16px;
`;

const StyledHover = styled.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;

const LipusPlus = () => {
  const imgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <StyledWrapper>
      <Link to="/lipusplus">
        <StyledCaseMain>
          <StyledImg
            ref={imgRef}
            src={heroImg}
            alt="A hammarby handball player in green and white stripes holds a ball."
            isInView={isInView}
          />
          <StyledOpacity>
            <StyledCaseContents>
              <h5>LIPUSPLUS | A UX CASE STUDY</h5>

              <p>
                LipusPlus aims to attract physiotherapists and elite athletes to
                its webinars on the Return to Play concept. An enticing and
                informative landing page is needed to generate leads for these
                webinars.
              </p>

              <StyledHover>
                <Styledp>Go to case study ..</Styledp>
              </StyledHover>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </Link>
    </StyledWrapper>
  );
};
export default LipusPlus;
