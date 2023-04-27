import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
// import Background from "./assets/background.png";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const GridContainer = styled.div`
/* background-size: cover; */
/* background-position: bottom; */
/* background-image: url('./assets/background.png'); */
/* background: linear-gradient(180deg, rgba(0, 0, 0) 15.1%, rgba(46, 99, 112, 0.856) 100%); */
min-height: 100vh;
min-width: 400px;
display: grid;
grid-template-rows: 7rem repeat(3, 1fr) 7rem;
grid-template-columns: repeat(5, 1fr);
grid-template-areas:
"top top top top top"
"main main main main main"
"main main main main main"
"main main main main main"
"footer footer footer footer footer";

@media screen and (max-width: 767px) {
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(2, 1fr);
grid-template-areas:
"top top "
"main main "
"main main "
"main main "
"footer footer"; 
  }
`;


// MAIN CONTAINER
const MainContainer = styled.div`
grid-area: main;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;

@media screen and (max-width: 767px) {
flex-direction: column;
flex-wrap: nowrap;

}
`;

function App() {
  
  return (

    <Router>
      <GridContainer >

      <Navbar />
  
        <MainContainer>
          <Switch>

            <Route exact path="/">
              {/* <Home /> */}
            </Route>

            <Route path="/about">
              {/* <About /> */}
            </Route>

            <Route path="/contact">
              {/* <Contact /> */}
            </Route>

            <Route path="/web">
               {/* <Web />  */}
            </Route>

            <Route path="/film">
               {/* <Film />  */}
            </Route>

          </Switch>
        </MainContainer>

          <Footer />
      </GridContainer>
      
    </Router>
   
  );
}

export default App;
