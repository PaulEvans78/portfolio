import React from "react";
import styled from "styled-components";
import { BsInstagram, BsGithub, BsLinkedin  } from 'react-icons/bs';
import { IconContext } from "react-icons";
// import linkedIcon from '../assets/linkedIn_icon_white.png';
// import instaIcon from '../assets/instagram_icon_white.png';
// import githubIcon from '../assets/github_white.png';

// import {
//   Link
// } from "react-router-dom";


const footerData = [
  {
      id: 1,
      href: "https://www.linkedin.com/in/paul-evans-3a74605/",
      icon: <BsLinkedin />,
      des: "LinkedIn"
  },
  {
      id: 2,
      href: "https://www.instagram.com/paulevanscreative/",
      icon: <BsInstagram />,
      des: "Instagram"
  },
  {
      id: 3,
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
  /* align-content: center; */
  align-items: flex-end;
  padding: 0em 2em 0em 2em;
  font-family: 'Poppins';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  margin-bottom: 2em;
  /* text-shadow: 6px 6px 5px #1a1a1a; */

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledFooterLink = styled.p`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-content: center; */
  color: white;
  border-radius: 8px;
  margin-left: 2em;

  @media screen and (max-width: 767px) {
    margin-left: 0em;
    /* margin-bottom: 2em; */
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

// const StyledIconUrl = styled.a`
// display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   /* align-self: self-end; */
//   height: 2em;
//   margin: 1em 2em 0em 2em;
//   /* box-shadow: 0px 4px 5px #1a1a1a; */
//   /* border-radius: 8px; */
//   &:hover{
//     color: pink;
//   }
// `;

const StyledIcon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 50px; */
  margin: 1em 2em 0em 2em;
  /* box-shadow: 0px 4px 5px #1a1a1a;
  border-radius: 8px; */
  &:hover{
    color: #d979ed;
  }



@media screen and (max-width: 767px) {
  /* height: 2em; */
  &:hover{
    color: #d979ed;
  }
}
`;

// const StyledReactIcon = styled.svg`
// height:4em;
// `;

const IconDes = styled.p`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-content: center;
  font-family: 'Poppins';
  /* font-weight: 400; */
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  text-align: center;
  margin-top: 0.5em;
  /* margin-bottom: 2.5em; */
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
      <IconContext.Provider value={{ size: "1.5em"}}>
        {footerData.map(Link => (
        <StyledIcon href={Link.href} key={Link.id}>
          {Link.icon}
          {/* <StyledIcon key={Link.id}></StyledIcon> */}
          {/* <StyledIcon style={Link.style} src={Link.src} key={Link.id}></StyledIcon> */}
          <IconDes>{Link.des}</IconDes>
        </StyledIcon>))}
        </IconContext.Provider>
    </IconContainer>
  );
}

 


export default Footer;








