// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)
  const [theme, settheme] = useState("")
  // const [border, setborder] = useState(0)

  const showAlert = (type, message) => {
    setalert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggleDarkMode = () => {
    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor = "#253544"
      showAlert("success", "Dark Mode Enabled")
      settheme("")
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("success", "Light Mode Enabled")
      settheme("")
    }
  }

  const themeToggle = (color) => {
    settheme(color)
    if (color === "primary") {
      setmode("")
      document.getElementsByTagName('nav')[0].style.backgroundColor = "#052d6a";
      document.body.style.backgroundColor = "#113c79";
    }
    else if (color === "success") {
      setmode("")
      document.getElementsByTagName('nav')[0].style.backgroundColor = "#065f36";
      document.body.style.backgroundColor = "#076c3d"
    }
    else if (color === "warning") {
      setmode("")
      document.getElementsByTagName('nav')[0].style.backgroundColor = "#ffa504";
      document.body.style.backgroundColor = "#ffbb3e"
    }
    else if (color === "info") {
      setmode("")
      document.getElementsByTagName('nav')[0].style.backgroundColor = "darkcyan";
      document.body.style.backgroundColor = "#00a5a5"
    }
    else {
      toggleDarkMode()
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' home='Home' mode={mode} toggleMode={toggleDarkMode} themeColor={theme} themeToggle={themeToggle} showalert={showAlert} />
        <Alert alert={alert} />
        <TextForm heading='Enter Text Below to Analyze' mode={mode} showalert={showAlert} />
        {/* <About /> */}

          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
            <h2>This is Contact Page</h2>
            </Route>
            <Route path="/">
              <TextForm heading='Enter Text Below to Analyze' mode={mode} showalert={showAlert} />
            </Route>
          </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
