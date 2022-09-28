import React from 'react';
import '../App.css';
import countries from 'world-countries';
import CountryInfo from './CountryInfo';
import CountrySearch from './CountrySearch';


// this function modifies countryInfo??
var countriesByArea = countries.sort((a, b) => {
  return b.area - a.area;
});

// remove Antarctica from the list
countriesByArea = countriesByArea.filter(country => { 
  return country.name.common !== 'Antarctica';
});

const topCountries = 15;

//State parent of CountryInfo and CountrySearch is App? 
function CountryList()  { 
  return (
    <div>
      <h1 className="App-header">World Countries</h1>
    
      <ul>
      <h1> Largest country </h1>
      <CountryInfo data = {countriesByArea[0]}
        maxArea = {countries[0].area}
        detailed = {false}/>
      </ul>
      
      <div className='CountrySearchComponent'> 
      <h2> Search for countries</h2>
      <CountrySearch data = {countriesByArea}/>
      
      </div>

      <div className='TopListComponent'>
      <h2>Top {topCountries} largest countries</h2> 
      <ol>
        {countriesByArea.slice(0, topCountries).map((country, index) => {
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
export {countriesByArea};
export default CountryList;

