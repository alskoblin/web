import { LineChart, Line, ResponsiveContainer } from "recharts";
import "./style.css";

interface CryptoMiniChartProps {
    pair: string;
    data: { time: string; value: number }[];
}

const CryptoMiniChart = ({ pair, data }: CryptoMiniChartProps) => {
    return (
        <div className="card crypto-metric-custom">
            <span className="card-title">{pair}</span>
            <ResponsiveContainer width="100%" height={80}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CryptoMiniChart;