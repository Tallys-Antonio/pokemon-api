import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import './button-dark-mode.css'

export const ButtonDarkMode = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <label tabIndex="0" className="switch">
            <input type="checkbox" id="input" onChange={() => setTheme(theme === themes.dark ? themes.ligth : themes.dark)}/>
            <span className="slider"></span>
            <span className="icon sun">🌞</span>
            <span className="icon moon">🌜</span>
        </label>
    )
}
