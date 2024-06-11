import React from "react";
import styled from "styled-components";
import { FaImdb, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../assets/paulEvansCreativeLogo_inverted.avif";

const footerData = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/paul-evans-3a74605/",
    icon: <FaLinkedin />,
    des: "LinkedIn",
  },
  {
    id: 2,
    href: "https://www.instagram.com/paulevanscreative/",
    icon: <FaInstagram />,
    des: "Instagram",
  },
  {
    id: 3,
    href: "https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",
    icon: <FaImdb />,
    des: "Imdb",
  },
];

const StyledFooter = styled.footer`
  background-color: #171717;
  max-width: 100vw;
  min-width: 100vw;
  z-index: 98;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  padding-bottom: 6em;

  line-height: 24px;
  color: whitesmoke;

  @media screen and (max-width: 767px) {
    background-image: none;
    
    flex-direction: column;
    align-items: center;
  }
`;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4em;

  @media screen and (max-width: 767px) {
    text-align: center;

    margin-bottom: 3em;
    padding-top: 0em;
  }
`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;

  margin-bottom: -0.5em;
  text-shadow: 2px 2px 4px black;

  &:hover {
    color: #9804e2;; 
  }

  @media screen and (max-width: 960px) {
    

    &:hover {
      color: inherit; 
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

   
  }
`;

const StyledTelLink = styled.p`
  display: flex;
  flex-direction: column;
  color: whitesmoke;

  text-shadow: 2px 2px 4px black;

  &:hover {
    color: #9804e2;; 
  }

  @media screen and (max-width: 960px) {
    

    &:hover {
      color: inherit; 
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

   
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  margin-right: 2em;
  padding-top: 4em;

  @media screen and (max-width: 960px) {
    padding-top: 0em;
  }

  @media screen and (max-width: 767px) {
    margin-right: 1em;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
    margin-right: 0em;
  }
`;

const StyledIcon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 1em 0em 2em;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1); 
    color: #9804e2;
    
  }

  @media screen and (max-width: 960px) {
    

    &:hover {
      color: inherit; 
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0em 2em 0em 2em;

  }
`;

const IconDes = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  text-align: center;
  margin-top: 0.5em;

  &:hover {
    color: #9804e2;; 
  }

  @media screen and (max-width: 960px) {
    

    &:hover {
      color: inherit; 
    }
  }

 
`;

const StyledLogoContainer = styled.div`
  display: flex;
  padding-left: 2em;

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const StyledFooterLogo = styled.img`
  text-align: center;
  width: 180px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`;

// const Footer = () => {
const Footer = React.forwardRef((props, ref) => (
  // return (

  <StyledFooter ref={ref}>
    <StyledLogoContainer>
      <StyledFooterLogo
        src={logo}
        alt="the letters P and E merged together to form the logo Paul Evans Creative"
      />
    </StyledLogoContainer>

    <StyledContactContainer>
      <p>Paul Evans. Copyright 2024.</p>
      <StyledMailLink>
        <a href="mailto:paul.evans.creative@gmail.com">paul.evans.creative@gmail.com</a>
      </StyledMailLink>
      <StyledTelLink>
        <a href="tel:+46739908858">+46739908858</a>
      </StyledTelLink>
    </StyledContactContainer>

    <Icons />
  </StyledFooter>
));
// }

const Icons = () => {
  return (
    <IconContainer>
      <IconContext.Provider value={{ size: "2em" }}>
        {footerData.map((Link) => (
          <StyledIcon href={Link.href} key={Link.id}>
            {Link.icon}

            <IconDes>{Link.des}</IconDes>
          </StyledIcon>
        ))}
      </IconContext.Provider>
    </IconContainer>
  );
};

export default Footer;
