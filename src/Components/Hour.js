import React, {useContext, useEffect} from 'react';
// packages
import styled from 'styled-components';
// img, svg
import Sun from '../assets/desktop/icon-sun.svg';
import Moon from '../assets/desktop/icon-moon.svg';
import { ClockContext, TimeContext } from './ClockContext';

const HourWrapper = styled.div`
* {
margin:0;
}
margin:1.5em;
width:85%;
/* outline:2px solid green; */
display:grid;
height:185px;
grid-template-columns: 93% 1fr;
grid-template-rows: 30px 60% 1fr;
grid-template-areas:
"greet-text greet-text"
"time bst"
"city city"
;

@media (min-width:700px) {
    width:70%;
    outline:2px solid green;
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
}

.city {
    grid-area: city;
    /* outline:2px solid green; */
    align-self:end;
    color:#FFFFFF;
    font-weight:700;
    letter-spacing:3px;
}
`

const Hour = () => {

    const [state, setState] = useContext(ClockContext);

    const [timeState, setTimeState] = useContext(TimeContext);

    const changeTime = () => {
        let time = new Date()
        let hour = time.getHours();
        let minute = time.getMinutes();
        setTimeState({
            hour: hour,
            minute:minute,
        })
    }

    const changeGreet = () => {
        if(timeState.hour > 6 && timeState.hour < 19) {
          setState({...state, isNight: false,})
        } else {
          setState({...state, isNight: true,})
        }
      }

    useEffect(() => {
        setInterval(changeTime,1000);
        changeGreet();
    }, [])

    const {isNight, abbreviation,country,countryCode} = state;
    const {hour,minute} = timeState;

    return(

        <HourWrapper>
            <h3 className="greet-text"><img src={isNight? Sun:Moon} alt="Sun"/>GOOD {isNight? "MORNING" : "EVENING"}</h3>
            <span className="time">
                {hour<10? `0${hour}`:`${hour}`}:
                {minute<10? `0${minute}`:`${minute}`}
                
            </span>
            <h3 className="bst">{abbreviation}</h3>
            <h3 className="city">{country===undefined? "LOADING..." : `IN ${country}, ${countryCode}`}</h3>
        </HourWrapper>
    )
}

export default Hour;