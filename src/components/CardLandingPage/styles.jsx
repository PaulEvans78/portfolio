import styled from "styled-components";


export const StyledFrontCard = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3em; 
    margin-bottom: 2em;
    margin-left: 0.5em;
    width: 290px;
    height: 520px;
    background-color: whitesmoke;
    border: 2px solid white;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    animation-name: slidedown;
    animation-duration: 3s;
    animation-delay: 0s;

    @keyframes slidedown {
  0%   {top:-1000px;}
  100% {top:0px;}
}

@media screen and (max-width: 960px) {
    @keyframes slidedown {
  0%   {bottom:-1000px;}
  100% {bottom:0px;}
  }
}
`;


   
export const StyledFrontCardImg = styled.img`
    width: 100%;
    height: 290px;
    align-self: center;
    object-fit: cover;
 `; 

export const StyledInfoContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #272424;   
`;

export const Styledh5 = styled.h5`
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-size: 28px;
    font-weight: 900;
`;

export const StyledCardp = styled.p`
    color: whitesmoke;
    font-size: 14px;
    padding: 0em 1.5em 1.5em;
    text-align: center;
`;

export const StyledButton = styled.button`
    height: 50px;
    width: 160px;
    background-color: whitesmoke;
    color: #272424;
    margin: 0em 0em 3em 4em;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    &:hover{
    background: #ccae3f;
    }
`;




