

import './css/App.css';
import Child from './Components/Use-Effect-Stretch/Child';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';

// Imports for routing
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Nav from './Components/011-Routing/Nav';
import Footer from './Components/011-Routing/Footer';
import Home from './Components/hamsters-project/Home';
import About from './Components/011-Routing/About';
import Shop from './Components/011-Routing/Shop';
import Bar from './Components/012-request-handling/Bar';
import Shopping from './Components/010-Hook-Ex/Shopping';
import Test from './Components/011-Routing/Test'

import Character_Creation from './Components/Game-Components/Character-Creation/Character_Creation';


function App() {


  const [introText, setIntroText] = useState("This is the intro text for the game");

  return (
    <div className="App">

     <Button onClick={() => {
       window.location="./Test";
       setIntroText("Tets");
     }}>buttom</Button>
    
    
    <BrowserRouter>

      {/* <Link to='./Test'>
          <Button> Test</Button>
        </Link> */}
      
      
      {/* <Nav/> */}

      <Routes>
        <Route path="./Game-Components/Character-Creation/Character-Creation.jsx" />
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Shop/:id" element={<Shop/>}/>
        <Route path="/Test" element={<Test/>}/>

      </Routes>

      {/* <Footer/> */}
    
    </BrowserRouter>



    {/* <BrowserRouter> */}

      {/* <Nav/> */}

      {/* <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes> */}

      {/* <Footer/> */}
    
    {/* </BrowserRouter> */}


  

    
      



    </div>
  );
}

export default App;
