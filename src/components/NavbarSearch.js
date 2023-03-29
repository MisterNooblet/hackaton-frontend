import React, { useState, useEffect } from 'react';
import CountriesApi from '../utils/CountriesApi';


const NavbarSearch = ({ selected, setSelected }) => {
    const [options, setOptions] = useState([]);

    const fetchData = async () => {
        const result = await CountriesApi.fetchCountries()
        setOptions(prev => prev = result.data)
    }

    const handleCountrySelect = async (e) => {
        const result = await CountriesApi.fetchCountry(e.target.value)
        setSelected(prev => prev = result)
    }

    useEffect(() => {
        fetchData()
        //eslint-disable-next-line
    }, []);

    return (
        <div class="navbarSearch-container" selected={selected} setSelected={setSelected} >

            <div className='flex-center column'>
                <h1 className='title-navSearch'>Please Choose A Country </h1>
                <select
                    className='selectNav'
                    placeholder='Select a culture'
                    onChange={(e) => handleCountrySelect(e)}
                >
                    {options && options.map(option => (
                        <option key={option}
                            value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>


        </div>
    )
}

export default NavbarSearch

