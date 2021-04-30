import React, {useState} from 'react';
// packages
import styled from 'styled-components';
// import axios from 'axios';
// components
import Citation from './Citation';
import Hour from './Hour';
import Details from './Details';
// img, svg
import BackgroundMobileDayTime from '../assets/mobile/bg-image-daytime.jpg';
import ArrowUpMobile from '../assets/mobile/icon-arrow-up-mobile.svg';
import { ClockProvider } from './ClockContext';


const AppWrapper = styled.div`
position:relative;
width:100vw;
height:100vh;
background:url(${BackgroundMobileDayTime});
background-size:cover;

&:after {
  position:absolute;
  content: "";
  width:100vw;
  height:100vh;
  background:black;
  opacity:0.4;
} 

.app {
  margin:0;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  z-index:1;
  position:absolute;
  padding:0;
  /* outline:2px solid green; */

  button {
    /* outline:2px solid green; */
    padding:0;
    margin:2.5em 1.5em;
    padding-left:1.5em;
    position:relative;
    width:115px;
    height:39px;
    border-radius:19.5px;
    border:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color: rgba(0, 0, 0, 0.5);
    font-weight:800;
    font-size:12px;
    line-height:14px;
    letter-spacing:3.75px;


    &:after {
      margin-right:3.5px;
      content:url(${ArrowUpMobile});
      transform:rotate(180deg);
      position:relative;
      width:32px;
      height:32px;
      /* outline:2px solid green; */
    }
  }
}
`
function App() {

  const [detailsOpen, setDetailsOpen] = useState(true);

  const handleDetailOpen = () => {
    setDetailsOpen(!detailsOpen);
  }

  return (
    <ClockProvider>
      <AppWrapper>
        <div className="app">
          {!detailsOpen && <Citation/>}
          <Hour/>
          <button onClick={handleDetailOpen}>{detailsOpen?"LESS":"MORE"}</button>
          {detailsOpen && <Details/>}
        </div>
      </AppWrapper>
    </ClockProvider>
  );
}

export default App;
