import React from 'react';
// Components are functions that return an HTML element
// Props are arguments passed into a component
const CountryInfo = ( {data, maxArea, detailed} ) => {
  const {name, area, capital, region, subregion} = data;
  let  ratio = area / maxArea;
  let barWidth = ratio * 80 + '%';

  const basicInfo = () => {
    return (
      <div>
        
        <p ><li> <span className="CountryName">{name.common}</span>
        {(area / 1000000).toPrecision(4)} million km<sup>2</sup>
        </li></p>
        <div className="area-bar" style={{width: barWidth}}></div>
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
    <div >
      <p >
        {detailed ? fullInfo() : basicInfo()}
      </p>
    </div> 
  );
}

export default CountryInfo;

