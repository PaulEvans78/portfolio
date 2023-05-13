import styled from 'styled-components';

export const CardContainer = styled.div`

/* grid-area: main; */
    position: relative; 
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    /* justify-items: center; */
    align-items: center;
    margin-top: 3em;
    margin-bottom: 2em;
    margin-left: 1em;
    padding: 0em 0em 1em 0em;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    font-family: 'Poppins';
    font-size: 1.2rem;
    overflow: hidden;
    border-radius: 10px;
    background-color: black;
    border: 1px solid whitesmoke;
  
   
    
    /* @media screen and (max-width: 767px) {
        justify-content: center;
        margin-left: 0em;
        width: 300px;
        height: 200px;
  } */


`;

export const StyledCardImg = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    /* justify-self: flex-end; */
    align-self: center;
    margin-top: 0.5em;
    /* margin-left: 1.5em; */
    /* box-shadow: 4px 6px 5px #858287; */
    border-radius: 10px;

    /* @media screen and (max-width: 767px) {
        margin-left: 1em;
  } */
`;

// export const StyledInfoContainer = styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-self: flex-end;
//     width: 60%;
//     background-color: #ffffff;
//     padding: 1em;
//     border-radius: 10px 10px 0px 0px;
// `;

// export const Styledh2 = styled.h2`
//     text-align: center;
//     margin-bottom: 0.25em;
//     white-space: pre-wrap;
//     color: #060606;
//     font-size: 28px;
//     font-weight: 900;

//     @media screen and (max-width: 767px) {
//         font-size: 20px;
//         margin-bottom: 0em;
//   }
// `;

// export const StyledCardp = styled.p`
//     color: #000000;
//     font-size: 14px;
//     padding: 0em 1.5em 1.5em;
//     text-align: center;

//     @media screen and (max-width: 767px) {
//         font-size: 10px;
//         margin-bottom: 0em;
//   }
// `;
