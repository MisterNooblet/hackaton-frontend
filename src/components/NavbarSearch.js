import React, { useState, useEffect } from 'react';


const NavbarSearch = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('https://example.com/api/options')
            .then(response => response.json())
            .then(data => setOptions(data));
    }, []);

    return (
        <div>

            <select
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
    )
}

export default NavbarSearch

