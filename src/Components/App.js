import React, {useState,useEffect, useContext} from 'react';
// packages
import styled from 'styled-components';
import axios from 'axios';
import { ClockContext} from './ClockContext';
// components
import Citation from './Citation';
import Hour from './Hour';
import Details from './Details';
// img, svg
import BackgroundMobileDayTime from '../assets/mobile/bg-image-daytime.jpg';
import BackgroundMobileNightTime from '../assets/mobile/bg-image-nighttime.jpg';
import ArrowUpMobile from '../assets/mobile/icon-arrow-up-mobile.svg';



const AppWrapper = styled.div`
position:relative;
width:100vw;
height:100vh;

&:after {
  position:absolute;
  content: "";
  width:100vw;
  height:100vh;
  background:black;
  opacity:0.4;
} 

.app {
  width:100%;
  margin:0;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  z-index:1;
  position:absolute;
  padding:0;
  outline:2px solid green;

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


  const [detailsOpen, setDetailsOpen] = useState(false);

  const [state,setState] = useContext(ClockContext);

  const handleDetailOpen = () => {
    setDetailsOpen(!detailsOpen);
  }

  const fetchData = () => {
    const URLGeo =  `https://freegeoip.app/json/`;
    const URLQuote = `https://type.fit/api/quotes`;

    const getGeo = axios.get(URLGeo);
    const getQuote = axios.get(URLQuote);

    console.log(getGeo,URLQuote)

    axios.all([getGeo,getQuote]).then(
      axios.spread((...allData)=> {
        const index = Math.floor(Math.random()*allData[1].data.length);

        setState({
          ...state,
          country: allData[0].data.country_name,
          countryCode: allData[0].data.country_code,
          quoteText: allData[1].data[index].text,
          quoteAuthor: allData[1].data[index].author
        })
      })
    )
  }

  useEffect(() => {
    fetchData()
    console.log(state)
  }, [state.randomCitation])


  const backgroundStyling = {
    background: `url(${state.isNight? BackgroundMobileNightTime: BackgroundMobileDayTime})`,
    backgroundSize:"cover",
  }

  return (
      <AppWrapper style={backgroundStyling}>
        <div className="app">
          {!detailsOpen && <Citation/>}
          <Hour/>
          <button onClick={handleDetailOpen}>{detailsOpen?"LESS":"MORE"}</button>
          {detailsOpen && <Details/>}
        </div>
      </AppWrapper>
  );
}

export default App;
