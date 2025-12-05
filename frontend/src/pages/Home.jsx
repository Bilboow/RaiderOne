import React, { useContext, useEffect, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import WaitForCaptain from '../components/WaitForCaptain';
import LookingForCaptain from '../components/LookingForCaptain';
import axios from 'axios';
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/Livetracking';

const Home = () => {

  const [pickup,setPickup] = useState('');
  const [destination,setDestination] = useState('');
  const [panelOpen,setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelClosedRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const lookingForPanelRef = useRef(null);
  const waitForPanelRef = useRef(null);
  const [vehiclePanel,setVehiclePanel] = useState(false);
  const [confirmRidePanel,setConfirmRidePanel] = useState(false);
  const [lookingForPanel,setLookingForPanel] = useState(false)
  const [waitForPanel,setWaitForPanel] = useState(false);
  const [pickupSuggestions,setPickupSuggestions] = useState([]);
  const [destinationSuggestions,setDestinationSuggestions] = useState([]);
  const [activeField,setActiveField] = useState(null);
  const [fare,setFare] = useState({});
  const [vehicleType,setVehicleType] = useState(null);
  const [ride,setRide] = useState(null);

  const {socket} = useContext(SocketContext);
  const {user} = useContext(UserDataContext);

  const navigate = useNavigate()

  // give pickup location suggestion in search......
  const handlePickupChange = async (e) => {
  setPickup(e.target.value);

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
      {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    setPickupSuggestions(response.data);

  } catch (error) {
    console.error("Suggestion Fetch Error:", error);
  }
};

//give destination location suggestion in search....
const handleDestinationChange = async(e)=>{
  setDestination(e.target.value);

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
      {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    setDestinationSuggestions(response.data);

  } catch (error) {
    console.error("Suggestion Fetch Error:", error);
  } 
}

useEffect(()=>{
  socket.emit("join",{userType:"user",userId:user._id})
},[user]);

useEffect(() => {
  if (!socket) return;

  const handleRideConfirmed = (ride) => {
    setRide(ride);
    setVehiclePanel(false);
    setWaitForPanel(true);
    setLookingForPanel(false);

  };

  socket.on("ride-confirmed", handleRideConfirmed);

  return () => {
    socket.off("ride-confirmed", handleRideConfirmed);
  };
}, [socket]);

  socket.on('ride-started',ride=>{
    setWaitForPanel(false);
    navigate('/riding',{state:{ride}})
  })

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
        gsap.to(panelRef.current,{
          height:'70%',
          padding:24
        }) 
        gsap.to(panelClosedRef.current,{
          opacity:1
        })
    }else{
      gsap.to(panelRef.current,{
        height:'0',
        padding:0
      })
      gsap.to(panelClosedRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function () {
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehiclePanel]);

  useGSAP(function () {
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[confirmRidePanel]);

  useGSAP(function () {
    if(lookingForPanel){
      gsap.to(lookingForPanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(lookingForPanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[lookingForPanel]);

  useGSAP(function () {
    if(waitForPanel){
      gsap.to(waitForPanelRef.current,{
        transform:"translateY(0)"
      })
    }else{
      gsap.to(waitForPanelRef.current,{
        transform:"translateY(100%)"
      })
    }
  },[waitForPanel]);

  //this give the fare amount for different vehicles....
  async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setFare(response.data)
  }

  //this give the ride info like pickup destinaion vehicletype
  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`,{
          pickup,
          destination,
          vehicleType
        },{
          headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })

        console.log(response.data)
  }


  return (
    <div className='h-screen relative overflow-hidden'>
      <h1 className='absolute text-base font-extrabold m-1 z-20'>RaiderOne</h1>

      {/*<Link to='/user/logout' className='fixed h-7 w-7 bg-white rounded-full flex items-center justify-center m-1 top-2 right-2'>
          <i className="text-lg font-bold ri-logout-box-r-line"></i> ///.....logout
      </Link>*/}

      <div className='absolute top-0 left-0 w-full h-full z-0'>
        {/*image map for tempoary used*/}
        <LiveTracking/>
      </div>

       {/* Find trip panel */} 
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
          <div className='flex flex-col justify-end h-screen w-full pointer-events-auto'>

          <div className='h-[30%] p-6 bg-white rounded-md relative'>
            {/* closing down button */}
            <h5 ref={panelClosedRef}
            className='absolute top-3 right-3 text-xl' 
            onClick={()=>setPanelOpen(false)}>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>

            <h4 className='text-2xl font-semibold'>Find a trip</h4>
            {/* input fields */}
            <form onSubmit={(e)=>submitHandler(e)} >
              <div className='line absolute h-16 w-1 top-[38%] left-10 bg-gray-900 rounded-full'></div>
              {/* pickup location input */}
              <input 
              className='bg-[#eee] px-12 py-2 rounded-lg text-lg w-full mt-5' 
              type="text" 
              placeholder='Add a pick-up location' 
              value={pickup}
              onChange={handlePickupChange}
              onClick={()=>{
                setPanelOpen(true);
                setActiveField('pickup')
              }}
              />
              {/* destination location input */}
              <input 
              className='bg-[#eee] px-12 py-2 rounded-lg text-lg w-full mt-3' 
              type="text" 
              placeholder='Enter your destination'
              value={destination}
              onChange={handleDestinationChange}
              onClick={()=>{
                setPanelOpen(true)
                setActiveField('destination')
              }}
              />
            </form>
            {/* button for find trip to confirm it => VehiclePanel */}
            <button className='bg-black text-white px-4 py-2 rounded-xl w-full mt-7'
            onClick={findTrip}
            >
              Find Trip
            </button>
          </div>

          <div className='h-[70%] bg-white rounded-md ' ref={panelRef}>
              <LocationSearchPanel 
              setPanelOpen={setPanelOpen} 
              setVehiclePanel={setVehiclePanel} 
              suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
              setPickup={setPickup}
              setDestination={setDestination}
              activeField={activeField}
              />
          </div>
        </div>
        
        {/* vehicle info like => fare */} 
        <div className='fixed bottom-0 w-full translate-y-full px-3 py-10 bg-white rounded-lg pointer-events-auto' ref={vehiclePanelRef} >
            <VehiclePanel 
            setVehiclePanel={setVehiclePanel} 
            setConfirmRidePanel={setConfirmRidePanel} 
            fare={fare}
            selectVehicle={setVehicleType}
            />
        </div>

        {/* ride confirmation panel */}
        <div className='fixed bottom-0 w-full translate-y-full px-3 py-6 bg-white rounded-lg pointer-events-auto' ref={confirmRidePanelRef} >
            <ConfirmRide 
            createRide={createRide}
            pickup={pickup}
            destination={destination}
            fare={fare}
            vehicleType={vehicleType}
            setConfirmRidePanel={setConfirmRidePanel} 
            setLookingForPanel={setLookingForPanel} 
            />
        </div>

        {/* looking for driver panel... */}      
        <div className='fixed bottom-0 w-full translate-y-full px-3 py-6 bg-white rounded-lg pointer-events-auto' ref={lookingForPanelRef} >
            <LookingForCaptain
            createRide={createRide} 
            setLookingForPanel={setLookingForPanel} 
            setWaitForPanel={setWaitForPanel} 
            pickup={pickup}
            destination={destination}
            fare={fare}
            vehicleType={vehicleType}
            />
        </div>

        <div className='fixed bottom-0 w-full translate-y-full px-3 py-6 bg-white rounded-lg pointer-events-auto' ref={waitForPanelRef}>
            <WaitForCaptain 
            ride={ride}
            setWaitForPanel={setWaitForPanel} />
        </div>
      </div>       
    </div>
  )
}

export default Home