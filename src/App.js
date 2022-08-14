// import About from './About';
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import Switch from  "react-router-dom";
// import {
//   BrowserRouter as Router,
//  Switch,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] =useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
    
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils - Dark Mode';

      // setInterval(()=>{
      //   document.title ='TextUtils is Amazig Mode';
      // },2000);
      // setInterval(()=>{
      //   document.title ='Install TextUtils now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
    {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}></Route> */}
          {/* <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> }></Route> */}
    {/* </Routes> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
</div>
{/* </Router> */}
    </>
  );
}

export default App;
