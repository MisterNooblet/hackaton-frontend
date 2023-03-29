import React from 'react';

function TipInput(props) {
    return (
        <div className="input-group">
            <label htmlFor="tip-input">Tip Percentage:</label>
            <input type="range" id="tip-input" min="0" max="100" value={props.value} onChange={props.onChange} />
            <output>{props.value}%</output>
        </div>
    );
}

export default TipInput;