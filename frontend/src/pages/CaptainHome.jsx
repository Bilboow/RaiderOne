import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { SocketContext } from '../context/SocketContext'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';
import LiveTracking from '../components/Livetracking'

const CaptainHome = () => {

  const [ridePopupPanel,setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel,setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);
  const {socket} = useContext(SocketContext);
  const {captain} = useContext(CaptainDataContext);
  const [ride,setRide] = useState(null);

  useEffect(()=>{
    socket.emit("join",{userType:"captain",userId:captain._id});

    const updatelocation =()=>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          
          /*console.log({userId:captain._id,
            location:{
              ltd:position.coords.latitude,
              lng:position.coords.longitude
            }})*/

          socket.emit('update-location-captain',{
            userId:captain._id,
            location:{
              ltd:position.coords.latitude,
              lng:position.coords.longitude
            }
          })
        })
      }

    }

    const locationInterval = setInterval(updatelocation, 10000);
    updatelocation();

    return ()=>clearInterval(locationInterval);

  },[captain])

  socket.on('new-ride',(data)=>{
    console.log(data);
    setRide(data);
    setRidePopupPanel(true);
  })

  async function confirmRide(){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
      rideId:ride._id,
      captainId:captain._id,
    },{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setRidePopupPanel(false)
    setConfirmRidePopupPanel(true)
  }

  useGSAP(function () {
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[ridePopupPanel]);

  useGSAP(function () {
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[confirmRidePopupPanel]);

  return (
    <div className='h-screen relative overflow-hidden'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-full z-20'>
            <h1 className='text-xl font-extrabold m-1'>Captain Raider</h1>
            <Link to='/captain/logout' className='h-7 w-7 bg-white rounded-full flex items-center justify-center m-1'>
                <i className="text-lg font-bold ri-logout-box-r-line"></i>
            </Link>
        </div>

        <div className='relative h-3/5 z-0'>
            {/*image map for tempoary used*/}
            <LiveTracking/>
        </div>
        <div className='h-2/5 p-6 z-10 relative bg-white'>
            <CaptainDetails/>
        </div> 
        <div ref={ridePopupPanelRef} className='fixed w-full bottom-0 z-30 translate-y-full px-3 py-6 pt-12 bg-white rounded-lg'>
            <RidePopUp 
            ride={ride}
            setRidePopupPanel={setRidePopupPanel} 
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
            confirmRide={confirmRide} />
        </div>
        <div ref={confirmRidePopupPanelRef} className='fixed w-full bottom-0 z-40 translate-y-full px-3 py-6 pt-12 bg-white rounded-lg'>
            <ConfirmRidePopUp
            ride={ride} 
            setConfirmRidePopupPanel={setConfirmRidePopupPanel} 
            setRidePopupPanel={setRidePopupPanel} />
        </div> 
    </div>
  )
}

export default CaptainHome