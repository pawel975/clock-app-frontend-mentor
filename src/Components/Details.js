// packages
import { useContext } from 'react';
import styled from 'styled-components';
import { ClockContext } from './ClockContext';
// img, svg

const DetailsWrapper = styled.div`

background: rgba(255, 255, 255, 0.75);
backdrop-filter: blur(40.7742px);
opacity:0.98;
width:100vw;
height:39%;
display:flex;
flex-direction:column;
justify-content:center;

section {
    display:flex;
    justify-content:space-between;
    margin:0.5em 1.5em;

    div {
        /* outline:2px solid green; */
        font-size:10px;
        line-height:28px;
        letter-spacing:2px;
    }

    span {
        /* outline:2px solid green; */
        font-size:20px;
        line-height:28px;
        font-weight:bolder;
        color:#303030;
    }
}
`

const Details = () => {

    const [state, setState] = useContext(ClockContext);

    const {country,timeZone,dayOfTheYear,dayOfTheWeek,weekNumber} = state;

    const darkModeStyling = {
        color:"white",
        background: "rgba(0, 0, 0, 0.75)",
    }

    const darkModeSpan = {color:"white"}

    return(
        <DetailsWrapper style={!state.isNight && darkModeStyling}>
            <section>
                <div className="timezone">CURRENT TIMEZONE</div>
                <span style={!state.isNight? darkModeSpan:null}>{country===undefined? "LOADING..." : `${timeZone}`}</span>
            </section>
            <section>
                <div className="day-of-the-year">DAY OF THE YEAR</div>
                <span style={!state.isNight? darkModeSpan:null}>{country===undefined? "LOADING..." : `${dayOfTheYear}`}</span>
            </section>
            <section>
                <div className="day-of-the-week">DAY OF THE WEEK</div>
                <span style={!state.isNight? darkModeSpan:null}>{country===undefined? "LOADING..." : `${dayOfTheWeek}`}</span>
            </section>
            <section>
                <div className="week-number">WEEK NUMBER</div>
                <span style={!state.isNight? darkModeSpan:null}>{country===undefined? "LOADING..." : `${weekNumber}`}</span>
            </section>
        </DetailsWrapper>
    )
}

export default Details;
// style={{background: 
//     `${ state.isNight ?"rgba(255, 255, 255, 0.75)" : "rgba(0,0,0,0.75)" }` }}
