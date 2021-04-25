// packages
import styled from 'styled-components';
// img, svg
import Sun from '../assets/desktop/icon-sun.svg';

const HourWrapper = styled.div`
* {
margin:0;
}
margin:1.5em;
width:85%;
/* outline:2px solid green; */
display:grid;
height:185px;
grid-template-columns: 87% 1fr;
grid-template-rows: 30px 60% 1fr;
grid-template-areas:
"greet-text greet-text"
"time bst"
"city city"
;

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

    &:before {
        margin:auto 0;  
        margin-right:1em;
        height:24px; 
        /* outline:2px solid green; */
        content: url(${Sun});
    }
}

.time {
    grid-area: time;
    /* outline:2px solid green; */
    font-size:100px;
    color:#FFFFFF;
    font-weight:900;
    line-height:100px;
    letter-spacing:-2.5px;
    align-self:end;
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
    return(
        <HourWrapper>
            <h3 className="greet-text">GOOD MORNING</h3>
            <span className="time">11:37</span>
            <h3 className="bst">BST</h3>
            <h3 className="city">IN LONDON, UK</h3>
        </HourWrapper>
    )
}

export default Hour;