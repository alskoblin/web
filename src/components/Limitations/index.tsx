import "./style.css";

interface LimitationsProps {
    limit: number;
    spent: number;
}

const Limitations = ({ limit, spent }: LimitationsProps) => {
    const percent = Math.min((spent / limit) * 100, 100);

    return (
        <div className="limit-card">
            <span>Monthly budget</span>
            <strong>${spent} / ${limit}</strong>

            <div className="limit-bar">
                <div className="limit-progress" style={{ width: `${percent}%` }} />
            </div>
        </div>
    );
};

export default Limitations;