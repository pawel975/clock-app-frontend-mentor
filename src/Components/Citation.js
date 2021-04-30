// packages
import { useContext } from 'react';
import styled from 'styled-components';
// img, svg
import RefreshCitation from '../assets/desktop/icon-refresh.svg';
import { ClockContext } from './ClockContext';

const CitationWrapper = styled.div`

    /* outline:2px solid black; */
    margin:auto;
    margin-top:1em;
    margin-bottom:auto;
    position:relative;
    width:87%;
    height:fit-content;
    
    &:after {
        position:absolute;
        content:url(${RefreshCitation});
        top:12px;
        right:0;
    }

    .citation-text {
    padding:0;
    width:90%;
    color:#FFFFFF;
    font-size:12px;
    line-height:22px;
    }
  
  .citation-author {
    font-weight:bold;
    color:#FFFFFF;
    font-size:12px;
    line-height:22px;
  }
`

const Citation = () => {

    const [state, setState] = useContext(ClockContext);

    return(
        <CitationWrapper>
          <p className="citation-text">“{state.quote}”</p>
          <h4 className="citation-author">Ada Lovelace</h4>
        </CitationWrapper>
    )
}

export default Citation;