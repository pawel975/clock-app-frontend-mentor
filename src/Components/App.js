import React, {useState,useEffect, useContext} from 'react';
// packages
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import axios from 'axios';
import { ClockContext, ToggleThemeContext} from './ClockContext';
// components
import Citation from './Citation';
import Hour from './Hour';
import Details from './Details';
// img, svg
import BackgroundMobileDayTime from '../assets/mobile/bg-image-daytime.jpg';
import BackgroundTabletDayTime from '../assets/tablet/bg-image-daytime.jpg';
import BackgroundDesktopDayTime from '../assets/desktop/bg-image-daytime.jpg';
import BackgroundMobileNightTime from '../assets/mobile/bg-image-nighttime.jpg';
import BackgroundTabletNightTime from '../assets/tablet/bg-image-nighttime.jpg';
import BackgroundDesktopNightTime from '../assets/desktop/bg-image-nighttime.jpg';
import ArrowUpMobile from '../assets/mobile/icon-arrow-up-mobile.svg';
import ArrowUpDesktop from '../assets/desktop/icon-arrow-up.svg';

const LightTheme = {
  imgMobile: BackgroundMobileDayTime,
  imgTablet: BackgroundTabletDayTime,
  imgDesktop: BackgroundDesktopDayTime,
  fontColor: "#303030",
  backgroundColor: "rgba(255, 255, 255, 0.75)",
}

const DarkTheme = {
  imgMobile: BackgroundMobileNightTime,
  imgTablet: BackgroundTabletNightTime,
  imgDesktop: BackgroundDesktopNightTime,
  fontColor: "white",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

const AppWrapper = styled.div`
    background: url(${props=> props.theme.imgMobile});
    background-size:cover;
    position:relative;
    width:100vw;
    height:100vh;

    @media (min-width: 700px) {
      background: url(${props=> props.theme.imgTablet});
      background-size:cover;
    }

    @media (min-width: 1280px) {
      background: url(${props=> props.theme.imgDesktop});
      background-size:cover;
    }

&:after {
  position:absolute;
  content: "";
  width:100vw;
  height:100vh;
  background:black;
  opacity:0.4;
}

.loading {
  z-index:1;
  position:absolute;
  transform:translate(-50%,-50%);
  left:50%;
  top:50%;
}

.error {
  left:50%;
  transform:translate(-50%,-50%);
  top:50%;
  text-align:center;
  z-index:1;
  font-size:30px;
  position:absolute;
  color:white;

  @media (min-width: 700px) {
    font-size:70px;
  }

  @media (min-width: 1280px) {
    font-size:100px;
  }
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

    &:hover {
        opacity:0.8;
      }

    @media (min-width:700px) {
      margin-left:4em;
      font-size:16px;
      line-height:28px;
      letter-spacing:5px;
      width:146px;
      height:56px;
      border-radius:28px;
    }

    @media (min-width:1280px) {
      position:relative;
      left:80%;
      bottom:3%;
    }


    &:after {
      margin-right:3.5px;
      content:url(${ArrowUpMobile});
      transform:rotate(180deg);
      position:relative;
      width:32px;
      height:32px;

      @media (min-width:700px) {
        width:40px;
        height:40px;
        margin-right:5px;
        content:url(${ArrowUpDesktop});
      }
    }
  }
}
`
function App() {


  const [detailsOpen, setDetailsOpen] = useState(false);
  const [state, setState] = useContext(ClockContext);
  const [theme, setTheme] = useContext(ToggleThemeContext);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataError, setDataError] = useState(false);

  const handleDetailOpen = () => {
    setDetailsOpen(!detailsOpen);
  }

  const fetchData = () => {
    const URLGeo =  `https://freegeoip.app/json/`;
    const URLTime = `http://worldtimeapi.org/api/ip`;

    const getGeo = axios.get(URLGeo);
    const getTime = axios.get(URLTime);

    axios.all([getGeo,getTime]).then(
      axios.spread((...allData)=> {
          setState({
            ...state,
            timeZone: allData[0].data.time_zone,
            city: allData[0].data.city,
            countryCode: allData[0].data.country_code,
            dayOfTheYear: allData[1].data.day_of_year,
            dayOfTheWeek: allData[1].data.day_of_week,
            weekNumber: allData[1].data.week_number,
            abbreviation: allData[1].data.abbreviation,
          })
          setDataLoaded(true)
          setDataError(false)
      })
    )
    .catch((error)=>{
      console.log(error)
      setDataLoaded(false)
      setDataError(true)
    }) 
  }

  const changeBackground = () => {
    const currentHours = new Date().getHours()
    if(currentHours > 6) { 
      if (currentHours < 19) {
        setTheme("light")
      } else {
        setTheme("dark")
      }
      }
  }
 
  useEffect(() => {
    changeBackground();
    fetchData();
    return setState({})
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppWrapper>
        {   
        dataError ? 
            <div className="error">Something went wrong... refresh the page</div>
          :
            dataLoaded? 
            <div className="app">
              {!detailsOpen && <Citation/>}
              <Hour detailsOpen={detailsOpen}/>
              <button onClick={handleDetailOpen}>{detailsOpen?"LESS":"MORE"}</button>
              {detailsOpen && <Details/>}
              </div>
                :        
              <Loader className="loading" type="Oval" color="#FFFFFF" height={150} width={150} />
          }
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

