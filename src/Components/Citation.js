
// packages
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
// img, svg
import RefreshCitation from '../assets/desktop/icon-refresh.svg';

const CitationWrapper = styled.div`
  margin:auto;
  margin-top:1em;
  margin-bottom:auto;
  position:relative;
  width:87%;
  height:fit-content;

  @media (min-width:700px) {
    left:-2em;
    width:75%;
    margin-top:3em;
    /* outline:green 2px solid; */
  }
    
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

    @media (min-width: 700px) {
      /* outline:3px solid red; */
      font-size:18px;
      line-height:28px;
      font-weight:400;
    }
    }
  
  .citation-author {
    font-weight:bold;
    color:#FFFFFF;
    font-size:12px;
    line-height:22px;

    @media (min-width: 700px) {
      font-size:18px;
      line-height:28px;
      font-weight:400;
    }
  }
`

const Citation = () => {

    const [state, setState] = useState({
      quoteText: "",
      quoteAuthor: "",
    });

    const fetchData = () => {
      const URLQuote = `https://my-cors-proxy-975.herokuapp.com/https://type.fit/api/quotes`;
  
      axios.get(URLQuote).then(quote=> {
          const index = Math.floor(Math.random()*quote.data.length);
          setState({
            ...state,
            quoteText: quote.data[index].text,
            quoteAuthor: quote.data[index].author,
          })
        }
      )
    }

    const handleCitationChange = () => {
      fetchData()
    }

    useEffect(() => {
      handleCitationChange()
    }, [])

    return(
        <CitationWrapper>
          <p className="citation-text">“{state.quoteText}”</p>
          <h4 className="citation-author">{state.quoteAuthor}</h4>
          <img onClick={handleCitationChange} src={RefreshCitation} alt="" />
        </CitationWrapper>
    )
}

export default Citation;