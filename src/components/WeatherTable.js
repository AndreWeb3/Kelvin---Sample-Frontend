
export default function WeatherTable(props) {
    const heading = ['Coordinates', 'City', 'State', 'Zip', 'Temperature', 'Time']
    const date = new Date(props.data.time)
    return (
        <div className="weather-table">
            <table className="table">
                <thead>
                    <tr className="tableRow">
                        {heading.map(head => <th className="tableHead">{head.toUpperCase()}</th>)}
                    </tr>
                </thead>
                <tr className="tableRow"> 
                    <td className='tableData'>{props.data.lat}{', '}{props.data.lon}</td>
                    <td className='tableData'>{props.data.city}</td>
                    <td className='tableData'>{props.data.state}</td>
                    <td className='tableData'>{props.data.zip}</td>
                    <td className='tableData'>{props.data.temperature} F</td>
                    <td className='tableData'>{props.data.time.slice(11)}</td>
                </tr>
            </table>
        </div>
    )
}