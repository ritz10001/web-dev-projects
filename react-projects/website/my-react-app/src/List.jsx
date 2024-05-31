import propTypes from 'prop-types'

function List(props){
    const it = props.items;

    const placeItems = it.map((place) => 
        <li key={place.index}>{place.name}</li>
    );


    return(<ul>{placeItems}</ul>);
}

export default List