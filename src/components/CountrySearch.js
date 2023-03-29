import React, { useState } from 'react';

function CountrySearch({ suggestions, onCountrySelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredSuggestions = suggestions.filter(
        country => country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleInputChange(e) {
        setSearchTerm(e.target.value);
    }

    function handleCountryClick(country) {
        onCountrySelect(country);
        setSearchTerm('');
    }

    return (
        <div className="searchInput">
            <input type="text" value={searchTerm} onChange={handleInputChange} />
            <ul className="resultBox">
                {filteredSuggestions.map((country, index) => (
                    <li key={index} onClick={() => handleCountryClick(country)}>
                        {country.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CountrySearch;