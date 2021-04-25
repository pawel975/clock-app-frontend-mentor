// packages
import styled from 'styled-components';
// img, svg


const DetailsWrapper = styled.div`

background: rgba(255, 255, 255, 0.75);
backdrop-filter: blur(40.7742px);
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
    return(
        <DetailsWrapper>
            <section>
                <div className="timezone">CURRENT TIMEZONE</div>
                <span>Europe/London</span>
            </section>
            <section>
                <div className="day-of-the-year">DAY OF THE YEAR</div>
                <span>295</span>
            </section>
            <section>
                <div className="day-of-the-week">DAY OF THE WEEK</div>
                <span>5</span>
            </section>
            <section>
                <div className="week-number">WEEK NUMBER</div>
                <span>42</span>
            </section>
        </DetailsWrapper>
    )
}

export default Details;