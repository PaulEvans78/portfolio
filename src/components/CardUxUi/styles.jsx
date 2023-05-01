import styled from 'styled-components';

export const CardContainer = styled.div`

/* grid-area: main; */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-top: 3em;
margin-bottom: 2em;
margin-left: 0.5em;
width: 290px;
height: 490px;
background-color: whitesmoke;
border-radius: 10px;
font-family: 'Poppins';
font-size: 1.2rem;
overflow: hidden;
animation: spin 8s infinite linear;
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




`;

export const StyledCardImg = styled.img`
width: 90%;
height: 230px;
object-fit: cover;
align-self: center;
margin-top: 0.5em;
box-shadow: 4px 6px 5px #858287;
border-radius: 10px;
`;

export const Styledh2 = styled.h2`
text-align: center;
margin-bottom: 0.25em;
white-space: pre-wrap;
font-size: 28px;
font-weight: 900;
`;

export const StyledCardp = styled.p`
color: black;
font-size: 14px;
padding: 0em 1.5em 1.5em;
text-align: center;
`;

export const StyledButton = styled.button`
background-color: #403f3f;
color: whitesmoke;
padding: 0.75em 1.5em;
margin-bottom: 2em;
border-radius: 10px;
font-size: 1rem;
font-weight: bold;
border: 2px double whitesmoke;
box-shadow: 0px 6px 5px #858287;

`;