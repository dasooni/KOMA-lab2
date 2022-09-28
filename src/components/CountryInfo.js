import React from 'react';
import {  Link } from 'react-router-dom';

function units(area) {
  const millionKM = 1000000;
  const thousandKM = 10000;

  if ( (area / millionKM) > 1) {
    return (area / millionKM).toPrecision(4) + ' million km';
  } else  {
    return (area / thousandKM).toPrecision(4) +' thousand km';  //
  }
}

// Components are functions that return an HTML element
// Props are arguments passed into a component
const CountryInfo = ( {data, maxArea, detailed} ) => {
  //set data to country data passed in as props
  const {name, area, capital, region, subregion} = data;
  // calculate the area percentage as shown in lab1
  let  ratio = (area)/ maxArea;
  let barWidth = ratio * 85 + '%';

  // functions to return basic or detailed information
  const basicInfo = () => {
    return (
      <div>
        
        <p><li> <Link to={`/country/${data.cca3}`}><span className="CountryName">{name.common}</span>
        </Link>
        {units(area)}<sup>2</sup>
        </li>
        <div className="area-bar" style={{width: barWidth}}></div>
        </p>
       
      </div>
    );
  }

  const fullInfo  = () => {
      return (
        <div >
          {basicInfo()}
          <ul > 
          <li>
          <li><p> Capital: {capital}</p></li>
          <li><p> Region: {region}</p></li>
          <li><p> Subregion: {subregion}</p></li>
          </li>
          </ul>
        </div>
      );
  }
  
  return (
    <div>
      <p>
        {detailed ? fullInfo() : basicInfo()}
      </p>
    </div> 
  );
}

export default CountryInfo;

