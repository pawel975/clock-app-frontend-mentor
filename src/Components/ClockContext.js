import React,{useState, createContext} from 'react';

export const ClockContext = createContext();
export const ToggleThemeContext = createContext()

export const ClockProvider = props => {

    const [state, setState] = useState({
        city: "",
        countryCode: "",
        timeZone: "",
        dayOfTheYear: null,
        dayOfTheWeek: null,
        weekNumber: null,
        abbreviation: "",

    })

    const [theme, setTheme] = useState("light");

    return(
        <ClockContext.Provider value={[state, setState]}>
            <ToggleThemeContext.Provider value={[theme, setTheme]}>
                {props.children}
            </ToggleThemeContext.Provider>
        </ClockContext.Provider>
    )
}
