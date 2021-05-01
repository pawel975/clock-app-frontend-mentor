import React,{useState,createContext} from 'react';

export const ClockContext = createContext();

export const ClockProvider = props => {

    const [state, setState] = useState({
        isNight:true,
        randomCitation: false,
        quoteText: "",
        quoteAuthor: "",
        country: "",
        countryCode: "",
    })

    return(
        <ClockContext.Provider value={[state, setState]}>
            {props.children}
        </ClockContext.Provider>
    )
}