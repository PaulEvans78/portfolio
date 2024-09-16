import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import heroImg from "../assets/ebieHeroImg.avif";
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

const Styledp = styled.p`
  font-size: 16px;
  display: none;
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

  transform: translateY(44%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    transform: translateY(40%);
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

  &:hover ${Styledp} {
    display: flex;
  }

  @media (max-width: 960px) {
    &:hover ${StyledCaseContents} {
      transform: translateY(44%);
      background-color: transparent;
    }

    &:hover ${Styledp} {
      display: none;
    }
  }

  @media (max-width: 478px) {
    &:hover ${StyledCaseContents} {
      transform: translateY(40%);
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

const StyledHover = styled.div`
  &:hover {
    color: var(--main-button-hover-color);
  }
`;

const Case = () => {
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
      <Link to="/ebie">
        <StyledCaseMain>
          <StyledImg
            ref={imgRef}
            src={heroImg}
            alt="A street view on the corner of Sveavägen, Sergelstorg."
            isInView={isInView}
          />
          <StyledOpacity>
            <StyledCaseContents>
              <h2>EBIE | A UX CASE STUDY</h2>

              <Styledp>
                Create a user-friendly function within the platform that makes
                it easy for property owners to apply for, and manage group
                insurance. Simplify the application and the overview for
                insurance status.
              </Styledp>
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
export default Case;
