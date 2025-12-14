import "./style.css";

interface DueItem {
    category: string;
    amount: number;
    time: string;
}

interface DueProps {
    items: DueItem[];
}

const Due = ({ items }: DueProps) => {
    return (
        <div className="due-list">
            {items.map((d, i) => (
                <div className="due-item" key={i}>
                    <div>
                        <strong>{d.category}</strong>
                        <span>{d.time}</span>
                    </div>
                    <span className="due-amount">-${d.amount}</span>
                </div>
            ))}
        </div>
    );
};

export default Due;