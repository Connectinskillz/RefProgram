import React, {useEffect, useState} from 'react'
import Refinfo from '../Popup/Refinfo';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Payref from '../components/Payref';
import RefCode from '../components/RefCode';
import axios from 'axios';
import './dash.css'


const BASE_URL = 'https://backend.connectinskillz.com/api/fetch_user_details/fasanyafemi%40gmail.com'

const Dashboard = () => {
    const [cancel, setCancel] = useState(false)
  const [ref, setRef] = useState()

  const closePopup = () =>{
    setCancel(!cancel);
    console.log("what the hell")
  }

  const handleResponse = async () =>{
    try{
      const response =await axios(BASE_URL)
    console.log(response)
    }catch(error){
      console.log(error.response)
    }
  }

    useEffect(()=> {
      handleResponse();
    }, [])
  return (
    <div className='Dashboard'>
        <Header />
        <Banner  onDisp = {closePopup}/>
        <div className='infosec'>
        <RefCode />
        <Payref />
        </div>       
        {cancel ? 
        null : 
        <div className='overlay'>     
            <Refinfo  onclick = {closePopup}/>
        </div>
        }
    </div>
  )
}

export default Dashboard