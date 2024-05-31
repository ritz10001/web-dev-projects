import Card from './card.jsx'
import ColorPicker from './ColorPicker.jsx';
import List from './List.jsx'
import MyComponent from './MyComponent.jsx';
function App() {

  const places = [{id:1, name: "Dallas", temperature: 26, humidity: 60},
                  {id:2, name: "Houston", temperature: 30, humidity: 90},
                  {id:3, name: "Austin", temperature: 28, humidity: 80}];
    

  return (
    <>
      {/* <Card name={places[0].name} temperature = {places[0].temperature} humidity = {places[0].humidity}/>
      <Card name={places[1].name} temperature = {places[1].temperature} humidity = {places[1].humidity}/>
      <Card name={places[2].name} temperature = {places[2].temperature} humidity = {places[2].humidity}/>  */}
      {/* <List items = {places} /> */}
      <MyComponent />
    </>
  )
}

export default App
