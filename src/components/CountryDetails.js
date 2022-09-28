import countries from 'world-countries';
import { useParams } from "react-router-dom";
import CountryInfo from "./CountryInfo";

const CountryDetails = () => {
    let { id } = useParams();
    
    const findCountry = getCountryByCode(id);
    const borders = findCountry.borders.map ((border) => {
        return getCountryByCode(border);
    });

    const sortedCountryBorders = borders.sort((a, b) => {
        return b.area - a.area;
    });

    const sCountryBorders = sortedCountryBorders.map((border) => {
        return <CountryInfo 
        key = {border}
        data = {border}
        maxArea = {countries[0].area / 1.5}
        detailed = {false}
        />
    });
    
    return (
        <div>
            <h1>{findCountry.name.common} 
            <p>Bordering countries :</p></h1>
            <ul>
                {sCountryBorders}

            </ul>
        </div>
    );
}

function getCountryByCode(cca3) {

    const country = countries.find((country) => country.cca3 === cca3);
    return country;
}

export default CountryDetails;