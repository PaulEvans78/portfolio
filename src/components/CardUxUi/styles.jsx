import styled from 'styled-components';

export const CardContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 3em;
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

    animation: fadeInAnimation ease 6s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

 
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
    




    
    @media screen and (max-width: 767px) {
        justify-content: center;
        margin-left: 0em;
        width: 300px;
        height: 100px;
  }


`;

export const StyledCardImg = styled.img`
    width: auto;
    height: 50%;
    align-self: center;
    margin-top: 1em;


    @media screen and (max-width: 767px) {
        margin-left: 1em;
  }
`;

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #272424; 
    bottom: 1.5em;

    @media screen and (max-width: 767px) {
        padding: 0em;
  }
    
`;

export const Styledh5 = styled.h5`
    text-align: center;
    margin-top: 0.75em;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: whitesmoke;
    font-size: 28px;
    font-weight: 900;

    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 0em;
  }
`;

export const StyledCardp = styled.p`
    color: whitesmoke;
    font-size: 14px;
    padding: 0em 1.5em 1.5em;
    text-align: center;

    @media screen and (max-width: 767px) {
        font-size: 10px;
        margin-bottom: 0em;
  }
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

    @media screen and (max-width: 767px) {
        margin: 0em 0em 0em 1em;
        font-size: 0.75rem;
        padding: 0em 2.5em;
  }
`;