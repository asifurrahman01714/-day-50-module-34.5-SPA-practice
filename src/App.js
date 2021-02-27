import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Country/Cart/Cart';
import animalData from './data/data.json';
function App() {
  const [countries, setCountries] = useState([]);

  const [ cart, setCart ] = useState([]);
  const handleAddCountry =(country)=>{
    console.log('button added', country.name);
    const newCart = [...cart, country];
    setCart(newCart);
  }
 useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
 }, []);

const [ animal, setAnimal] = useState([]);
useEffect(() =>{
  console.log(animalData);
  setAnimal(animalData);
},[])
 
  return (
    <div className="App">
      <h4>Total Country: {countries.length}</h4>
      <h4>Added country: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {countries.map(country => <Country country ={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)}
      </ul> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
