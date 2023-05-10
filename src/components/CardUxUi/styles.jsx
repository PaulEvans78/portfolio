import styled from 'styled-components';

export const CardContainer = styled.div`

/* grid-area: main; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    width: 490px;
    height: 290px;
    /* background-color: #000000; */
    background: conic-gradient(from 195.69deg at 53.39% 0%, #1a1a1a 0deg, #fefefe 360deg);
    /* background: linear-gradient(180deg, #F5ECCA 26.32%, #ffe174 59.9%); */
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    /* animation: spin 8s infinite linear;
    transform-style: preserve-3d;
    animation: spin 8s infinite linear;
    perspective: 100em;

@keyframes spin {
    0% {
        transform: rotateY(0deg)
    }

    50% {
        transform: rotateY(360deg)
    }

    100% {
        transform: rotateY(360deg);
    }
}

@media screen and (max-width: 767px) {
    margin-left: 0em;

  } */


    
    @media screen and (max-width: 767px) {
        justify-content: center;
        margin-left: 0em;
        /* flex-shrink: 2; */
        width: 300px;
        height: 200px;
  }


`;

export const StyledCardImg = styled.img`
    width: auto;
    height: 80%;
    object-fit: scale-down;
    align-self: center;
    margin-top: 0.5em;
    margin-left: 1.5em;
    /* box-shadow: 4px 6px 5px #858287; */
    border-radius: 10px;

    @media screen and (max-width: 767px) {
        margin-left: 1em;
  }
`;

export const StyledInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-items: center; */
    /* justify-self: flex-end; */
    width: 60%;
    /* background-color: #55555592; */
    padding: 1em;
    /* margin-right: 1.5em; */
    margin-left: 2em;
    border-radius: 10px;
    bottom: 1.5em;

    @media screen and (max-width: 767px) {
        /* margin-left: 1.5em; */
        padding: 0em;
  }
    
`;

export const Styledh2 = styled.h2`
    text-align: center;
    margin-bottom: 0.25em;
    white-space: pre-wrap;
    color: #060606;
    font-size: 28px;
    font-weight: 900;

    @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 0em;
  }
`;

export const StyledCardp = styled.p`
    color: #000000;
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
    background-color: #ffffff;
    color: #000000;
    padding: 0em 1.5em;
    /* margin-bottom: 2em; */
    margin: 0em 3em 1em 4em;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    /* border: 2px double whitesmoke; */
    /* box-shadow: 0px 6px 5px #858287; */
    &:hover{
    background: #ccae3f;
    }

    @media screen and (max-width: 767px) {
        /* justify-self: center; */
        margin: 0em 0em 0em 1em;
        font-size: 0.75rem;
        padding: 0em 2.5em;
  }
`;