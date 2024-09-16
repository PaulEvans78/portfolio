import React from "react";
import styled from "styled-components";
import uxImg from "../assets/uxUiImg.avif";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  grid-area: ux;
  display: inline-block;
  width: 100%;
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

  transform: translateY(42%); /* Initially positioned off the bottom */
  transition: transform 0.5s ease-in-out;

  @media (max-width: 478px) {
    padding: 0em 2em 0.5em 1em;
  }
`;

const StyledCaseMain = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  aspect-ratio: 16 / 10;
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

  @media (min-width: 2050px) {
    aspect-ratio: 16 / 12;
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

const UxCard = () => {
  return (
    <StyledWrapper>
      <Link to="/casestudies">
        <StyledCaseMain>
          <StyledImg src={uxImg} alt="Mobile prototype frames." />
          <StyledOpacity>
            <StyledCaseContents>
              <h5>UX Case Studies</h5>

              <Styledp>
                As a UX/UI designer with storytelling expertise, I create
                engaging, user-focused experiences that enhance usability and
                elevate brand impact.
              </Styledp>
              <StyledHover>
                <Styledp>See case studies ..</Styledp>
              </StyledHover>
            </StyledCaseContents>
          </StyledOpacity>
        </StyledCaseMain>
      </Link>
    </StyledWrapper>
  );
};

export default UxCard;
