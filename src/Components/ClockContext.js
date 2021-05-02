import React,{useState,createContext} from 'react';

export const ClockContext = createContext();

export const ClockProvider = props => {

    const [state, setState] = useState({
        isNight:false,
        // randomCitation: false,
        // quoteText: "",
        // quoteAuthor: "",
        country: "",
        countryCode: "",
        timeZone: "",
        dayOfTheYear: null,
        dayOfTheWeek: null,
        weekNumber: null,

    })

    return(
        <ClockContext.Provider value={[state, setState]}>
            {props.children}
        </ClockContext.Provider>
    )
}