import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeToggler() {
    const{theme, setTheme} = useContext(ThemeContext);
  return (
    <div className="theme-toggle"  >
        <button className={ !theme ? "toggle-btn" : "toggle-btn selected "} aria-label="Light theme" onClick={() => setTheme(true)}> 
          {
              theme ? "" : <i className="fa-solid fa-sun"></i>
          }
        </button>
        <button className={ !theme ? "toggle-btn selected" : "toggle-btn "} aria-label="Dark theme" onClick={() => setTheme(false)}> 
          {
            theme ? <i className="fa-solid fa-moon"></i> : ""
          }
        </button>
    </div>
  )
}
export default ThemeToggler
    
