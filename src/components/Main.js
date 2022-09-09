import React, { useState } from 'react'
import Search from './Search'
import WeatherTable from './WeatherTable'
//import '@kelvininc/react-ui-components/assets/fonts/font-proxima-nova.css'
import '../styles/app.css'

const url = 'https://api.open-meteo.com/v1/forecast?'

export default function Main() {
  const [ data, setData ] = useState()
  
  const searchCallback = async (loc) => {
    const response = await fetch(url+'latitude='+loc.lat.toFixed(2)+'&longitude='+loc.lon.toFixed(2)+'&current_weather=true&temperature_unit=fahrenheit')
    const result = await response.json()
    setData({...loc, ...result.current_weather})
  }

  return (
    <div className="main">
      <Search callback={searchCallback}/>
      { data && <WeatherTable data={data}/> }
    </div>
  )
}
