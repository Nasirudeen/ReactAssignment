import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeProvider";
export default function Login() {
     const {theme, setTheme} = useContext(ThemeContext)
     function handlechange(ev) {
        setTheme(ev)
     }
    return (
        <div>
            <h1> Login Page</h1>
            <h1>{theme}</h1>
            <button onClick={(e) => handlechange('light')}>light</button>
            <button onClick={(e) => handlechange('dark')}>dark</button>
            <Link to={"/signin"} className='nav Link'>Sign in page</Link>
            <Link to={"/"} className='nav Link'>Home</Link>

        </div>
    )
}