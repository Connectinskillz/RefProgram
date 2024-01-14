import React, {useEffect, useState} from 'react'
import Refinfo from '../Popup/Refinfo';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Payref from '../components/Payref';
import RefCode from '../components/RefCode';
import axios from 'axios';
import './dash.css'


const BASE_URL = 'https://backend.connectinskillz.com/api/fetch_user_details/ridwanfolayimi@gmail.com'

const Dashboard = () => {
// State to manage User's fetched data
  const [name, setName ] = useState('')
  const [refCodes, setRefCodes] = useState("")
  const [refNo, setRefNo] = useState("")
 
  const [cancel, setCancel] = useState(false)
  // const [ref, setRef] = useState()

  const closePopup = () =>{
    setCancel(!cancel);
  }

  const handleResponse = async () =>{
    try{
      const response =await axios(BASE_URL)
    setName(response.data.data.user["name"])
    setRefCodes(response.data.data.user['referral_code'])
    setRefNo(response.data.data['total_referred_users'])
    console.log(response.data)

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
        <Banner  onDisp = {closePopup} userName= {name}/>
        <div className='infosec'>
          <RefCode refcodes = {refCodes}/>
          <Payref refNo = {refNo}/>
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