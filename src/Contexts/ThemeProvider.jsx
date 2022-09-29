import {createContext, useState} from 'react';

const ThemeContext = createContext(null);// context
export {ThemeContext};

// composite component
const  ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
  //  const [product, setProduct] = useState('light')

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
        </ThemeContext.Provider>
        
    )
}
export default ThemeProvider;

