import { useState } from 'react';

function Expenses() {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [splitPeople, setSplitPeople] = useState(1);

    const handleBillChange = (event) => {
        setBill(Number(event.target.value));
    };

    const handleTipChange = (event) => {
        const tip = Number(event.target.value);
        if (tip < 10) {
            setTipPercent(0.01 * tip);
        } else {
            setTipPercent(0.01 * tip);
        }
    };

    const handleSplitChange = (event) => {
        setSplitPeople(Number(event.target.value));
    };

    const calcExpenses = () => {
        const totalExpense = bill + (bill * tipPercent);
        const tip = bill * tipPercent;
        const splitTip = tip / splitPeople;
        const splitBill = totalExpense / splitPeople;
        return { totalExpense, tip, splitTip, splitBill };
    };

    const { totalExpense, tip, splitTip, splitBill } = calcExpenses();

    return (
        <div>
            <div>
                <label htmlFor="billTotal">Bill Total:</label>
                <input type="number" id="billTotal" value={bill} onChange={handleBillChange} />
            </div>
            <div>
                <label htmlFor="tipRange">Tip Percentage:</label>
                <input type="range" id="tipRange" min="0" max="100" step="1" value={tipPercent * 100} onChange={handleTipChange} />
                <span>{tipPercent * 100}%</span>
            </div>
            <div>
                <label htmlFor="splitRange">Split:</label>
                <input type="range" id="splitRange" min="1" max="10" step="1" value={splitPeople} onChange={handleSplitChange} />
                <span>{splitPeople}</span>
            </div>
            <div>
                <p>Total Expense: {totalExpense.toFixed(2)}</p>
                <p>Tip: {tip.toFixed(2)}</p>
                <p>Tip per person: {splitTip.toFixed(2)}</p>
                <p>Bill per person: {splitBill.toFixed(2)}</p>
            </div>
        </div>
    );
}
export default Expenses;