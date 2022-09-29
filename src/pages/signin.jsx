import {Link } from "react-router-dom";
export default function Signin(){

 return(
    <div>
<h1> Singin Page</h1>
<Link to={"/login"} className='nav Link'>Login</Link>
<Link to={"/"} className='nav Link'>Home</Link>

    </div>
 )
}

