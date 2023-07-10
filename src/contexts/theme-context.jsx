import { createContext, useState } from "react";

export const themes = {
    ligth: {
        color: '#373737',
        background: '#f7d794',
        backgroundCard: '#e4e4c6',
        borderCard: '#FF6F00',
        borderSkill: '#3E2723',
        backgroundSkill: '#F57F17',
    },
    dark: {
        color: '#fac705',
        background: '#001d3a',
        backgroundCard: '#052c4a',
        borderCard: '#fac705',
        borderSkill: '#ffd41f',
        backgroundSkill: '#1e272e',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props => {

    const [ theme , setTheme ] = useState(themes.ligth)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
})