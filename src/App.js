import './App.css';
import Alert from './componenets/Alert';
import Navbar from './componenets/Navbar';
import About from './componenets/About';
import TextForm from './componenets/TextForm';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);

  // const showAlert =  (message, type)=>{
  //   setAlert({ 
  //     msg: message,
  //     type: type
  //   })
  // }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // showAlert("Light mode is enabled", "success");
    }
  }
    return (
   <>
   <Router>
        <Navbar title="TextS1" AboutTextS="AboutTextS" mode={mode} toggleMode={toggleMode}/>
        <Alert alert="This is Alert"/>
        <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<TextForm TextForm="Enter The Text To Analyze Below" mode={mode}/>}>
          </Route>
        </Routes>
        </div>
        </Router>  
   </>
    );  
  }


export default App;