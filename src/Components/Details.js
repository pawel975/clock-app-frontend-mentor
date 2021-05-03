// packages
import { useContext } from 'react';
import styled from 'styled-components';
import { ClockContext } from './ClockContext';
// img, svg

const DetailsWrapper = styled.div`

background: ${props => props.theme.backgroundColor} ;
backdrop-filter: blur(40.7742px);
opacity:0.98;
width:100vw;
height:39%;
display:flex;
flex-direction:column;
justify-content:center;
color:${props=> props.theme.fontColor};

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
    }
}
`

const Details = () => {

    const [state, setState] = useContext(ClockContext);

    const {city,timeZone,dayOfTheYear,dayOfTheWeek,weekNumber} = state;

    return(
        <DetailsWrapper>
            <section>
                <div className="timezone">CURRENT TIMEZONE</div>
                <span>{city===undefined? "LOADING..." : `${timeZone}`}</span>
            </section>
            <section>
                <div className="day-of-the-year">DAY OF THE YEAR</div>
                <span>{city===undefined? "LOADING..." : `${dayOfTheYear}`}</span>
            </section>
            <section>
                <div className="day-of-the-week">DAY OF THE WEEK</div>
                <span>{city===undefined? "LOADING..." : `${dayOfTheWeek}`}</span>
            </section>
            <section>
                <div className="week-number">WEEK NUMBER</div>
                <span>{city===undefined? "LOADING..." : `${weekNumber}`}</span>
            </section>
        </DetailsWrapper>
    )
}

export default Details;
// style={{background: 
//     `${ state.isNight ?"rgba(255, 255, 255, 0.75)" : "rgba(0,0,0,0.75)" }` }}
