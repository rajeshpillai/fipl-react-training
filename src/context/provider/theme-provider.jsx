import {useState} from "react";
import ThemeContext from "../theme-context";

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState("theme1");

  const handleChange = (e) => {
    setTheme(e.target.value);
  }
  return (
    <ThemeContext.Provider value = {theme}>
      <select onChange={handleChange}>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
      </select>
      
      {children}
    </ThemeContext.Provider>
  )
}