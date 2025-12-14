import "./style.css";

interface SummaryStats {
    count: number;
    spent: number;
    cashback: number;
}

interface TransactionsSummaryProps {
    period: number;
    stats: SummaryStats;
    onPeriodChange: (period: number) => void;
}

const TransactionsSummary = ({
                                 period,
                                 stats,
                                 onPeriodChange,
                             }: TransactionsSummaryProps) => {
    return (
        <div className="summary-card">
            <div className="summary-header">
                <span>Summary</span>
                <select
                    value={period}
                    onChange={(e) => onPeriodChange(Number(e.target.value))}
                >
                    <option value={7}>7 days</option>
                    <option value={30}>30 days</option>
                    <option value={90}>90 days</option>
                </select>
            </div>

            <div className="summary-grid">
                <div>
                    <span>Transactions</span>
                    <strong>{stats.count}</strong>
                </div>
                <div>
                    <span>Spent</span>
                    <strong>${stats.spent}</strong>
                </div>
                <div>
                    <span>Cashback</span>
                    <strong>${stats.cashback}</strong>
                </div>
            </div>
        </div>
    );
};

export default TransactionsSummary;