import styled from 'styled-components';

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 6em;
    margin-bottom: 2em;
    margin-left: 1em;
    width: 290px;
    height: 490px;
    background-color: whitesmoke;
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    animation-name: slideup;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes slideup {
      0%   {bottom:-600px;}
      100% {bottom:0px;}
}
`;

export const StyledCardImg = styled.img`
    width: auto;
    height: 50%;
    align-self: center;
    margin-top: 1em;
`;

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #272424; 
    bottom: 1.5em;
`;

export const Styledh5 = styled.h5`
    text-align: center;
    margin-top: 0.75em;
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
    height: 40px;
    background-color: whitesmoke;
    color: #272424;
    padding: 0em 1.5em;
    margin: 0em 0em 2.5em 5em;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    &:hover{
    background: #ccae3f;
    }
`;