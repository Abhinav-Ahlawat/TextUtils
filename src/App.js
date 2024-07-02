import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#031f48'
    showAlert(" Dark mode has been enabled","success");
    document.title="TextUtils - Dark Mode"
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert(" Light mode has been enabled","success");
    document.title="TextUtils - Light Mode"
  }
  }

  return (
    <>
      {/* <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container">
      <h2>Hello {name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae nostrum est accusantium vero quo quos porro nam, odio iste sequi, obcaecati, doloremque eveniet voluptas enim aperiam consectetur voluptatem quisquam omnis nulla? Explicabo aliquid ipsam odio facere, qui doloribus eveniet placeat harum deleniti, asperiores quo.</p>

      </div> */}
<Router>    
<Navbar title="TextUtils " aboutText="About" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<div className="container" my-3>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} toggleMode={toggleMode} />}/>
          <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
