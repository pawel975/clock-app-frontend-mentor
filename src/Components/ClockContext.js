import React,{useState,createContext} from 'react';

export const ClockContext = createContext();

export const ClockProvider = props => {

    const [state, setState] = useState({
        isNight:null,
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

export const TimeContext = createContext();

export const TimeProvider = props => {

    const [timeState, setTimeState] = useState({
        hour: null,
        minute:null,
    })

    return <TimeContext.Provider value={[timeState,setTimeState]}>
        {props.children}
    </TimeContext.Provider>
}