import React from 'react'

const RidePopUp = ({setRidePopupPanel,setConfirmRidePopupPanel,ride,confirmRide}) => {
  return (
    <div>
        <h5 className='p-3 text-xl absolute top-0 right-2' onClick={()=>{
            setRidePopupPanel(false)
        }}><i className="ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-2xl font-semibold mb-5'>New Ride Available!</h2>

        <div className='flex items-center justify-between mt-4 p-3 rounded-lg bg-orange-300'>
            <div className='flex items-center gap-3 '>
                <img className='h-13 w-13 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlI6xULlQNl5BDeL9i9xCPotiF3zJz4_Tbw&s" alt="person1" />
                <h2 className='text-lg font-medium'>{ride?.user.fullname.firstname+" "+ride?.user.fullname.lastname}</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.5 KM</h5>
        </div>

        <div className='flex gap-2 items-center flex-col justift-between'>
          <div className='w-full mt-5'>
              <div className='flex items-center gap-5 p-3 border-b-1 border-gray-200'>
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                  <h2 className='text-lg font-medium'>PickUp</h2>
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
          <div className='flex items-center justify-between w-full'>
            <button onClick={()=>{setConfirmRidePopupPanel(true)
              confirmRide()
            }} className='w-full m-5 bg-green-600 text-white font-semibold rounded-lg px-1 py-2'>Accept</button>
            <button onClick={()=>{setRidePopupPanel(false)}} className='w-full m-5 bg-gray-400 text-gray-700 font-semibold rounded-lg px-1 py-2'>Ignore</button>
          </div>  
        </div>
    </div>
  )
}

export default RidePopUp