import React from 'react';

function BillInput(props) {
    return (
        <div className="input-group">
            <label htmlFor="bill-input">Bill Total:</label>
            <input type="number" id="bill-input" value={props.value} onChange={props.onChange} />
        </div>
    );
}

export default BillInput;