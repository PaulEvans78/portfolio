import React from "react";
import styled from "styled-components";
import { DiHtml5, DiCss3, DiJavascript, DiReact,   } from 'react-icons/di';
import { FiFigma, FiGithub,   } from 'react-icons/fi';
import { IconContext } from "react-icons"; 


const ToolData = [
  {
      id: 1,
      icon: <DiHtml5 />,
      des: "html5"
  },
  {
      id: 2,
      icon: <DiCss3 />,
      des: "css3"
  },
  {
      id: 3,
      icon: <DiJavascript />,
      des: "Javascript"
  },
  {
      id: 4,
      icon: <DiReact />,
      des: "react"
  },
  {
      id: 5,
      icon: <FiFigma />,
      des: "figma"
  },
  {
      id: 6,
      icon: <FiGithub />,
      des: "gitHub"
  },
];

const StyledToolBox = styled.div`
  /* grid-area: photoOne; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  /* align-items: flex-end; */
  /* padding: 0em 2em 0em 2em; */
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 24px;
  color: whitesmoke;
  margin-bottom: 2em;

  @media screen and (max-width: 767px) {
     
    /* flex-direction: column;
    align-items: center; */
  }
`;


const ToolIconContainer = styled.div`
  /* grid-area: footer; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* width: 100%; */
  /* justify-content: space-evenly; */
  /* justify-items: center; */

@media screen and (max-width: 767px) {
  /* flex-direction: column; */
  justify-content: center;

}
`;


const StyledToolIcon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 2em 0em 2em;
  

@media screen and (max-width: 767px) {
  
}
`;


const ToolIconDes = styled.p`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: 'Poppins';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 0.5em;
`;


const ToolBox = () => {
    return (
        <StyledToolBox>
            
            <Icons />
        </StyledToolBox>
        
    );
}

const Icons = () => {
  
  return (
    <ToolIconContainer> 
      <IconContext.Provider value={{ size: "1.5em"}}>
        {ToolData.map(Link => (
        <StyledToolIcon key={Link.id}>
          {Link.icon}
          
          <ToolIconDes>{Link.des}</ToolIconDes>
        </StyledToolIcon>))}
        </IconContext.Provider>
    </ToolIconContainer>
  );
}

 


export default ToolBox;