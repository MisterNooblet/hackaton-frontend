import React, { useState } from 'react';
import BillInput from './BillInput';
import TipInput from './TipInput';
import SplitInput from './SplitInput';
import CountrySearch from './CountrySearch';
import Expenses from './Expenses';

function BillComponent() {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [splitPeople, setSplitPeople] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState(null);

    function handleBillChange(event) {
        setBill(Number(event.target.value));
    }

    function handleTipChange(event) {
        setTipPercent(Number(event.target.value));
    }

    function handleSplitChange(event) {
        setSplitPeople(Number(event.target.value));
    }

    function handleCountrySelect(country) {
        setSelectedCountry(country);
    }

    function handleCountryClear() {
        setSelectedCountry(null);
    }

    return (
        <div className="container">
            <BillInput value={bill} onChange={handleBillChange} />
            <TipInput value={tipPercent} onChange={handleTipChange} />
            <SplitInput value={splitPeople} onChange={handleSplitChange} />
            <CountrySearch onSelect={handleCountrySelect} onClear={handleCountryClear} />
            <Expenses bill={bill} tipPercent={tipPercent} splitPeople={splitPeople} selectedCountry={selectedCountry} />
        </div>
    );
}

export default BillComponent;