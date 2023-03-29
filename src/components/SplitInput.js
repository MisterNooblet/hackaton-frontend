import React from 'react';

function SplitInput(props) {
    return (
        <div className="input-group">
            <label htmlFor="split-input">Split Among:</label>
            <input type="range" id="split-input" min="1" max="10" value={props.value} onChange={props.onChange} />
            <output>{props.value}</output>
        </div>
    );
}

export default SplitInput;