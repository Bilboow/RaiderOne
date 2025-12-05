import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext';
import LiveTracking from '../components/Livetracking';

const Riding = () => {
  const location = useLocation();
  const {ride} = location.state || {};
  const {socket} = useContext(SocketContext);
  const navigate = useNavigate();

  socket.on('ride-ended',()=>{
    navigate('/home')
  })

  return (
    <div className='h-screen relative overflow-hidden'>
        <Link to='/home' className='fixed z-20 h-7 w-7 bg-white rounded-full flex items-center justify-center m-1 top-2 right-2'>
            <i className="text-lg font-bold ri-home-9-fill "></i>
        </Link>
        <div className='absolute top-0 left-0 w-full h-1/2 z-0'>
            {/*image map for tempoary used*/}
            <LiveTracking/>
        </div>
        <div className='absolute bottom-0 left-0 w-full h-1/2 z-10 bg-white p-4 rounded-t-2xl'>
            <div className='flex items-center justify-between'>
            <img className='h-18 ' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NWEwNTUzOC05MThiLTQyZDgtYWZlNy0zYzkyMzI1ZjJmZDQucG5n" alt="car" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>{ride?.captain.fullname.firstname+" "+ride?.captain.fullname.lastname}</h2>
                <h4 className='text-xl font-semibold -mt-2 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            </div>
        </div>

        <div className='flex gap-2 items-center flex-col justift-between'>
          <div className='w-full mt-5'>
              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>Destination</h2>
                  <p className='text-gray-500 text-sm -mt-1'>{ride?.destination}</p>
                </div>
              </div>

              <div className='flex items-center gap-5 p-3 '>
                <i className="ri-wallet-line"></i>
                <div>
                  <h2 className='text-lg font-medium'>₹{ride?.fare}</h2>
                  <p className='text-gray-500 text-sm -mt-1'>Cash Cash</p>
                </div>
              </div>
          </div>

        </div>
            
            <button className='bg-green-600 text-white p-2 w-full rounded-xl mt-5'>Make a Payment</button>
        </div>

    </div>
  )
}

export default Riding