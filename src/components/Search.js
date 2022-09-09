import React, { useState } from 'react'
import SearchResults from './SearchResults'
// import { KvActionButton, KvSearch } from '@kelvininc/react-ui-components'
import '../styles/app.css';

const geourl = 'https://geocoding-api.open-meteo.com/v1/search?name='

export default function Search(props) {
    const [ displayResults, setDisplayResults ] = useState()
    const [ searchResults, setSearchResults ] = useState('')

    const handleChange = async (i) => {
        const input = i.toLowerCase().trim()
        if(i.length<3){
            setDisplayResults(false)
            return
        } 
        if(input.length>=3){
            const response = await fetch(geourl+input)
            const data = await response.json()

            const locs = data.results && data.results.filter(o => 
                o.name.toLowerCase().includes(input) && 
                o.admin1 && 
                o.postcodes           
            ).map (loc => {
                return(
                {
                    id: loc.id,
                    city: loc.name,
                    state: loc.admin1,
                    zip: loc.postcodes[0],
                    lat: loc.latitude,
                    lon: loc.longitude
                }
            )})
            if(data.results!=undefined){
                setSearchResults(locs)
                setDisplayResults(true)
            }

        }
    }

    const setLocation = (loc) => {
        console.log("selected:" + loc)
        setDisplayResults(false)
        props.callback(loc)
    }

    return (
        <>
            <div className="search-container">
                <div className="searchInput">
                {/* <KvSearch
                    onClickResetButton={handleSubmit}
                    onTextChange={e => setSearchValue(e.target.value)}
                    placeholder="Search"
                    size="large"
                /> */}
                <input 
                    className="searchInput"
                    placeholder={'\u2315 Search'}
                    onChange={e => handleChange(e.target.value)}
                />
                </div>

                <div className="searchButton">
                    {/* <KvActionButton
                        size="large"
                        type="primary"
                        clickButton={handleSubmit}
                    >
                    Search
                    </KvActionButton> */}
                    <button
                        className="searchButton"
                        //onClick={handleSubmit}
                    > Search
                    </button>
                </div>
            </div>
            {
                displayResults &&
                <SearchResults callback={setLocation} searchResults={searchResults}/>
            }

        </>
    )

}