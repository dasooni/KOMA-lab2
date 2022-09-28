import {React, useState} from 'react';
import countries from 'world-countries';
import CountryInfo from './CountryInfo';
import {countriesByArea} from './CountryList';


const  CountrySearch = () => {
    // This state variable is used to store the search term
    const [searchString, setSearchString] = useState("");
    //This state is used to store the results of the search
    const [searchResults, setSearchResults] = useState([]);
    // This state is used to store the country that is selected
    const  handleSearch = (searchTerm) => {
        // Filter the countries by the search term
        return countriesByArea.filter((data) => {
    
            // If the search term is empty, return all countries
            if (searchTerm === "") {
                return true;
            }
            // If the search term is not empty, return countries that match the search term
            return data.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    
        });
    } 
    // Handle the search input
    function handleChange (event) {
        // Update the search term
        setSearchString(event.target.value);
        // Update the search results
        setSearchResults(handleSearch(event.target.value));
    };

    return (
        <div>
            <input className='SearchBox'
            type="text" 
            placeholder="Search countries" 
            value={searchString} 
            onChange={handleChange} />
            <ul className='FluidIntersection'>
                {searchResults.slice(0,5).map((data) => {
                    return <li> 
                        <CountryInfo data={data} 
                        maxArea={countries[0].area} 
                        detailed={false} />
                    </li>;
                })}
            </ul>
        </div>
    );
}
export default CountrySearch;

