// responsive?

// change info in cards 



// Upload

// Later Stage 
// Resume

import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Design from "./pages/Design";
import About from "./pages/About";
import CaseSpotify from "./pages/CaseSpotify";
import CookWise from "./pages/CookWise";
import ScrollButton from "./components/ScrollButton/ScrollButton";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const GridContainer = styled.div`
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
max-width: 100vw;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: flex-end;
justify-items: center;
justify-content: space-evenly;
margin-bottom: 1.5em;
padding: 0em 2em 0em 2em;

@media screen and (max-width: 767px) {
flex-direction: column;
align-items: center;
padding: 0em 0em 0em 0em;

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
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/design">
              <Design />
            </Route>

            <Route path="/CaseSpotify">
              <CaseSpotify />
            </Route>

            <Route path="/CookWise">
              <CookWise />
            </Route>

          </Switch>

            </MainContainer>

                <ScrollButton />

                    <Footer />

      </GridContainer>
      
    </Router>
   
  );
}

export default App;
