import React from "react";
import styled from "styled-components";
import { FaImdb, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../assets/paulEvansCreativeLogo.avif";
import { Link } from "react-router-dom";

const footerData = [
  {
    id: 1,
    href: "https://github.com/PaulEvans78",
    icon: <FaGithub />,
    des: "Github",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/paul-evans-3a74605/",
    icon: <FaLinkedin />,
    des: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 3,
    href: "https://www.instagram.com/paulevans_official/",
    icon: <FaInstagram />,
    des: "Instagram",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 4,
    href: "https://www.imdb.com/name/nm3171341/?ref_=ttfc_fc_cr",
    icon: <FaImdb />,
    des: "Imdb",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const StyledFooter = styled.footer`
  background-color: var(--main-hero-backgroundcolor);
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
  color: var(--main-font-color);

  @media screen and (max-width: 960px) {
    background-image: none;

    flex-direction: column;
    align-items: center;
  }
`;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4em;
  padding-right: 2em;
  text-align: right;

  @media screen and (max-width: 960px) {
    padding-top: 2em;
    padding-right: 0em;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    margin-bottom: 3em;
  }
`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  color: var(--main-font-color);

  margin-bottom: -0.5em;
  text-shadow: 2px 2px 4px black;

  &:hover {
    color: var(--main-button-hover-color);
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
  color: var(--main-font-color);

  text-shadow: 2px 2px 4px black;

  &:hover {
    color: var(--main-button-hover-color);
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
  margin-left: 6em;
  padding-top: 4em;

  @media screen and (max-width: 960px) {
    padding-top: 2em;
    margin-left: 0em;
    margin-right: 24px;
  }

  @media screen and (max-width: 478px) {
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
    color: var(--main-button-hover-color);
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
  font-size: 12px;
  line-height: 18px;
  color: var(--main-font-color);
  text-align: center;
  margin-top: 0.5em;

  &:hover {
    color: var(--main-button-hover-color);
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

    margin-bottom: 2em;
    padding-left: 0em;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const StyledFooterLogo = styled.img`
  text-align: center;
  justify-self: center;
  width: 120px;
  margin-top: 4em;

  @media screen and (max-width: 960px) {
    width: 120px;
  }
`;

const Styledp = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 2px;

  @media screen and (max-width: 960px) {
    margin: 8px;
  }
`;

const Footer = React.forwardRef((props, ref) => (
  <StyledFooter ref={ref}>
    <StyledLogoContainer>
      <Link to="/">
        <StyledFooterLogo
          src={logo}
          alt="the letters P and E merged together to form the logo Paul Evans Creative"
        />
      </Link>
    </StyledLogoContainer>
    <Icons />

    <StyledContactContainer>
      <Styledp>Copyright 2024.</Styledp>
      <Styledp>Paul Evans.</Styledp>
      <StyledMailLink>
        <a href="mailto:paul.evans.creative@gmail.com">
          paul.evans.creative@gmail.com
        </a>
      </StyledMailLink>
      <StyledTelLink>
        <a href="tel:+46739908858">+46739908858</a>
      </StyledTelLink>
    </StyledContactContainer>
  </StyledFooter>
));

const Icons = () => {
  return (
    <IconContainer>
      <IconContext.Provider value={{ size: "2em" }}>
        {footerData.map((Link) => (
          <StyledIcon
            href={Link.href}
            key={Link.id}
            target={Link.target}
            rel={Link.rel}
          >
            {Link.icon}

            <IconDes>{Link.des}</IconDes>
          </StyledIcon>
        ))}
      </IconContext.Provider>
    </IconContainer>
  );
};

export default Footer;
