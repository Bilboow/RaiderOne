import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import LiveTracking from '../components/Livetracking';

const CaptainRiding = () => {

    const [finishRidePanel,setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);
    const location = useLocation();
    const rideData = location.state?.ride

   useLayoutEffect(() => {
    gsap.set(finishRidePanelRef.current, { y: "100%" });
  }, []);

  // Animation when state changes
  useEffect(() => {
    gsap.to(finishRidePanelRef.current, {
      y: finishRidePanel ? "0%" : "100%",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [finishRidePanel]);

  return (
    <div className='h-screen relative'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen z-20'>
            <h1 className='text-xl font-extrabold m-1'>Captain Raider</h1>
            <Link to='/captain/logout' className='h-7 w-7 bg-white rounded-full flex items-center justify-center m-1'>
                <i className="text-lg font-bold ri-logout-box-r-line"></i>
            </Link>
        </div>

        <div className='h-4/5 relative z-0'>
            {/*image map for tempoary used*/}
            <LiveTracking/>
        </div>
        <div onClick={()=>setFinishRidePanel(true)} className='h-1/5 p-6 bg-yellow-400 flex items-center relative justify-between z-20 cursor-pointer'>
            <h5 className='p-3 text-xl absolute top-0 right-2' onClick={()=>{
            }}><i className="ri-arrow-up-wide-line"></i></h5>
            <h4 className='text-xl font-semibold'>4 KM away</h4>
            <button className='bg-green-500 text-white font-semibold rounded-lg p-3 px-10'>Complete Ride</button>
        </div> 
        <div ref={finishRidePanelRef} className='fixed w-full h-screen z-50 bottom-0 px-3 py-6 pt-12 bg-white rounded-lg'>
            <FinishRide 
            rideData = {rideData}
            setFinishRidePanel={setFinishRidePanel}/>
        </div>
        
    </div>
  )
}

export default CaptainRiding