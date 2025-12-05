import React from 'react'

const LookingForCaptain = ({setLookingForPanel,fare,pickup,destination,vehicleType}) => {
  return (
    <div>
      <h5 className='p-3 text-xl absolute top-0 right-2' onClick={()=>{
          setLookingForPanel(false)
        }}><i className="ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-2xl font-semibold mb-5'>Looking for Captain🧑‍✈️</h2>

        <div className='flex gap-2 items-center flex-col justift-between'>
          <img className='h-35' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NWEwNTUzOC05MThiLTQyZDgtYWZlNy0zYzkyMzI1ZjJmZDQucG5n" alt="car" />
          <div className='w-full mt-5'>
              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>534-3454/ASDD</h2>
                  <p className='text-gray-500 text-sm -mt-1'>{pickup}</p>
                </div>
              </div>

              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>534-3454/ASDD</h2>
                  <p className='text-gray-500 text-sm -mt-1'>{destination}</p>
                </div>
              </div>

              <div className='flex items-center gap-5 p-3 '>
                <i className="ri-wallet-line"></i>
                <div>
                  <h2 className='text-lg font-medium'>₹{fare[vehicleType]}</h2>
                  <p className='text-gray-500 text-sm -mt-1'>Cash Cash</p>
                </div>
              </div>
          </div>

        </div>
        
    </div>
  )
}

export default LookingForCaptain