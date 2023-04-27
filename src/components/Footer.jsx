import React from "react";
import styled from "styled-components";
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
// import linkedIcon from '../assets/linkedIn_icon_white.png';
// import instaIcon from '../assets/instagram_icon_white.png';
// import githubIcon from '../assets/github_white.png';

// import {
//   Link
// } from "react-router-dom";

const footerData = [
  {
      id: 1,
      style: {StyledIcon},
      href: "https://www.linkedin.com/in/paul-evans-3a74605/",
      icon: <BsLinkedin />,
      des: "LinkedIn"
  },
  {
      id: 2,
      style: {StyledIcon},
      href: "https://www.instagram.com/paulevanscreative/",
      icon: <BsInstagram />,
      // src: instaIcon,
      des: "Instagram"
  },
  {
      id: 3,
      style: {StyledIcon},
      href: "https://github.com/PaulEvans78",
      icon: <BsGithub />,
      des: "gitHub"
  },
];

const StyledFooter = styled.footer`
  grid-area: footer;
  /* background-image: linear-gradient(#242424, #27dff7); */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0em 2em 0em 2em;
  font-family: 'Poppins';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  /* text-shadow: 6px 6px 5px #1a1a1a; */

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledFooterLink = styled.p`
  color: white;
  border-radius: 8px;
  margin-bottom: 0;
  margin-left: 2em;

  @media screen and (max-width: 767px) {
    margin-left: 0em;
    margin-bottom: 2em;
  }
`;

const IconContainer = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* align-items: left; */

@media screen and (max-width: 767px) {
  flex-direction: column;
  background-image: none;
}
`;


const StyledIcon = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: self-end;
  height: 2em;
  margin: 1em 2em 0em 2em;
  box-shadow: 0px 4px 5px #1a1a1a;
  border-radius: 8px;
  &:hover{
    color: pink;
  }



@media screen and (max-width: 767px) {
  height: 2em;
  &:hover{
    height: none;
  }
}
`;

const IconDes = styled.p`
  font-family: 'Poppins';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 2em;
`;


const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterLink><a href="mailto:paul.evans.creative@gmail.com">Mail: paul.evans.creative@gmail.com  </a></StyledFooterLink> 
            <Icons />
        </StyledFooter>
        
    );
}

const Icons = () => {
  
  return (
    <IconContainer> 

        {footerData.map(Link => (
        <a href={Link.href}>
          {Link.icon}
          <StyledIcon style={Link.style} key={Link.id}></StyledIcon>
          {/* <StyledIcon style={Link.style} src={Link.src} key={Link.id}></StyledIcon> */}
          <IconDes>{Link.des}</IconDes>
        </a>))}
   
    </IconContainer>
  );
}

 


export default Footer;








