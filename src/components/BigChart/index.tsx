import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import './style.css';

interface PriceData {
    time: number;
    price: number;
}

const BTCChart: React.FC = () => {
    const [data, setData] = useState<PriceData[]>([]);
    const [period, setPeriod] = useState('7d');

    const periods = [
        { label: '1д', value: '1d' },
        { label: '7д', value: '7d' },
        { label: '30д', value: '30d' },
        { label: '90д', value: '90d' },
    ];

    const generateData = (days: number) => {
        const result: PriceData[] = [];
        const now = Date.now();
        const basePrice = 45000;

        for (let i = 0; i < days * 24; i++) {
            const time = now - (i * 3600000);
            const price = basePrice + (Math.random() - 0.5) * 1000;
            result.unshift({
                time,
                price: Math.round(price * 100) / 100
            });
        }

        return result;
    };

    useEffect(() => {
        const daysMap: Record<string, number> = {
            '1d': 1,
            '7d': 7,
            '30d': 30,
            '90d': 90
        };

        const days = daysMap[period] || 7;
        setData(generateData(days));
    }, [period]);

    const formatTime = (timestamp: number) => {
        const date = new Date(timestamp);
        if (period === '1d') {
            return `${date.getHours().toString().padStart(2, '0')}:00`;
        }
        return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    };

    const formatPrice = (price: number) => {
        return price.toLocaleString('ru-RU', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };

    const latestPrice = data.length > 0 ? data[data.length - 1].price : 0;

    return (
        <div className="simple-chart">
            <div className="chart-header">
                <div>
                    <h3>BTC/USDT</h3>
                    <div className="price">${formatPrice(latestPrice)}</div>
                </div>
                <div className="period-buttons">
                    {periods.map(p => (
                        <button
                            key={p.value}
                            className={period === p.value ? 'active' : ''}
                            onClick={() => setPeriod(p.value)}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="time"
                            tickFormatter={formatTime}
                            stroke="#666"
                            fontSize={12}
                        />
                        <YAxis
                            tickFormatter={formatPrice}
                            stroke="#666"
                            fontSize={12}
                            domain={['dataMin - 500', 'dataMax + 500']}
                        />
                        <Tooltip
                            formatter={(value: number) => [`$${formatPrice(value)}`, 'Цена']}
                            labelFormatter={(label) => new Date(label).toLocaleString('ru-RU')}
                        />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BTCChart;