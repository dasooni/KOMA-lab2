import React from 'react';
import './App.css';
import countries from 'world-countries';
import CountryInfo from './CountryInfo';

// this function modifies countryInfo??
const countriesByArea = countries.sort((a, b) => {
  return b.area - a.area;
});

let removeAntarctica = countriesByArea.filter(country => { 
  return country.name.common !== 'Antarctica';
});

const topCountries = 15;


function App()  { 
console.log(countries); 
  return (
    <div>
      <ul>
      <h1> Largest country </h1>
      
      <CountryInfo data = {countries[0]}
        maxArea = {countries[0].area}
        detailed = {false}/>
      </ul>
      
      <h2>Top {topCountries} largest countries</h2> 
      <div className='article'>
      <ol>
        {removeAntarctica.slice(0, topCountries).map((country, index) => {
          return <CountryInfo 
          key = {country.cca3} 
          data = {country} 
          maxArea = {countries[0].area} 
          detailed={index < 15} 
         /> 
        })}
        </ol>
      </div>
      

    </div>
  );
}

export default App;
