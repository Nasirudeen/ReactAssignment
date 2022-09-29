import { useState } from 'react'
import {Link} from 'react-router-dom'
// import DefaultLayout from "../Layout/DefaultLyout";
import {useContext} from  'react';
import { ThemeContext } from './Contexts/ThemeProvider';


function App() {
  

 const {theme, setTheme} = useContext(ThemeContext)

   const ChangeTheme = (value) => {
     setTheme(value)
   }

  return (
     <DefaultLayout>

    <div>
  <h1>login</h1>
  <h1>{theme}</h1>

    <button onClick={() => ChangeTheme("dark")}>Dark </button>
    <button onClick={() => ChangeTheme("light")}>Light </button>

  </div>
       </DefaultLayout>
  )
}


export default App
