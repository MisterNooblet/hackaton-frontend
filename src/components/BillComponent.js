import React from 'react'

const BillComponent = () => {
    return (
        <div>
            <div>
                <label>
                    Bill Total:
                    <input placeholder='Bill Total' />
                </label>
                <label>
                    Tip:
                </label>
                <label>
                    Tip + Bill:
                </label>
            </div>
            <br></br>
            <div>
                <p> is a common tipping practice if there is no service charge in </p>
            </div>
            <div>
                Tip
            </div>
        </div>
    )
}

export default BillComponent