import "./style.css";

interface CurrencyItem {
    code: string;
    amount: number;
}

interface CurrencyProps {
    items: CurrencyItem[];
}

const Currency = ({ items }: CurrencyProps) => {
    return (
        <div className="currency-list">
            {items.map((c) => (
                <div className="currency-item" key={c.code}>
                    <span>{c.code}</span>
                    <strong>{c.amount}</strong>
                </div>
            ))}
        </div>
    );
};

export default Currency;