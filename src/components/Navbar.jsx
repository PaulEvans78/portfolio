import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useTypewriter } from 'react-simple-typewriter';
import PaulNavImage from '../assets/me_babyblues.png';

import {
    Link
} from "react-router-dom";

// TO DO

// HAMBURGER ITEMS


//NAVBAR

const StyledNav = styled.nav`
    /* position: sticky;
    top: 0; */
    max-width: 100%;
    grid-area: top;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat (5, 1fr);
    grid-template-areas:
   "logo logo navbar navbar navbar";

    font-family: 'Poppins';
    font-size: 16px;
    line-height: 24px;
    /* background-color: #0E0F0F; */
    color: whitesmoke;
    
    @media screen and (max-width: 960px) {
    font-size: 12px;
  }
    
    @media screen and (max-width: 767px) {
    grid-template-rows: auto;
    grid-template-columns: 80vw 20vw;
    grid-template-areas:
    "logo navbar "; 

    font-size: 20px;
    /* justify-items: center; */
  }
    
  @media screen and (max-width: 400px) {
    /* display: block; */
    /* min-width: 100vw; */
    /* left: 100%; */
  }
`;


// NAV UL & LINKS

const StyledNavul = styled.ul`
    grid-area: navbar;
    display: flex;
    justify-self: flex-end; 
    align-self: flex-end;
    list-style-type: none;
    margin-right: 3em;
   
    
    @media screen and (max-width: 960px) {
        margin-bottom: 1.5em;
    }

    @media screen and (max-width: 767px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 70px;
        right: 0;
        height: 100vh;
        width: 60vw;
        background-image: linear-gradient(180deg, rgb(13, 13, 13) 15.1%, rgba(158, 159, 159) 100%);
        padding: 20px;
        transform: translateX(500px);
        transition: 0.5s ease-in-out; 
        margin-top: 1em;
        margin-right: 0;
        margin-bottom: 0em;
        z-index: 100;
    }

    
`;

const StyledLink = styled(Link)`
    display: flex; 
    color: white;
    text-decoration: none;
    text-align: right;
    margin: 1em 1em 0em 1em;
    &:hover{
    color: #ccae3f;
    }

    @media screen and (max-width: 960px) {
    
  }

    @media screen and (max-width: 767px) {
        /* display: none;  */
        justify-content: flex-end;
        /* text-align: right; */
        
    
    }
`;

const ExternalStyledLink = styled.a`
    display: flex; 
    color: whitesmoke;
    text-decoration: none;
    text-align: right;
    margin: 1em 1em 0em 1em;
    &:hover{
    color: #ccae3f;
    }

    @media screen and (max-width: 960px) {
    
  }

    @media screen and (max-width: 767px) {
        /* display: none;  */
        justify-content: flex-end;
        /* text-align: right; */
        
    
    }
`;


// IMAGE AND NAME ID

const StyledImageandName = styled.div `
    grid-area: logo;
    display: flex;
    flex-direction: row;
    justify-self: flex-start;
    justify-content: flex-start;
    /* margin-top: 1em; */
`;

const StyledImg = styled.img`
    height: 5em;
    margin-left: 3em;
    margin-right: 1em;
    margin-top: 0.5em;

    @media screen and (max-width: 960px) {
        height: 4em;
  }

    @media screen and (max-width: 767px) {
    margin-left: 1em;
    margin-top: 0em;
    }
`;

const StyledName = styled.div `
    /* display: flex;   */
    float: right;
    font-family: 'Poppins';
    font-size: 32px;
    /* font-style: italic; */
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0em;
    color: whitesmoke;
    margin-top: 1.5em;
    &:hover{
    color: #ccae3f;
    }

    @media screen and (max-width: 960px) {
        font-size: 32px;
        line-height: 22px;
        margin-top: 1em;
  }

    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
        /* align-content: flex-end; */
        /* justify-content: space-between; */
        /* align-content: flex-end; */
        font-size: 24px;
        line-height: 24px;
        /* margin-right: 1em; */
        margin-top: 1.6em;
    }
`;

const StyledTypewriter = styled.span `
    font-family: 'Poppins';
    font-size: 16px;
    color: #ccae3f;

    @media screen and (max-width: 960px) {
        font-size: 14px;
  }

    @media screen and (max-width: 767px) {
    display:block;
    
    }
`;



// HAMBURGER

const StyledHamburger = styled.div`
    grid-area: navbar;
    display: none;
    
    @media screen and (max-width: 767px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 2em;
    margin-right: 2em;
    }
`;

const StyledBurgerBars = styled.div `
    width: 2rem;
    height: 0.25rem;
    margin-bottom: 0.25rem;
    border-radius: 10px;
    background-color: whitesmoke;
    transform-origin: 1px;
    transition: all 0.2s linear;
    
`;




//NAVBAR
// https://www.youtube.com/watch?v=ZlDASfsL7FI


const Navbar = () => {
    const [open, setOpen] = useState(false); // Hamburger menu

    const [text] = useTypewriter({
        words: ['UX/UI', 'Frontend Developer', 'Cinematographer', 'photographer', 'Creative'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 120,
    });

    

const links = [
    
    {
        id: 1,
        to: "/design",
        text: "UX/UI & Frontend",
        onClick: () => { setOpen(false); },
        isExternal: false
    },
    {
        id:2,
        // to: "/Film",
        text: "Film",
        href: "https://www.paulevans-dop.com/",
        onClick: () => { setOpen(false); },
        isExternal: true
    },
    {
        id: 3,
        to: "/about",
        text: "About",
        onClick: () => { setOpen(false); },
        isExternal: false 
    },
];

    return (
        
        <StyledNav > 

            <StyledImageandName>
                <Link to="/">
                    
                    <StyledImg src={PaulNavImage} alt="The dude" onClick={() => {setOpen(false);}} />
                        <StyledName>Paul Evans {' '}
                    
                            <StyledTypewriter>
                                {text}
                            </StyledTypewriter>

                                {/* <Cursor /> */}
                        </StyledName>

                </Link>  
            </StyledImageandName>        



            <StyledNavul style={{transform: open ? "translateX(0px)" : ""}}>
                 {links.map(link => link.isExternal ? <ExternalStyledLink href={link.href}>{link.text}</ExternalStyledLink> : <StyledLink onClick={link.onClick} to={link.to} key={link.id}>{link.text}</StyledLink>)}

                

            </StyledNavul>

            
            <div onClick={() => setOpen(!open).StyledHamburger}>
                <Hamburger />
                </div>
            
            
        </StyledNav>
        

    );
}





//HAMBURGER MENU
function Hamburger() {

    return (  
      <StyledHamburger>
           <div>
           <StyledBurgerBars className="burger burger1"></StyledBurgerBars>
           <StyledBurgerBars className="burger burger2"></StyledBurgerBars>
           <StyledBurgerBars className="burger burger3"></StyledBurgerBars>
          </div>
          
      </StyledHamburger>
    );
  }

export default Navbar;