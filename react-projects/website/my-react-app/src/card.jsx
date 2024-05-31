import propTypes from 'prop-types'

function Card(props){
    return(
        <div className="Card">
            <p>Place Name: &nbsp; {props.name}</p>
            <p>Temperature: &nbsp; {props.temperature} </p>
            <p>Humidity: &nbsp; {props.humidity}</p>
        </div>
    );
}

Card.propTypes = {
    name: propTypes.string,
    temperature : propTypes.number,
    humidity: propTypes.number,
}

Card.defaultProps = {
    name: "Noname",
    temperature: "N/A",
    humidity: "N/A"
}
export default Card