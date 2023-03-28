import React, { useState, useEffect } from 'react';


const NavbarSearch = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('https://example.com/api/options')
            .then(response => response.json())
            .then(data => setOptions(data));
    }, []);

    return (
        <div class="navbarSearch-container">

            <div className='flex-center column'>
                <h1>Please Choose A Country </h1>
                <select
                    className='selectNav'
                    placeholder='Select a culture'
                >
                    {options.map(option => (
                        <option key={option.id}
                            value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>


        </div>
    )
}

export default NavbarSearch

