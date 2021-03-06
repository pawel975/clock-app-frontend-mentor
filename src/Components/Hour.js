import React, {useContext,useState, useEffect} from 'react';
// packages
import styled from 'styled-components';
// img, svg
import Sun from '../assets/desktop/icon-sun.svg';
import Moon from '../assets/desktop/icon-moon.svg';
import { ClockContext, ToggleThemeContext } from './ClockContext';

const HourWrapper = styled.div`
* {
margin:0;
}
margin:1.5em;
margin-right:auto;
width:auto;
display:grid;
min-height:185px;
grid-template-columns: 93% 1fr;
grid-template-rows: 30px 60% 1fr;
grid-template-areas:
"greet-text greet-text"
"time bst"
"city city"
;

@media (min-width:700px) {
    margin-left:4em;
    height:300px;
    /* outline:2px solid green; */
}

@media (min-width:1280px) {
    margin-bottom:-5em;
    margin-left:8em;
    height:330px;
    /* outline:2px solid green; */
}

.greet-text {
    grid-area: greet-text;
    /* outline:2px solid green; */
    font-size:15px;
    line-height:25px;
    color:#FFFFFF;
    letter-spacing:3px;
    font-weight:400;
    display:flex;
    align-items:center;

    @media (min-width:700px) {
        font-size:18px;
        line-height:28px;
        letter-spacing:3.6px;
    }

    @media (min-width:1280px) {
        font-size:20px;
        line-height:28px;
        letter-spacing:4px;
    }

    img {
        margin:auto 0;  
        margin-right:0.8em;
        height:24px; 
        /* outline:2px solid green; */
    }
}

.time {
    grid-area: time;
    /* outline:2px solid green; */
    font-size:100px;
    color:#FFFFFF;
    font-weight:700;
    line-height:100px;
    letter-spacing:-2.5px;
    align-self:end;

    @media (min-width:700px) {
        font-size:175px;
        line-height:175px;
        letter-spacing:-4.38px;
    }

    @media (min-width:1280px) {
        font-size:200px;
        line-height:200px;
        letter-spacing:-5px;
    }
}

.bst {
    padding-bottom:0.2em;
    grid-area: bst;
    font-size:15px;
    line-height:28px;
    color:#FFFFFF;
    font-weight:300;
    /* outline:2px solid green; */
    align-self:end;

    @media (min-width:700px) {
        font-size:32px;
        line-height:28px;
        letter-spacing:3.6px;
    }

    @media (min-width:1280px) {
        margin-bottom:0.45em;
        margin-right:-1em;
        font-size:40px;
        line-height:28px;
        letter-spacing:3.6px;
    }
}

.city {
    grid-area: city;
    /* outline:2px solid green; */
    align-self:end;
    color:#FFFFFF;
    font-weight:700;
    letter-spacing:3px;

    @media (min-width:700px) {
        align-self:flex-start;
        font-size:18px;
        line-height:28px;
        letter-spacing:3.6px;
    }

    @media (min-width:1280px) {
        align-self:flex-start;
        font-size:24px;
        line-height:28px;
        letter-spacing:3.6px;
    }
}


`

const Hour = () => {

    const [state] = useContext(ClockContext);
    const [theme] = useContext(ToggleThemeContext);

    const [timeState, setTimeState] = useState({
        hour: 0,
        minute:0,
    })

    const changeTime = () => {
        let time = new Date()
        let hour = time.getHours();
        let minute = time.getMinutes();
        setTimeState({
            hour: hour,
            minute:minute,
        })
    }

    useEffect(() => {
        setInterval(changeTime,1000);
    }, [])

    const {abbreviation,countryCode,city} = state;
    const {hour,minute} = timeState;

    return(

        <HourWrapper>
            <h3 className="greet-text"><img src={theme==="light"? Sun:Moon} alt="Sun"/>GOOD {theme ==="light"? "MORNING" : "EVENING"}{window.innerWidth >=700 && ", IT'S CURRENTLY" }</h3>
            <span className="time">
                {hour<10? `0${hour}`:`${hour}`}:
                {minute<10? `0${minute}`:`${minute}`}
                
            </span>
            <h3 className="bst">{abbreviation}</h3>
            <h3 className="city">{city===undefined? "LOADING..." : `IN ${city}, ${countryCode}`.toUpperCase()}</h3>
        </HourWrapper>
    )
}

export default Hour;