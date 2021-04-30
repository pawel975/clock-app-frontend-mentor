import React,{useState,createContext,useEffect} from 'react';

export const ClockContext = createContext();

export const ClockProvider = props => {

    const URLGeo =  `https://freegeoip.app/json/`;
    const URLQuote = `https://my-cors-proxy-975.herokuapp.com/https://github.com/lukePeavey/quotable`;

    const [state, setState] = useState({
        quote: "",
        country: "",
        countryCode: "",
    })

    useEffect(() => (
    fetch(URLGeo).then(res=> res.json()).then(resultGeo=>(
        console.log(resultGeo),

        setState({
            ...state,
            country: resultGeo.country_name,
            countryCode: resultGeo.country_code,
        })
        ))
), [])
    useEffect(() => (
    fetch(URLQuote).then(res=> res.json()).then(resultQuote=>(
        console.log(resultQuote),
        console.log(URLQuote._id),
        setState({
            ...state,
            quote: resultQuote._id,
        })
        ))
), [])


    return(
        <ClockContext.Provider value={[state, setState]}>
            {props.children}
        </ClockContext.Provider>
    )
}