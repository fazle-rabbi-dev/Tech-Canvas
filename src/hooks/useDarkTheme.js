import { useState, useEffect } from 'react'

export const isDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

function useDarkTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  
  const toggleDarkTheme = () => {
    setDarkTheme((prev) => !prev);
    if (darkTheme) {
      document.querySelector("html").classList.remove("dark");
      localStorage.removeItem("darkTheme");
    } else {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("darkTheme", JSON.stringify(true));
    }
  };
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      /* if system has dark mode enabled */
      if(mediaQuery.matches){
        setDarkTheme(true)
        document.querySelector("html").classList.add("dark");
      }else{
        setDarkTheme(false)
        document.querySelector("html").classList.remove("dark");
      }
    };
    
    /* 
      Listener For System Dark Mode Toggle; 
    */
    mediaQuery.addEventListener('change', handleChange)
    
    /* 
      When System Has Dark Mode Enabled 
      The Bellow Logic Will Set DarkTheme true
    */
    if(isDarkMode()){
      setDarkTheme(true);
      document.querySelector("html").classList.add("dark");
      return;
    }
    
    /* When system dark mode off; it will check localStorage to find user saved theme */
    if (localStorage.getItem("darkTheme")) {
      setDarkTheme(true);
      document.querySelector("html").classList.add("dark");
    }
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return { darkTheme, toggleDarkTheme }
}

export default useDarkTheme
