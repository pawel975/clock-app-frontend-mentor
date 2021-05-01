// packages
import { useContext } from 'react';
import styled from 'styled-components';
// img, svg
import RefreshCitation from '../assets/desktop/icon-refresh.svg';
import { ClockContext } from './ClockContext';

const CitationWrapper = styled.div`
  margin:auto;
  margin-top:1em;
  margin-bottom:auto;
  position:relative;
  width:87%;
  height:fit-content;
    
  img {
    position:absolute;
    top:12px;
    right:0;
  }

  .citation-text {
    margin-right:auto;
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

    const handleCitationChange = () => {

      setState({
        ...state,
        randomCitation: !state.randomCitation,
      })
    }

    return(
        <CitationWrapper>
          <p className="citation-text">“{state.quoteText}”</p>
          <h4 className="citation-author">{state.quoteAuthor}</h4>
          <img onClick={handleCitationChange} src={RefreshCitation} alt="" />
        </CitationWrapper>
    )
}

export default Citation;