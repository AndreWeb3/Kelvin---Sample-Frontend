
export default function SearchResults(props) { 
    const setLocation = (e, latlon) => {
        e.preventDefault()
        props.callback(latlon)

    }
    return ( 
        <ul className="searchResults">
            {
                props.searchResults.length>0 &&
                 props.searchResults.map(loc => {
                    return(
                    <a href="" className="dropdown"
                        onClick={e=> setLocation(e, loc)}>
                        <li key={loc.id} >
                        {loc.city}, {loc.state}  {loc.zip}
                        </li>
                    </a>
                    )
                }) 
            }
        </ul>
    )
}