import Navbar from './components/Navbar';
import './App.css';
import {useState} from 'react';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
  // import {
  //   BrowserRouter as Router,
  //   Switch,
  //   Route,
  //   Link
  // } from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const ToggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#343434';
      document.body.style.color ='white';
      showAlert("Dark mode has been  enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      document.body.style.color ='black';
      showAlert("Light mode has been enabled","success");
    }
  }


  return ( 

  <>
  {/* <Router> */}
   <Navbar title="TextUtils" aboutText="About" mode={mode} ToggleMode={ToggleMode} />
   <Alert alert={alert} />
   <div class="container my-3 ">
   {/* <Switch> */}
          {/* <Route exact path="/about">
            <About mode={mode} />
          </Route>
  
          <Route exact path="/"> */}
           <TextForm heading="Enter Your Text to Analyse" showAlert={showAlert} mode={mode} />
          {/* </Route>
   </Switch> */}

   </div>

  {/* </Router> */}
  </>

       );
}

export default App;
