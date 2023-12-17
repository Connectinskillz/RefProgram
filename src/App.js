import React, {useState} from 'react';
import './App.css';
import Refinfo from './Popup/Refinfo';
import Banner from './components/Banner';
import Header from './components/Header';
import Payref from './components/Payref';
import RefCode from './components/RefCode';
import { MdCancel } from "react-icons/md";
import { IconContext } from 'react-icons';

function App() {
  const [cancel, setCancel] = useState(false)

  const close = () =>{
    setCancel(true);
  }
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className='infosec'>
        <RefCode />
        <Payref />
      </div>

     
       
      {cancel ? 
        null : 
        <div className='overlay'>     
        <IconContext.Provider value ={{color:"#004", size:"50px"}}>
          <button onClick={close} className='close-bt'>
            <MdCancel />
          </button>    
          </IconContext.Provider>
          <Refinfo />
        </div>

      }
    </div>
  );
}

export default App;
