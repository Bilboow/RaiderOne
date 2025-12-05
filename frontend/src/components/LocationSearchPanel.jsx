import React from 'react'

const LocationSearchPanel = ({setPanelOpen,setVehiclePanel,suggestions,setPickup,setDestination,activeField}) => {
  //sample locaion array
  const handleSuggestionClick = (suggestions)=>{
    if(activeField === 'pickup'){
      setPickup(suggestions)
    }else if(activeField === 'destination'){
      setDestination(suggestions)
    }
  }


  return (
    <div>
      {/* sample data */}
      {suggestions.map(function(ele,i){
        return <div key={i} onClick={()=>handleSuggestionClick(ele)}
        className='flex items-center justify-start gap-4 my-2 border-2 p-3 rounded-xl border-white active:border-black'>
                  <h2 className='bg-[#eee] h-8 w-8 rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                  <h4 className='font-medium'>{ele}</h4>
              </div>
      })}
    </div>
  )
}

export default LocationSearchPanel