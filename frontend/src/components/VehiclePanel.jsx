import React from 'react'

function VehiclePanel({setVehiclePanel,setConfirmRidePanel,fare,selectVehicle}) {
  return (
    <div>
        {/* closing button for panel */}
        <h5 className='p-3 text-xl absolute top-0 right-2' onClick={()=>{
          setVehiclePanel(false)
        }}><i className="ri-arrow-down-wide-line"></i></h5>

        <h2 className='text-2xl font-semibold mb-5'>Choose your ride</h2>
        {/* car info */}
        <div onClick={()=>{
          setConfirmRidePanel(true)
          selectVehicle('car')
        }} className='flex w-full p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl items-center justify-between'>
          <img className='h-15' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NWEwNTUzOC05MThiLTQyZDgtYWZlNy0zYzkyMzI1ZjJmZDQucG5n" alt="car" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-base'>RaiderGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹{fare.car}</h2>
        </div>

        {/* motorcycle info */}
        <div onClick={()=>{
          setConfirmRidePanel(true)
          selectVehicle('motorcycle')
        }} className='flex w-full p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl items-center justify-between'>
          <img className='h-15' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n" alt="motocycle" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-base'>RaiderBike <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹{fare.motorcycle}</h2>
        </div>

        {/* auto info */}
        <div onClick={()=>{
          setConfirmRidePanel(true)
          selectVehicle('auto')
        }} className='flex w-full p-3 border-2 border-gray-100 mb-2 active:border-black rounded-xl items-center justify-between'>
          <img className='h-15' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n" alt="auto" />
          <div className='w-1/2 ml-2'>
            <h4 className='font-medium text-base'>RaiderAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>₹{fare.auto}</h2>
        </div>
    </div>
  )
}

export default VehiclePanel