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

@media (min-width:700px) {
    height:30%;
    padding:50px 0;
    align-items:center;
    /* outline:2px solid green; */
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
}

hr {
    display:none;
    @media (min-width:1280px) {
        display:block;
    z-index:1;
    position:absolute;
    transform:translate(-50%,50%);
    bottom:47%;
    border:none;
    border-left:1px #979797 solid ;
    left:50%;
    width:1px;
    height:80%;
    /* outline:2px solid red; */

    }
}
section {
    display:flex;
    justify-content:space-between;
    margin:0.5em 1.5em;

    @media (min-width:700px) {
        /* outline:2px solid red; */
        align-items:left;
        height:100px;
        margin-left:4em;
        justify-content:center;
        flex-direction:column;
    }

    div {
        /* outline:2px solid green; */
        font-size:10px;
        line-height:28px;
        letter-spacing:2px;

        @media (min-width:700px) {
            font-size:13px;
            line-height:40px;
            letter-spacing:2.6px;
        }
    }

    span {
        /* outline:2px solid green; */
        font-size:20px;
        line-height:28px;
        font-weight:bolder;

        @media (min-width:700px) {
            font-size:40px;
            letter-spacing:0;
            line-height:auto;
        }
    }
}
`

const Details = () => {

    const [state] = useContext(ClockContext);

    const {city,timeZone,dayOfTheYear,dayOfTheWeek,weekNumber} = state;

    return(
        <DetailsWrapper>
            <hr/>
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
