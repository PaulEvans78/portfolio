import { useEffect, useState } from "react";
import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/paulEvansCreativeLogo.avif";

const StyledNav = styled.nav`
  position: fixed;
  grid-area: top;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 150;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
  padding-left: 1em;
  background-color: var(--main-hero-backgroundcolor);
  top: ${({ visible }) => (visible ? "0" : "-160px")};
  transition: top 0.6s;

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    justify-items: flex-end;
    justify-content: space-between;
    margin-top: 0;
    padding-top: 0.5em;
  }
`;

const StyledImageandName = styled.div`
  width: 300px;
  height: 100%;

  @media screen and (max-width: 478px) {
    width: 100px;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    width: 100%;

    justify-content: center;
    margin-bottom: 4em;
  }
`;

const StyledNavLogo = styled.img`
  text-align: center;
  width: 70px;
  margin-top: 0em;

  @media screen and (max-width: 960px) {
    margin-top: 1.5em;
  }

  @media screen and (max-width: 767px) {
    margin-top: 1em;
  }
`;

const StyledHamburgerPELogo = styled.img`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    margin-top: 100px;
    width: 100px;
  }
`;

const StyledIdent = styled.div`
  display: flex;
  width: 600px;
  height: 100%;
  padding-left: 0.5em;
  text-align: left;

  @media screen and (max-width: 767px) {
    padding-left: 0em;
  }
`;

const StyledTitle = styled.div`
  padding-left: 1em;
  padding-top: 0.5em;
  
  @media screen and (max-width: 1080px) {
    padding-top: 0.5em;
    }

  @media screen and (max-width: 960px) {
    padding-top: 2em;
  }

  @media screen and (max-width: 767px) {
    padding-top: 1.5em;
  }

  @media screen and (max-width: 478px) {
    visibility: hidden;
  }

  &:hover {
    color: var(--main-button-hover-color);
  }
`;

const StyledNavul = styled.ul`
  width: auto;
  display: flex;
  list-style-type: none;
  margin-left: 1em;
  padding-right: 2.5em;

  @media screen and (max-width: 960px) {
    position: fixed;
    flex-direction: column;
    padding-top: 0em;
    top: 0px;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--main-hero-backgroundcolor);
    opacity: ${({ open }) => (open ? "1" : "0")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0em;
    margin-left: 0em;
    padding-right: 0em;
    padding-inline-start: 0px;
  }

  @media screen and (max-width: 960px) {
    padding-top: 4em;
  }

  @media screen and (max-width: 478px) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
  color: var(--main-font-color);
  text-decoration: none;
  text-align: right;
  margin: 1em 2em 0em 0em;
  color: var(--main-font-color);

  &:hover {
    text-decoration: underline;
    color: var(--main-navbar-hover-color);
  }

  &.active {
    text-decoration: underline;
    color: var(--main-navbar-active-color);
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    align-self: center;
    margin: 1em 0em 0em 0em;
    font-size: 32px;

    &:hover {
      text-decoration: none;
      color: var(--main-navbar-hover-color);
    }
  }
`;

const ExternalStyledLink = styled.a`
  display: flex;
  align-self: flex-end;
  text-decoration: none;
  text-align: right;
  margin: 0em 2em 0em 0em;
  color: var(--main-font-color);

  &:hover {
    text-decoration: underline;
    color: var(--main-navbar-hover-color);
  }

  &.active {
    text-decoration: underline;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    align-self: center;
    font-size: 32px;

    margin: 1em 0em 0em 0em;

    &:hover {
      text-decoration: none;
    }
  }
`;

const StyledHamburger = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-right: 6em;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-right: 2em;
  }
`;

const Navbar = ({ footerRef }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false); // Hamburger menu
  const [activePage, setActivePage] = useState(location.pathname);
  const [hamburgerActive, setHamburgerActive] = useState(false); // Hamburger menu
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setActivePage(location.pathname);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, prevScrollPos]);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
    setHamburgerActive(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
    setHamburgerActive(false);
  };

  const links = [
    { id: 1, to: "/", text: "Home" },
    { id: 2, to: "/casestudies", text: "Case Studies" },
    {
      id: 3,
      to: "https://www.paulevans-dop.com/",
      text: "Cinematography",
      isExternal: true,
    },
    { id: 4, to: "/about", text: "About" },
    { id: 5, to: "#", text: "Contact", onClick: scrollToFooter }, // Updated Contact link
  ];

  return (
    <StyledNav visible={visible}>
      <StyledImageandName>
        <Link to="/" onClick={handleLinkClick}>
          <StyledIdent>
            <StyledNavLogo
              src={logo}
              alt="the letters P and E merged together to form the logo Paul Evans Creative"
            />
            <StyledTitle>
              <h1>Paul Evans</h1>
              <h1>Experience Designer</h1>
            </StyledTitle>
          </StyledIdent>
        </Link>
      </StyledImageandName>

      <StyledNavul open={open}>
        {links.map((link) =>
          link.isExternal ? (
            <ExternalStyledLink
              key={link.id}
              href={link.to}
              onClick={link.onClick || handleLinkClick}
              className={activePage === link.to ? "active" : ""}
            >
              {link.text}
            </ExternalStyledLink>
          ) : (
            <StyledLink
              key={link.id}
              to={link.to}
              onClick={link.onClick || handleLinkClick}
              className={activePage === link.to ? "active" : ""}
            >
              {link.text}
            </StyledLink>
          )
        )}

        <StyledImgContainer>
          <StyledHamburgerPELogo
            src={logo}
            alt="the letters P and E merged together to form the logo Paul Evans Creative"
          />
        </StyledImgContainer>
      </StyledNavul>

      <StyledHamburger>
        <div
          onClick={() => {
            setOpen(!open);
            setHamburgerActive(!hamburgerActive);
          }}
        >
          <Hamburger toggled={hamburgerActive} />
        </div>
      </StyledHamburger>
    </StyledNav>
  );
};

export default Navbar;
