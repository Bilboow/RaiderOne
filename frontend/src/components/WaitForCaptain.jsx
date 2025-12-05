import React from 'react'

const WaitForCaptain = ({setWaitForPanel,ride}) => {
  return (
    <div>
      <h5 className='p-3 text-xl absolute top-0 right-2' onClick={()=>{
          setWaitForPanel(false)
        }}><i className="ri-arrow-down-wide-line"></i></h5>
        
        <div className='flex items-center justify-between'>
            <img className='h-18 ' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NWEwNTUzOC05MThiLTQyZDgtYWZlNy0zYzkyMzI1ZjJmZDQucG5n" alt="car" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>{ride?.captain.fullname.firstname}</h2>
                <h4 className='text-xl font-semibold -mt-2 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                <h1 className='text-lg font-semibold mt-2 -mb-1'>OTP: {ride?.otp}</h1>
            </div>
        </div>

        <div className='flex gap-2 items-center flex-col justift-between'>
          <div className='w-full mt-5'>
              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>Pickup</h2>
                  <p className='text-gray-500 text-sm -mt-1'>{ride?.pickup}</p>
                </div>
              </div>

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
        
    </div>
  )
}

export default WaitForCaptain